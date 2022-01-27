import React from 'react';
import ActiveNumericFilters from './components/ActiveNumericFilters';
import NameSearchBar from './components/NameSearchBar';
import NumericFilterForm from './components/NumericFilterForm';
import PlanetTable from './components/PlanetTable';
import SortingForm from './components/SortingForm';
import { FilterProvider } from './context/FilterContext';
import { PlanetProvider } from './context/PlanetContext';

export default function App() {
  return (
    <FilterProvider>
      <NameSearchBar />
      <NumericFilterForm />
      <SortingForm />
      <ActiveNumericFilters />
      <PlanetProvider>
        <PlanetTable />
      </PlanetProvider>
    </FilterProvider>
  );
}
