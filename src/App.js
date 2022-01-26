import React from 'react';
import { PlanetProvider } from './context/PlanetContext';
import { FilterProvider } from './context/FilterContext';
import NameSearchBar from './components/NameSearchBar';
import PlanetTable from './components/PlanetTable';

export default function App() {
  return (
    <FilterProvider>
      <NameSearchBar />
      <PlanetProvider>
        <PlanetTable />
      </PlanetProvider>
    </FilterProvider>
  );
}
