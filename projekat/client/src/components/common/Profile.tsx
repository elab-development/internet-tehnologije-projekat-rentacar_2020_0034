import { Email, Phone } from "@mui/icons-material";
import { Box, Stack, Typography } from "@pankod/refine-mui";

import { ProfileProps, CarProps } from "interfaces/common";
import CarCard from "./CarCard";

//provera url slike
function checkImage(url: any) {
    const img = new Image();
    img.src = url;
    return img.width !== 0 && img.height !== 0;
}
//iygled profila
const Profile = ({ type, name, avatar, email, cars }: ProfileProps) => (
    <Box sx={{backgroundImage: 'url("https://st.depositphotos.com/1000350/2282/i/450/depositphotos_22823894-stock-photo-dark-concrete-texture.jpg")',
    padding:'10px', borderRadius:'25px'}}>
        <Typography fontSize={25} fontWeight={700} color="white" fontFamily="Orbitron">
            {type} Profile
        </Typography>

        <Box mt="20px" borderRadius="15px" padding="20px" sx={{backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWYi159cmBE7C74cPAK2afrz5MkcZnvUm6XNu_rZnjVr0rX8rF6HoGmTrvknMiAqoy7gs&usqp=CAU")'}}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: 2.5,
                }}
            >
                <img
                    src="https://i.pinimg.com/originals/45/ee/ed/45eeed429212d8a5d12d027408df27ce.gif"
                    alt="abstract"
                    className="my_profile-bg"
                />
                <Box
                    flex={1}
                    sx={{
                        marginTop: { md: "58px" },
                        marginLeft: { xs: "20px", md: "0px" },
                    }}
                >
                    <Box
                        flex={1}
                        display="flex"
                        flexDirection={{ xs: "column", md: "row" }}
                        gap="20px"
                    >
                        <img
                            src={
                                checkImage(avatar)
                                    ? avatar
                                    : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
                            }
                            width={78}
                            height={78}
                            alt="user_profile"
                            className="my_profile_user-img"
                            style={{
                                border: '3.5px solid darkred',
                                borderRadius: '50%'
                            }}
                        />

                        <Box
                            flex={1}
                            display="flex"
                            flexDirection="column"
                            justifyContent="space-between"
                            gap="30px"
                        >
                            <Stack direction="column">
                                <Typography
                                    fontSize={22}
                                    fontWeight={600}
                                    color="#fff"
                                    fontFamily="Orbitron"
                                >
                                    {name}
                                </Typography>
                                <Typography fontSize={16} color="#fff" fontFamily="Orbitron">
                                    Car Agent
                                </Typography>
                            </Stack>

                            <Stack direction="column" gap="30px">
                                
                                <Stack
                                    direction="row"
                                    flexWrap="wrap"
                                    gap="20px"
                                    pb={4}
                                >
                                    <Stack flex={1} gap="15px">
                                        <Typography
                                            fontSize={18}
                                            fontWeight={500}
                                            color="#fff"
                                            fontFamily="Orbitron"
                                        >
                                            Contact
                                        </Typography>
                                        <Box
                                            display="flex"
                                            flexDirection="row"
                                            alignItems="center"
                                            gap="10px"
                                        >
                                            <Phone sx={{ color: "#8B0000", fontSize: "30px"  }} />
                                            <Typography
                                                fontSize={16}
                                                color="#fff"
                                                noWrap
                                                fontFamily="Orbitron"
                                            >
                                                +381 444 789
                                            </Typography>
                                        </Box>
                                    </Stack>

                                    <Stack flex={1} gap="15px">
                                        <Typography
                                            fontSize={18}
                                            fontWeight={500}
                                            color="#fff"
                                            fontFamily="Orbitron"
                                        >
                                            Email address
                                        </Typography>
                                        <Box
                                            display="flex"
                                            flexDirection="row"
                                            alignItems="center"
                                            gap="10px"
                                        >
                                            <Email sx={{ color: "#8B0000", fontSize: "30px" }} />
                                            <Typography
                                                fontSize={16}
                                                color="#fff"
                                                fontFamily="Orbitron"
                                            >
                                                {email}
                                            </Typography>
                                        </Box>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>

        {cars.length > 0 && (
            <Box mt={2.5} borderRadius="15px" padding="20px" sx={{   backgroundImage:'url("url("https://st.depositphotos.com/1000350/2282/i/450/depositphotos_22823894-stock-photo-dark-concrete-texture.jpg")")'}}>
                <Typography fontSize={18} fontWeight={600} color="#fff">
                    {type} Cars
                </Typography>

                <Box
                    mt={2.5}
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 4,
                        justifyContent: "center"
                    }}
                >
                    {cars?.map((car: CarProps) => (
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
        )}
    </Box>
);

export default Profile;