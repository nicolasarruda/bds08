import { ApexOptions } from 'apexcharts';

export const buildChartDonut = (labels: string[] = []) => {
  return {
    colors: ['#FF7A00', '#7234F5', '#FF0000'],
    labels: labels,
    dataLabels: {
      distributed: true,
      textAnchor: 'start',
      style: {
        colors: ['#FFF'],
        fontSize: '10'
      },
      enabled: true
    },
    stroke: {
      curve: 'stepline'
    },
    noData: {
      text: 'Sem resultados',
      align: 'center',
      verticalAlign: 'middle',
      style: {
        fontSize: '18px',
        fontFamily: 'Ubuntu, sans-serif'
      }
    },
    legend: {
      offsetY: 12,
      height: 90,
      show: true,
      floating: false,
      position: 'bottom',
      containerMargin: {
        top: 20
      },
      itemMargin: {
        vertical: 5,
        horizontal: 0
      },
      markers: {
        height: 10,
        width: 10,
        offsetX: -10,
        offsetY: 0
      },
      fontSize: '14',
      fontWeight: '400',
      fontFamily: 'Ubuntu',
      labels: {
        colors: ['#8d8d8d']
      }
    },
    plotOptions: {
      pie: {
        size: 600,
        offsetY: 50,
        donut: {
          size: '58%'
        }
      }
    },
    grid: {
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    },
    tooltip: {
      items: {
        display: 'flex'
      }
    }
  } as ApexOptions;
};
