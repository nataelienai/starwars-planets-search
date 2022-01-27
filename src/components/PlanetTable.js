import React from 'react';
import { useFilter } from '../context/FilterContext';
import { usePlanet } from '../context/PlanetContext';
import PlanetRow from './PlanetRow';

const SORT_FIRST_BEFORE_SECOND = -1;
const SORT_SECOND_BEFORE_FIRST = 1;

function isPlanetFilterable(numericFilters, planet) {
  return numericFilters.every(({ columnLabel, comparisonType, value }) => {
    switch (comparisonType) {
    case 'maior que':
      return Number(planet[columnLabel]) > Number(value);
    case 'menor que':
      return Number(planet[columnLabel]) < Number(value);
    case 'igual a':
      return Number(planet[columnLabel]) === Number(value);
    default:
      return false;
    }
  });
}

export default function PlanetTable() {
  const { planets } = usePlanet();
  const { nameToFilterBy, activeNumericFilters, activeSorting } = useFilter();

  const filteredPlanets = planets.filter((planet) => (
    planet.name.includes(nameToFilterBy)
    && isPlanetFilterable(activeNumericFilters, planet)
  ));

  switch (activeSorting.order) {
  case 'ASC':
    filteredPlanets.sort((firstPlanet, secondPlanet) => (
      firstPlanet[activeSorting.columnLabel] - secondPlanet[activeSorting.columnLabel]
    ));
    break;

  case 'DESC':
    filteredPlanets.sort((firstPlanet, secondPlanet) => (
      secondPlanet[activeSorting.columnLabel] - firstPlanet[activeSorting.columnLabel]
    ));
    break;

  default:
    filteredPlanets.sort((firstPlanet, secondPlanet) => (
      firstPlanet.name < secondPlanet.name
        ? SORT_FIRST_BEFORE_SECOND
        : SORT_SECOND_BEFORE_FIRST
    ));
    break;
  }

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
