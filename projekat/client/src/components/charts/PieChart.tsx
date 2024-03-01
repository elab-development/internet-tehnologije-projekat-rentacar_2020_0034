import ReactApexChart from 'react-apexcharts'

import { Typography, Box, Stack} from '@pankod/refine-mui'
import { PieChartProps } from 'interfaces/home'

const PieChart = ({title, value, series, colors} : PieChartProps) => {
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
          0.5px 0 2.5px #8b0000`,
      }}

    >
      <Stack direction="column">
        <Typography fontSize={20} color="white" fontFamily="Orbitron">{title}</Typography>
        <Typography fontSize={35} color="#fff" fontWeight={700} mt={1} fontFamily="Orbitron" className='writer-text' sx={{animationDelay:"0.5s"}}>{value}</Typography>
      </Stack>

      <ReactApexChart
        options={{
          chart: {type: 'donut'},
          colors,
          legend: { show: true},
          dataLabels: { enabled: true },
          labels: ['Coupes', 'Sedans', 'Sport Cars', 'Electric Vehicles', 'Limousines', 'Minivans']
        }}
        series={series}
        type="donut"
        width="500px"
      />
    </Box>
  )
}

export default PieChart