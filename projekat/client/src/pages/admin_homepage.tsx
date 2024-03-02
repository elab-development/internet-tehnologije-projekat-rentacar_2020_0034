import { useList } from '@pankod/refine-core';

import{ Typography, Box, Stack} from '@pankod/refine-mui'

import { FiActivity } from "react-icons/fi";


import{
    CarReferrals,
    TotalRevenue,
    CarCard,
} from 'components';
 

const AdminHome = () => {
    {/*za vracanje automobila koristimo ovu kuku */}
    const {data, isLoading, isError} = useList({
        resource:'cars',
        config: {
            pagination:{
            pageSize: 6
            }
        }

    })


//koristi se opcionalni operator ?. da bi se izbeglo pristupanje undefined vrednostima 
//u objektu data. Ako data ne postoji, uzmemo prazan niz umesto undefined vrednosti.
    const latestCars = data?.data ?? [];

    if(isLoading) return <Typography>Loading...</Typography>
    if(isError) return <Typography>Something went wrong!</Typography>


    return(

        <Box sx = {{backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWYi159cmBE7C74cPAK2afrz5MkcZnvUm6XNu_rZnjVr0rX8rF6HoGmTrvknMiAqoy7gs&usqp=CAU")',
        padding:'20px', borderRadius:'25px'}}>
            <Typography fontSize={25} fontWeight={700} color="white">
                Admin Dashboard <FiActivity />
            </Typography>


            <Stack mt="25px" width="100%" direction={{xs: 'column', lg: 'row'}} gap={4}>
                <CarReferrals/>
                <TotalRevenue/>
            </Stack>


            <Box
                flex = {1}
                borderRadius="15px"
                padding="20px"
                bgcolor="#fcfcfc"
                display="flex"
                flexDirection="column"
                minWidth="100%"
                mt="25px"
                sx={{backgroundImage:'url("https://st.depositphotos.com/1000350/2282/i/450/depositphotos_22823894-stock-photo-dark-concrete-texture.jpg")', padding:'20px', borderRadius:'25px'}}
                >
                <Typography fontSize="18px" fontWeight={600} color="white"> Latest cars </Typography>
                <Box mt={2.5} sx={{display: 'flex', flexWrap:'wrap', gap:5, justifyContent: "center"}}>
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
        </Box>
        
    )
}

export default AdminHome