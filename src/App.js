import React from 'react';
import { PlanetProvider } from './context/PlanetContext';
import Table from './components/Table';

export default function App() {
  return (
    <PlanetProvider>
      <Table />
    </PlanetProvider>
  );
}
