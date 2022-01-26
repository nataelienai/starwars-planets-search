import React from 'react';
import { PlanetProvider } from './context/PlanetContext';
import { FilterProvider } from './context/FilterContext';
import NameFilterInput from './components/NameFilterInput';
import Table from './components/Table';

export default function App() {
  return (
    <FilterProvider>
      <NameFilterInput />
      <PlanetProvider>
        <Table />
      </PlanetProvider>
    </FilterProvider>
  );
}
