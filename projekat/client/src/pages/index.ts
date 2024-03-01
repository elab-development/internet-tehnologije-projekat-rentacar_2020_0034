
import Home from './home';
import AllCars from './all-cars';
import CreateCar from './create-car';
import EditCar from './edit-car';
import MyProfile from './my-profile';
import { Login } from './login';
import CarDetails from './car-details';
import ManagerProfile from './manager-profile';
import Managers from './manager';
import AdminHome from './admin_homepage';


//predstavlja izvoz svih komponenti koje se koriste u aplikaciji. Svaka od ovih komponenti se uvozi iz svog odgovarajućeg fajla
// i nakon toga se izvozi na korišćenje drugim delovima aplikacije.
export {
  Home,
  Login,
  AllCars,
  CreateCar,
  MyProfile,
  EditCar,
  CarDetails,
  ManagerProfile,
  Managers,
  AdminHome
};