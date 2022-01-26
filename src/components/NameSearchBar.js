import React from 'react';
import { useFilter } from '../context/FilterContext';

export default function NameSearchBar() {
  const { nameToFilterBy, setNameToFilterBy } = useFilter();

  function handleInputChange({ target: { value } }) {
    setNameToFilterBy(value);
  }

  return (
    <input
      type="text"
      value={ nameToFilterBy }
      onChange={ handleInputChange }
      data-testid="name-filter"
    />
  );
}
