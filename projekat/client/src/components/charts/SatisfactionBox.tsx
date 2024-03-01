import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

import { Typography, Box, Stack} from '@pankod/refine-mui'
import { SatisfactionBoxProps } from 'interfaces/home'

import { keyframes } from '@emotion/react';

const SatisfactionBox = ({title, value} : SatisfactionBoxProps) => {

  return (
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
      gap={2}
      borderRadius="15px"
      minHeight="110px"
      width="fit-content"
      sx={{
        backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWYi159cmBE7C74cPAK2afrz5MkcZnvUm6XNu_rZnjVr0rX8rF6HoGmTrvknMiAqoy7gs&usqp=CAU")',
        boxShadow: `
          inset 0 0 5px #8b0000,
          inset 1px 0 5px #8b0000,
          inset -1px 0 5px #8b0000,
          inset 1px 0 10px #8b0000,
          inset -1px 0 10px #8b0000,
          0 0 5px #8b0000,
          -0.5px 0 2.5px #8b0000,
          0.5px 0 2.5px #8b0000`
      }}
    

    >
      <Stack direction="column">
        <Typography fontSize={24} color="white" fontFamily="Orbitron">{title}</Typography>
        <Typography fontSize={35} color="#fff" fontWeight={700} mt={1} fontFamily="Orbitron" className='writer-text' sx={{animationDelay:"1s"}}>{value}</Typography>
      </Stack>


    <Stack>
    <ThumbUpAltIcon
    sx={{ color: "white", width:"170px", height:"170px", margin:"20px"}}
    />
    </Stack>
      
    </Box>
  )
}

export default SatisfactionBox