import { FaArrowLeft } from 'react-icons/fa';
import { useParams,  useNavigate } from 'react-router-dom';
import useCar from '../customhooks/useCar';
import './CarDetails.css'


const CarDetails = () => {
  const { id } = useParams();
  const car = useCar(id);
  const navigate = useNavigate();

  if (!car) {
    return <div>Loading...</div>;
  }

  const HandleBackToCars = () => {
    navigate('/cars');
  };

  return (
    <>
    <div className='details-page'>
    <div className="details-container">
      <div className="details-header" >
        <h2 className="details-title">{car.name}</h2>
        <p className="details-description">{car.description}</p>
        <p className="details-price">
          <strong>Price of the car: </strong> {car.price} EUR</p>
      </div>
      <p className="details-info">
        <strong>Rent time: </strong> {car.rentTimeInDays} days
      </p>
      <p className="details-info">
        <strong>Fuel type: </strong> {car.fuelType}
      </p>
      <p className="details-info">
        <strong>Gear type: </strong> {car.gearType}
      </p>
      <p className="details-info">
        <strong>Car properties: </strong> {car.properties}
      </p>
      <p className="details-info">
        <strong>Car registration: </strong> {car.registration}
      </p>
      <p className="details-info">
        <strong>Car type: </strong> {car.carType.name}
      </p>
      <button onClick={HandleBackToCars} className="back-to-cars-button">
        <FaArrowLeft style={{ marginRight: '5px' }} />
        Back to All Cars
      </button>
    </div>
    </div>

    </>
  );
};

export default CarDetails;
