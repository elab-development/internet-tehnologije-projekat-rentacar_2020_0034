import { Place } from "@mui/icons-material";
import { Link } from "@pankod/refine-react-router-v6";
import { Typography, Box, Card, CardMedia, CardContent, Stack } from "@pankod/refine-mui";

import { CarCardProps } from "interfaces/car";


//prima parametra iz interfejsa i prikazuje na kartici automobila
const CarCard = ({id, title, location, price, photo}: CarCardProps) => {
  return (
    <Card
      component={Link} 
      to={`/cars/show/${id}`}
      sx={{
        maxWidth: '330px', 
        padding: '10px',
        '&:hover':{
          boxShadow: '0 22px 45px 2px rgba(176, 176, 176, 0.1)'
        },
        cursor:'pointer',
        textDecoration: 'none',
        backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWYi159cmBE7C74cPAK2afrz5MkcZnvUm6XNu_rZnjVr0rX8rF6HoGmTrvknMiAqoy7gs&usqp=CAU")',
        border: '2px solid #ffffff'
      }}
      elevation={0}
    >

      <CardMedia
      component="img"
      width = "100%"
      height={210}
      image = {photo}
      alt ="card image"
      sx ={{borderRadius: '10px'}}
      />

      <CardContent sx={{ display:'flex', flexDirection:'row', justifyContent:'space-between', gap: '10px', paddingX:'5px'}} >
        <Stack direction="column" gap={1}>
          <Typography fontSize={16} fontWeight={500} color="#fff" fontFamily="Orbitron">{title}</Typography>
          <Stack direction="row" gap={0.5} alignItems="flex-start">
            <Place
              sx={{fontSize: 25, color: '#8B0000' ,marginTop: 0.5}}
            />
            <Typography fontSize={15} color='#fff' fontFamily="Orbitron" sx={{marginTop:"5px"}}>{location}</Typography>
          </Stack>
        </Stack>
        <Box px={1.5} py={0.5} borderRadius={1} bgcolor ="#8B0000" height = "fit-content" >
          <Typography fontSize={14} fontWeight={600} color="#fff" fontFamily="Orbitron" style={{ whiteSpace: 'nowrap' }}>{price} €</Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default CarCard