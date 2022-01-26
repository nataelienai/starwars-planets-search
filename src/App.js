import React from 'react';
import { PlanetProvider } from './context/PlanetContext';
import { FilterProvider } from './context/FilterContext';
import NameSearchBar from './components/NameSearchBar';
import NumericFilterForm from './components/NumericFilterForm';
import ActiveNumericFilters from './components/ActiveNumericFilters';
import PlanetTable from './components/PlanetTable';

export default function App() {
  return (
    <FilterProvider>
      <NameSearchBar />
      <NumericFilterForm />
      <ActiveNumericFilters />
      <PlanetProvider>
        <PlanetTable />
      </PlanetProvider>
    </FilterProvider>
  );
}
