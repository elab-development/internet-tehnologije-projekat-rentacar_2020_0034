//biblioteka za rad s MongoDB bazom podataka u Node.js okruženju
import mongoose from "mongoose";

//definicija seme
const CarSchema = new mongoose.Schema ({
    title: {type:String, required: true},
    description: {type:String, required: true},
    CarType: {type:String, required: true},
    location: {type:String, required: true},
    price: {type:Number, required: true},
    photo: {type:String, required: true},
    //povezano s drugim modelom "User".
    creator: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},

})

// Mongoose model za "Car" koji se temelji na prethodno definisanoj šemi 
const CarModel = mongoose.model('Car', CarSchema);

export default CarModel;