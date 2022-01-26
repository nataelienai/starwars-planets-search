import React, { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../services/fetchPlanets';

const PlanetContext = createContext();

export function usePlanet() {
  return useContext(PlanetContext);
}

export function PlanetProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetchPlanets().then(setPlanets);
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
