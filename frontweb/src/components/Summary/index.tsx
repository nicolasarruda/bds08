import './styles.css';
import './helpers.ts';
import ReactApexChart from 'react-apexcharts';
import { buildChartDonut } from './helpers';
import { FilterStoreData } from '../Filter';
import { useEffect, useMemo, useState } from 'react';
import { formatGender, SaleByGender } from '../../types/sale-by-gender';
import { buildFilterParams, requestBackend } from '../../utils/requests';
import { AxiosRequestConfig } from 'axios';
import { SaleSummary } from '../../types/sale-summary';

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
      console.log(response.data);
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
      console.log(response.data);
    });
  }, [params]);

  return (
    <div className="summary-container bg-primary">
      <div className="summary-price-container">
        <h1>R$ {summary?.sum}</h1>
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
