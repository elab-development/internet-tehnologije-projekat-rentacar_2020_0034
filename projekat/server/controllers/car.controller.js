import mongoose from 'mongoose';
//modeli koji su potrebni
import Car from '../mongodb/models/car.js';
import User from '../mongodb/models/user.js';

import * as dotenv from 'dotenv';
import {v2 as cloudinary} from 'cloudinary';

//biblioteka dotenv učitava .env fajl
dotenv.config();

//loudinary.config() koja prihvata tri parametra  Ovi parametri se prosleđuju iz .env fajla preko process.env,
//aplikacija može da koristi Cloudinary API za preuzimanje, otpremanje i manipulisanje slikama
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})



const getAllCars = async (req, res) => {
    //parametri za filtriranje podataka,ograničavanje broja povratnih podataka i sortiranje podataka
    const { _end, _order, _start, _sort, title_like = "", carType = ""} = req.query;

    //kasnije se koristi za definisanje različitih parametara za pretraživanje baze podataka
    const query = {};

    //proverava se "carType" iz zahteva i ako je definisan, dodaje se u "query" automobil kao parametar
    if(carType !== ""){
        query.carType = carType;
    }

    // Pronađeni automobili se dodaju u "query" automobil
    if(title_like){
        query.title = {$regex: title_like, $options: 'i' };
    }

    try {
        //countDocuments funkcija da bi se izbrojao broj pronađenih koncerata pre slanja upita bazi podataka
        const count = await Car.countDocuments({query});

        //vracaju se auti na osnovu zahteva,ogranicenje broja rezultata i da li ima preskakanje, i sortiranje
        const cars = await Car
            .find(query)
            .limit(_end)
            .skip(_start)
            .sort({[_sort]: _order})

        // uključuje se informacija o ukupnom broju pronađenih koncerata
        res.header('x-total-count', count);
        //Vezano za CORS politiku! Dozvoljava klijentskoj pristup x-total-count, tj.
        // informaciji o ukupnom broju podataka sto je korisno za paginaciju!
        res.header('Access-Control-Expose-Headers', 'x-total-count');
        //sve pronađene auti se šalju kao JSON odgovor klijentskoj aplikaciji.
        res.status(200).json(cars);
    } catch (error) {
        res.status(500).json({message:error.message}) 
    }
};

const getCarDetails = async (req, res) => {
    //iz parametara zahteva se izdvaja id
    const { id } = req.params;
    //da se nadje taj automobil sa tim id-em
    const carExists = await Car.findOne({
        _id: id
    }).populate('creator',); //da se prikaze i kreator auta

    //salje odgovor sa detaljima auta
    if(carExists) { res.status(200).json(carExists) 
    }else{
        res.status(404).json({ message: 'Car not found'});
    }
};

const createCar = async (req, res) => {

    try {
        //req.body sadrži parametre za kreiranje auta koje je korisnik poslao preko HTTP zahteva.
        const {title, description, carType, location, price, photo, email} = req.body;

    //zapocinje se nova transakcija u bazi podataka
    const session = await mongoose.startSession();
    session.startTransaction();

    //pronađe korisnika na osnovu njihove adrese e-pošte
    const user = await User.findOne({ email }).session(session);

    if(!user) throw new Error('User not found');

    //servis da bi se slika auta postavila na mrežu i dobila javni URL.
    const photoUrl = await cloudinary.uploader.upload(photo);

    //novu instanca Car modela, koja se zatim dodaje u bazu podataka. 
    const newCar = await Car.create({
        title,
        description,
        carType,
        location,
        price,
        photo: photoUrl.url,
        creator: user._id
    });
    // ID novog auta u listu svih koncerata korisnika. Zatim se ovo ažuriranje čuva u bazi podataka.
    user.allCars.push(newCar._id);
    await user.save({ session });

    //izvrsava transakciju, promene tokom transakcije se potvrđuju.
    await session.commitTransaction();

    res.status(200).json({ message: 'Car created succesfully'}) 

    } catch (error) {
       res.status(500).json({message:error.message}) 
    }
   

};
//editovanje auta
const updateCar = async (req, res) => {
    try {
        //koji se menja
        const {id} = req.params;
        //req.body sadrži parametre za kreiranje objeata koje je korisnik poslao preko HTTP zahteva.
        const {title, description, carType, location, price, photo} = req.body;

        const photoUrl = await cloudinary.uploader.upload(photo);

        await Car.findByIdAndUpdate({_id: id}, {
            title,
            description,
            carType,
            location,
            price,
            photo: photoUrl.url || photo

        })

        res.status(200).json({message: 'Car updated successfully'})

    } catch (error) {
        res.status(500).json({message: error.message})
        
    }
};


//brisanje auta
const deleteCar = async (req, res) => {
    try {
        //koji automobil se brise
        const { id } = req.params;

        //koristi za pronalaženje auta u bazi
        const carToDelete = await Car.findById({
            _id: id
        }).populate('creator'); //učitali podaci korisnika koji je kreirao automobil

        if(!CarToDelete) throw new Error('Car not found'); //ako ne postoji

        //zapocinje se nova transakcija u bazi podataka
        const session = await mongoose.startSession();
        session.startTransaction();

        //Uklanjanje auta iz baze podataka koristeći remove funkciju 
        carToDelete.remove({session});
        //uklanja referenca na automobil kod korisnika sa pull funkcijom
        carToDelete.creator.allCars.pull(CarToDelete);

        //Ažuriranje korisničkog auta u bazi podataka kako bi se uklonila referenca
        await carToDelete.creator.save({session});
        await session.commitTransaction();

        res.status(200).json({message: 'Car deleted successfully'});

    } catch (error) {
        res.status(500).json({message: error.message})
    }
};





export {
    getAllCars,
    getCarDetails,
    createCar,
    updateCar,
    deleteCar,
}