import { useState } from 'react';
import './App.css';
import './assets/styles/custom.scss';
import Filter, { FilterStoreData } from './components/Filter';
import Navbar from './components/Navbar';
import Summary from './components/Summary';

function App() {
  const [filterStoreData, setStoreFilterData] = useState<FilterStoreData>();

  const onFilterChange = (filterData: FilterStoreData) => {
    setStoreFilterData(filterData);
  };

  return (
    <div className="app-container">
      <Navbar />
      <div className="filter-summary-container">
        <Filter onFilterChange={onFilterChange} />
        <Summary filterStoreData={filterStoreData} />
      </div>
    </div>
  );
}

export default App;
