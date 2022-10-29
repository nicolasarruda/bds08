import axios, { AxiosRequestConfig } from 'axios';
import { FilterStoreData } from '../components/Filter';

export const baseURL = process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080';

export const requestBackend = (config: AxiosRequestConfig) => {
  return axios({ ...config, baseURL });
};

export const buildFilterParams = (filterData?: FilterStoreData) => {
  return {
    id: filterData?.name
  };
};
