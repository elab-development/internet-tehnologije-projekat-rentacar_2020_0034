import { useList } from "@pankod/refine-core";
import { Box, Typography } from "@pankod/refine-mui";

import { ManagerCard } from "components";



const Managers = () => {

    const { data, isLoading, isError } = useList({ resource: "users" });

    //koristi se opcionalni operator ?. da bi se izbeglo pristupanje undefined vrednostima 
    //u objektu data. Ako data ne postoji, uzmemo prazan niz umesto undefined vrednosti.
    const allManagers = data?.data ?? [];

    if (isLoading) return <div>loading...</div>;
    if (isError) return <div>error...</div>;

    return (
        <Box sx={{    backgroundImage:'url("https://st.depositphotos.com/1000350/2282/i/450/depositphotos_22823894-stock-photo-dark-concrete-texture.jpg")', 
        padding:'10px', borderRadius:'25px'}}>
            <Typography fontSize={25} fontWeight={700} color="white" fontFamily="Orbitron">
                Agents List
            </Typography>

            <Box
                mt="20px"
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px",
                    backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWYi159cmBE7C74cPAK2afrz5MkcZnvUm6XNu_rZnjVr0rX8rF6HoGmTrvknMiAqoy7gs&usqp=CAU")',
                    borderRadius:'25px'
                }}
            >
                {allManagers.map((manager) => (
                    (manager.email !== "rent2001car@gmail.com") && (
                        <ManagerCard
                        key={manager._id}
                        id={manager._id}
                        name={manager.name}
                        email={manager.email}
                        avatar={manager.avatar}
                        noOfCars={manager.allCars.length}
                        />
                    )
                    ))}

            </Box>
        </Box>
    );
};

export default Managers;