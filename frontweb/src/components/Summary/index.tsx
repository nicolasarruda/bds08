import './styles.css';
import './helpers.ts';
import ReactApexChart from 'react-apexcharts';
import { buildChartDonut } from './helpers';

export const Summary = () => {
  return (
    <div className="summary-container bg-primary">
      <div className="summary-price-container">
        <h1>R$ 746.484,00</h1>
        <span>Total de vendas</span>
      </div>
      <div className="summary-graph-container">
        <ReactApexChart
          options={buildChartDonut()}
          type="donut"
          width="280"
          height="300"
          series={[1, 2, 3]}
        />
      </div>
    </div>
  );
};

export default Summary;
