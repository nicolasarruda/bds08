import './styles.css';
import { Controller, useForm } from 'react-hook-form';
import { ReactComponent as ArrowIcon } from './../../assets/images/arrow.svg';
import Select from 'react-select';
import { useState } from 'react';
import { City } from '../../types/city';

type CityFilterData = {
  name: string;
  city: City | null;
};

const initialData = [
  {
    id: 1,
    name: 'Itajaí'
  },
  {
    id: 2,
    name: 'Salvador'
  },
  {
    id: 3,
    name: 'Recife'
  }
] as City[];

export const Filter = () => {
  const [selectCities, setSelectCities] = useState<City[]>([]);

  const { control } = useForm<CityFilterData>();

  const handleChangeCity = (value: City) => {
    console.log('Cidade: ', value);
  };

  return (
    <div className="filter-container bg-primary">
      <div className="input-container bg-primary">
        <Controller
          name="city"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={initialData}
              isClearable
              placeholder="Selecione a cidade"
              classNamePrefix="city-filter-select"
              onChange={(value) => handleChangeCity(value as City)}
              getOptionLabel={(initialData) => initialData.name}
              getOptionValue={(initialData) => String(initialData.id)}
            />
          )}
        />
      </div>
    </div>
  );
};

export default Filter;

/*

        */
