import './styles.css';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import React, { useEffect, useState } from 'react';
import { Store } from '../../types/store';
import { requestBackend } from '../../utils/requests';
import { AxiosRequestConfig } from 'axios';

export type FilterStoreData = {
  name: string;
  city: Store | null;
};

type Props = {
  onFilterChange: (data: FilterStoreData) => void;
};

export const Filter = ({ onFilterChange }: Props) => {
  const [selectStore, setSelectStore] = useState<Store[]>([]);

  const { control, handleSubmit, setValue, getValues } = useForm<FilterStoreData>();

  const onSubmit = (formData: FilterStoreData) => {
    onFilterChange(formData);
  };

  useEffect(() => {
    const config: AxiosRequestConfig = {
      url: '/stores',
      method: 'GET'
    };

    requestBackend(config)
      .then((response) => {
        setSelectStore(response.data);
      })
      .catch(() => {
        console.error('Error to fetch sales by store');
      });
  }, []);

  const handleChangeCity = (value: Store) => {
    setValue('city', value);

    const obj: FilterStoreData = {
      name: getValues('city.name'),
      city: getValues('city')
    };

    onFilterChange(obj);
  };

  return (
    <div className="filter-container bg-primary">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-container bg-primary">
          <Controller
            name="city"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={selectStore}
                isClearable
                placeholder="Selecione a cidade"
                classNamePrefix="city-filter-select"
                onChange={(value) => handleChangeCity(value as Store)}
                getOptionLabel={(city: Store) => city.name}
                getOptionValue={(city: Store) => String(city.id)}
              />
            )}
          />
        </div>
      </form>
    </div>
  );
};

export default Filter;

/*

        */
