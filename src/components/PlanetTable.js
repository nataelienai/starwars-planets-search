import React from 'react';
import PlanetRow from './PlanetRow';
import { usePlanet } from '../context/PlanetContext';
import { useFilter } from '../context/FilterContext';

export default function Table() {
  const { planets } = usePlanet();
  const { nameToFilterBy } = useFilter();

  const filteredPlanets = planets.filter((planet) => (
    planet.name.includes(nameToFilterBy)
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {filteredPlanets.map((planet) => (
          <PlanetRow key={ planet.name } planet={ planet } />
        ))}
      </tbody>
    </table>
  );
}
