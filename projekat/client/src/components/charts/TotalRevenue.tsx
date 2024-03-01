import { ArrowCircleUpRounded } from '@mui/icons-material'

import ReactApexChart from 'react-apexcharts'

import { Typography, Box, Stack} from '@pankod/refine-mui'

import { TotalRevenueOptions, TotalRevenueSeries } from './chart.config'

//za grafikon
const totalRevenue = () => {
  return (
    <Box
      p={4}
      flex={1}
      bgcolor="#fcfcfc"
      id="chart"
      display="flex"
      flexDirection="column"
      borderRadius="15px"
      sx={{backgroundImage:'url("https://st.depositphotos.com/1000350/2282/i/450/depositphotos_22823894-stock-photo-dark-concrete-texture.jpg")'}}
    >
      <Typography fontSize={18} fontWeight={600} color="white">
        Yearly profit
      </Typography>

      <Stack my="20px" direction="row" gap={4} flexWrap="wrap">
        <Typography fontSize={28} fontWeight={700} color='white'>$600,890</Typography>
        <Stack direction="row" alignItems="center" gap={1} >
          <ArrowCircleUpRounded sx={{
            fontSize: 25, color: "white"
          }}/>
          <Stack>
            <Typography fontSize={15} color="white">
              0.28%
            </Typography>
            <Typography fontSize={12} color="white">
              In the last year
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <ReactApexChart
        series={TotalRevenueSeries}
        type="bar"
        height={350}
        options={TotalRevenueOptions}
      />
    </Box>
  )
}

export default totalRevenue