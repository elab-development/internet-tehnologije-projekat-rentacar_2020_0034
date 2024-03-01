//Uvoz biblioteke Express koja se koristi za upravljanje rutama i zahtevima
import express from 'express';
//funkcije iz kontrolera
import { createCar,deleteCar,getAllCars,getCarDetails,updateCar} from '../controllers/car.controller.js';

//Kreiranje novog router auta koji se koristi za definisanje novih ruta
const router = express.Router();

router.route('/').get(getAllCars);

router.route('/:id').get(getCarDetails);

router.route('/').post(createCar);

//za azuriranje samo odredjenih delova
router.route('/:id').patch(updateCar);

router.route('/:id').delete(deleteCar);


export default router;

