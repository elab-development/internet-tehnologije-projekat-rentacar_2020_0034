import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';

import { useGetIdentity } from "@pankod/refine-core";
import { Box, Stack, Typography } from "@pankod/refine-mui";
import { Link } from "@pankod/refine-react-router-v6";

import { ManagerCardProp, InfoBarProps } from "interfaces/manager";

//checkImage prima url kao argument i proverava da li je slika sa ovog URL-a učitana i da li ima dimenzije različite od nule
function checkImage(url: any) {
    const img = new Image();
    img.src = url;
    return img.width !== 0 && img.height !== 0;
}

//Komponenta InfoBar prikazuje ikonu i tekst. Prima objekat InfoBarProps koji ima dva svojstva: icon i name. 
//icon prikazuje ikonu koja se prosleđuje, a name prikazuje tekst. 
const InfoBar = ({ icon, name }: InfoBarProps) => (
    <Stack
        flex={1}
        minWidth={{ xs: "100%", sm: 300 }}
        gap={1.5}
        direction="row"
    >
        {icon}
        <Typography fontSize={14} color="#fff" sx={{fontFamily:"Orbitron", fontSize:"16px", marginTop:"8px"}}>
            {name}
        </Typography>
    </Stack>
);

const ManagerCard = ({
    id,
    name,
    email,
    avatar,
    noOfCars,
}: ManagerCardProp) => {
    const { data: currentUser } = useGetIdentity();

    const generateLink = () => {
        //ako je to taj user ide odmah na njegov profil
        if (currentUser.email === email) return "/my-profile";

        //u suprotnom prikazuje izabranog menadzera
        return `/managers/show/${id}`;
    };

    return (
        <Box
            component={Link}
            //navigacija koja je prethodno definisana
            to={generateLink()}
            width="100%"
            sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: "20px",
                padding: "20px",
                "&:hover": {
                    boxShadow: "0 22px 45px 2px rgba(176,176,176,0.1)",
                },
            }}
        >
            <img
                src={
                    checkImage(avatar)
                        ? avatar
                        : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
                }
                alt="user"
                width={90}
                height={90}
                style={{ borderRadius: 8, objectFit: "cover", border: "3.5px solid darkred",}}
            />
            <Stack
                direction="column"
                justifyContent="space-between"
                flex={1}
                gap={{ xs: 4, sm: 2 }}
            >
                <Stack
                    gap={2}
                    direction="row"
                    flexWrap="wrap"
                    alignItems="center"
                >
                    <Typography fontSize={22} fontWeight={600} color="#fff" fontFamily="Orbitron">
                        {name}
                    </Typography>
                    <Typography fontSize={16} color="#8B0000" fontFamily="Orbitron" sx={{fontWeight:"bolder", marginTop:"10px"}}>
                        Car Rental Agent
                    </Typography>
                </Stack>
                <Stack
                    direction="row"
                    flexWrap="wrap"
                    justifyContent="space-between"
                    alignItems="center"
                    gap={2}
                >
                    <InfoBar
                        icon={<AttachEmailIcon sx={{ color: "#8B0000", height: "40px", width: "40px" }} />}
                        name={email}
                    />
                    <InfoBar
                        icon={<PhoneInTalkIcon sx={{ color: "#8B0000" , height: "40px", width: "40px"}} />}
                        name="+381 3234 141"
                    />
                    <InfoBar
                        icon={<TimeToLeaveIcon sx={{ color: "#8B0000" , height: "40px", width: "40px"}} />}
                        name={`${noOfCars} Cars`}
                    />
                </Stack>
            </Stack>
        </Box>
    );
};

export default ManagerCard;