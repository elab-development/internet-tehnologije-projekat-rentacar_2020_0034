import { useList } from '@pankod/refine-core';

import { useEffect, useState } from 'react';

import{ Typography, Box} from '@pankod/refine-mui'

import myImage from '../assets/car1.gif'; 
import myImage2 from '../assets/car2.gif';

import{
    PieChart,
    SatisfactionBox,
    CarCard
} from 'components';
 

const Home = () => {
    {/*za vracanje auta koristimo ovu kuku */}
    const {data, isLoading, isError} = useList({
        resource:'cars',
        config: {
            pagination:{
            pageSize: 6
            }
        }


    })


    // State to hold the total number of cars
    const [totalCars, setTotalCars] = useState<number>(0);

    useEffect(() => {
        // Calculate the total number of cars
        if (data) {
            setTotalCars(data.total);
        }
    }, [data]);

//koristi se opcionalni operator ?. da bi se izbeglo pristupanje undefined vrednostima 
//u objektu data. Ako data ne postoji, uzmemo prazan niz umesto undefined vrednosti.
    const latestCars = data?.data ?? [];

    if(isLoading) return <Typography>Loading...</Typography>
    if(isError) return <Typography>Something went wrong!</Typography>

    return(
        <Box sx={{ display: 'flex' ,backgroundImage:'url("https://st.depositphotos.com/1000350/2282/i/450/depositphotos_22823894-stock-photo-dark-concrete-texture.jpg")',
         borderRadius:'35px'}}>
        <Box
        sx={{  flex: 1,
            backgroundImage:'url("https://st.depositphotos.com/1000350/2282/i/450/depositphotos_22823894-stock-photo-dark-concrete-texture.jpg")',
            zIndex: 1, 
            padding: '20px',
            borderRadius:'35px'}}
        >
            <Typography className="line-1 anim-typewriter" fontSize={25} fontWeight={700} color="#FFFFFF" sx={{fontFamily:"Orbitron"}}>
                Welcome to the number one car rental dealership!
                 
            </Typography>
            
            
            <Box
                flex = {1}
                borderRadius="15px"
                padding="20px"
                bgcolor="#fcfcfc"
                display="flex"
                flexDirection="column"
                minWidth="100%"
                mt="25px"
                sx={{ backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWYi159cmBE7C74cPAK2afrz5MkcZnvUm6XNu_rZnjVr0rX8rF6HoGmTrvknMiAqoy7gs&usqp=CAU")'}}
                >
            <Typography fontSize={15} fontWeight={600} color="#FFFFFF" sx={{ textAlign: "justify", fontFamily: "Orbitron"}}>
            Rent A Car is your premier destination for hassle-free car rentals.
             With a diverse fleet of vehicles and a commitment to customer satisfaction,
              we provide convenient and reliable transportation solutions for all your needs.
              Our experienced team is dedicated to delivering exceptional service and support,
                 ensuring that your rental experience is smooth and enjoyable. Whether you're traveling 
                 for business or leisure, Rent A Car is here to make your journey comfortable and stress-free.
            </Typography>

            <br></br>
            <Box
            id="chart"
            flex={1}
            display="flex"
            bgcolor="#fcfcfc"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            pl={3.5}
            py={2}
            gap={8}
            borderRadius="15px"
            minHeight="110px"
            width="fit-content"
            sx={{       backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWYi159cmBE7C74cPAK2afrz5MkcZnvUm6XNu_rZnjVr0rX8rF6HoGmTrvknMiAqoy7gs&usqp=CAU")'
        }}

            >
              <img 
            src= {myImage}
            alt='car'
            style={{ 
                height: '241px', 
                width: '500px', 
                borderRadius: '35px',
                boxShadow: `
                  inset 0 0 20px #8b0000,
                  inset 5px 0 20px #8b0000,
                  inset -5px 0 20px #8b0000,
                  inset 5px 0 40px #8b0000,
                  inset -5px 0 40px #8b0000,
                  0 0 20px #8b0000,
                  -3px 0 10px #8b0000,
                  3px 0 10px #8b0000`
              }}
            />

            <img 
            src= {myImage2}
            alt='car'
            style={{ 
                height: '241px', 
                width: '500px', 
                borderRadius: '35px',
                boxShadow: `
                  inset 0 0 20px #8b0000,
                  inset 5px 0 20px #8b0000,
                  inset -5px 0 20px #8b0000,
                  inset 5px 0 40px #8b0000,
                  inset -5px 0 40px #8b0000,
                  0 0 20px #8b0000,
                  -3px 0 10px #8b0000,
                  3px 0 10px #8b0000`
              }}
            
            
            />  
            </Box>
            

            </Box>

            <Box
                flex = {1}
                borderRadius="15px"
                padding="20px"
                bgcolor="#fcfcfc"
                display="flex"
                flexDirection="column"
                minWidth="100%"
                mt="25px"
                sx={{ backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWYi159cmBE7C74cPAK2afrz5MkcZnvUm6XNu_rZnjVr0rX8rF6HoGmTrvknMiAqoy7gs&usqp=CAU")',
                boxShadow: `
                inset 0 0 5px #8b0000,
                inset 1px 0 5px #8b0000,
                inset -1px 0 5px #8b0000,
                inset 1px 0 10px #8b0000,
                inset -1px 0 10px #8b0000,
                0 0 5px #8b0000,
                -0.5px 0 2.5px #8b0000,
                0.5px 0 2.5px #8b0000`,}}
                >
                <Typography fontSize="18px" fontWeight={600} color="#FFFFFF" fontFamily="Orbitron"> Latest cars for rent:</Typography>
                <Box mt={2.5} sx={{display: 'flex', flexWrap:'wrap', gap:5, justifyContent: 'center'}}>
                {latestCars.map((car) => (

                    <CarCard
                    key={car._id}
                    id={car._id}
                    title={car.title}
                    location={car.location}
                    price={car.price}
                    photo={car.photo}
                    />
                ))}
                </Box>

            </Box>
       
            <Box
            flex = {1}
            borderRadius="15px"
            padding="20px"
            bgcolor="#fcfcfc"
            display="flex"
            flexDirection="column"
            minWidth="100%"
            mt="25px"
            sx={{ backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWYi159cmBE7C74cPAK2afrz5MkcZnvUm6XNu_rZnjVr0rX8rF6HoGmTrvknMiAqoy7gs&usqp=CAU")',
            boxShadow: `
            inset 0 0 5px #8b0000,
            inset 1px 0 5px #8b0000,
            inset -1px 0 5px #8b0000,
            inset 1px 0 10px #8b0000,
            inset -1px 0 10px #8b0000,
            0 0 5px #8b0000,
            -0.5px 0 2.5px #8b0000,
            0.5px 0 2.5px #8b0000`,}}
            >
                  <Typography fontSize="20px" fontWeight={600} color="#FFFFFF" fontFamily="Orbitron" sx={{marginBottom:"10px"}}> Our locations in Europe</Typography>
                  <iframe src="https://snazzymaps.com/embed/581120" width="100%" height="600px" style={{border:"none;"}}></iframe>
            </Box>



 <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
                <SatisfactionBox
                title="Number of satisfied customers"
                value={550}
                
                />

                <PieChart
                    title="Total number of cars"
                    value={totalCars}
                    series={[16,16,16,16,16,16]}
                    colors={['#8B0000', '#000000', '#AA0000', '#660000', '#58111A', '#696969']}                
                />            

            </Box>
           

           


            
        </Box>
        </Box>
        
    )
}

export default Home