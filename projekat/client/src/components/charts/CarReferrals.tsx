import { Typography, Box, Stack} from '@pankod/refine-mui';

import { carReferralsInfo } from 'constants/index';

interface ProgressBarProps{
  title: string,
  percentage: number,
  color: string,
}

//za status barove

const ProgressBar = ({title, percentage, color} : ProgressBarProps) => (
    <Box width="100%">
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography fontSize={16} fontWeight={500} color="white">{title}</Typography>
        <Typography fontSize={16} fontWeight={500} color="white">{percentage}%</Typography>
      </Stack>
      <Box mt={2} position="relative" width="100%" height="8px" borderRadius={1} bgcolor="#fff">
          <Box
            width={`${percentage}%`}
            bgcolor={color}
            position="absolute"
            height="100%"
            borderRadius={1}
          />
      </Box>
    </Box>
)


const CarReferrals = () => {
  return (
    <Box
      p={4}
      bgcolor="#fcfcfc"
      id="chart"
      minWidth={490}
      display="flex"
      flexDirection="column"
      borderRadius="15px"
      sx={{backgroundImage:'url("https://st.depositphotos.com/1000350/2282/i/450/depositphotos_22823894-stock-photo-dark-concrete-texture.jpg")'}}
    >
      <Typography fontSize={18} fontWeight={600} color="white">
        Marketing Analasys
      </Typography>

      <Stack my="20px" direction="column" gap={4}>
            {carReferralsInfo.map((bar) =>
            <ProgressBar key={bar.title} {...bar}/>)}
      </Stack>
    </Box>
  )
}

export default CarReferrals