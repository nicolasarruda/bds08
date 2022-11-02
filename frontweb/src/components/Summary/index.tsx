import './styles.css';
import './helpers.ts';
import ReactApexChart from 'react-apexcharts';
import { buildChartDonut } from './helpers';
import { FilterStoreData } from '../Filter';
import { useEffect, useMemo, useState } from 'react';
import { SaleByGender } from '../../types/sale-by-gender';
import { formatGender } from '../../utils/formatters';
import { buildFilterParams, requestBackend } from '../../utils/requests';
import { AxiosRequestConfig } from 'axios';
import { SaleSummary } from '../../types/sale-summary';
import { formatPrice } from '../../utils/formatters';

type Props = {
  filterStoreData?: FilterStoreData;
};

export const Summary = ({ filterStoreData }: Props) => {
  const [summary, setSummary] = useState<SaleSummary>();
  const [genderSummary, setGenderSummary] = useState<SaleByGender>();
  const params = useMemo(() => buildFilterParams(filterStoreData), [filterStoreData]);

  useEffect(() => {
    const config: AxiosRequestConfig = {
      url: '/sales/by-gender',
      method: 'GET',
      params
    };

    requestBackend(config).then((response) => {
      setGenderSummary(response.data);
    });
  }, [params]);

  useEffect(() => {
    const config: AxiosRequestConfig = {
      url: '/sales/summary',
      method: 'GET',
      params
    };

    requestBackend(config).then((response) => {
      setSummary(response.data);
    });
  }, [params]);

  return (
    <div className="summary-container bg-primary">
      <div className="summary-price-container">
        <h1>{summary === undefined ? 0 : formatPrice(summary.sum)}</h1>
        <span>Total de vendas</span>
      </div>
      <div className="summary-graph-container">
        <ReactApexChart
          options={buildChartDonut(
            genderSummary?.map((genderSummary) => formatGender(genderSummary.gender))
          )}
          type="donut"
          width="280"
          height="300"
          series={
            genderSummary === undefined
              ? []
              : genderSummary.map((genderSummary) => genderSummary.sum)
          }
        />
      </div>
    </div>
  );
};

export default Summary;
