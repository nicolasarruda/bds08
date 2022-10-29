import './styles.css';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import { useEffect, useState } from 'react';
import { Store } from '../../types/store';
import { requestBackend } from '../../utils/requests';
import { AxiosRequestConfig } from 'axios';

type Props = {
  onFilterChange: (data: FilterStoreData) => void;
};

export type FilterStoreData = {
  name: string;
  city: Store | null;
};

export const Filter = ({ onFilterChange }: Props) => {
  const [selectStore, setSelectStore] = useState<Store[]>([]);

  const { control, handleSubmit } = useForm<FilterStoreData>();

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
        console.log(response.data);
        setSelectStore(response.data);
      })
      .catch(() => {
        console.error('Error to fetch sales by store');
      });
  }, []);

  const handleChangeCity = (value: Store) => {
    console.log('Cidade: ', value);
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
                getOptionLabel={(initialData) => initialData.name}
                getOptionValue={(initialData) => String(initialData.id)}
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
