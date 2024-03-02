import { ApexOptions } from 'apexcharts';

export const TotalRevenueSeries = [
  {
    name: 'Number Of Cars',
    data: [95, 84, 72, 44, 108, 108, 47],
  },
  {
    name: 'Profit',
    data: [183, 124, 115, 85, 143, 143, 96],
  },
];

export const TotalRevenueOptions: ApexOptions = {
  chart: {
    height: 350,
    type: "line",
    stacked: false
  },
  dataLabels: {
    enabled: false
  },
  colors: ["#8B0000", "#fff"],
  stroke: {
    width: [4, 4]
  },
  plotOptions: {
    bar: {
      columnWidth: "20%"
    }
  },
  xaxis: {
    categories: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023]
  },
  yaxis: [
    {
      axisTicks: {
        show: true
      },
      axisBorder: {
        show: true,
        color: "#8B0000"
      },
      labels: {
        style: {
          colors: "#8B0000"
        }
      },
      title: {
        text: "Number Of Cars",
        style: {
          color: "#8B0000"
        }
      }
    },
    {
      opposite: true,
      axisTicks: {
        show: true
      },
      axisBorder: {
        show: true,
        color: "#fff"
      },
      labels: {
        style: {
          colors: "#fff"
        }
      },
      title: {
        text: "Profit",
        style: {
          color: "#fff"
        }
      }
    }
  ],
  tooltip: {
    shared: false,
    intersect: true,
    x: {
      show: false
    }
  },
  legend: {
    horizontalAlign: "left",
    offsetX: 40
  }
};
