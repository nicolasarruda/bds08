import './App.css';
import './assets/styles/custom.scss';
import Filter from './components/Filter';
import Navbar from './components/Navbar';
import Summary from './components/Summary';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="filter-summary-container">
        <Filter />
        <Summary />
      </div>
    </div>
  );
}

export default App;
