import React, { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

const PlanetContext = createContext();

export function PlanetProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    async function fetchPlanets() {
      const response = await fetch(
        'https://swapi-trybe.herokuapp.com/api/planets/',
      );
      const data = await response.json();
      setPlanets(data.results);
    }
    fetchPlanets();
  }, []);

  return (
    <PlanetContext.Provider value={ { planets } }>
      {children}
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function usePlanet() {
  return useContext(PlanetContext);
}
