import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const FilterContext = createContext();

export function useFilter() {
  return useContext(FilterContext);
}

export function FilterProvider({ children }) {
  const [nameToFilterBy, setNameToFilterBy] = useState('');
  const [activeNumericFilters, setActiveNumericFilters] = useState([]);

  function addNumericFilter(numericFilter) {
    setActiveNumericFilters([...activeNumericFilters, numericFilter]);
  }

  return (
    <FilterContext.Provider
      value={ {
        nameToFilterBy,
        setNameToFilterBy,
        activeNumericFilters,
        addNumericFilter,
      } }
    >
      {children}
    </FilterContext.Provider>
  );
}

FilterProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
