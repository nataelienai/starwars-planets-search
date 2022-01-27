import React, { useState } from 'react';
import { useFilter } from '../context/FilterContext';

const NUMERIC_COLUMN_LABELS = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

export default function SortingForm() {
  const { setActiveSorting } = useFilter();
  const [sorting, setSorting] = useState({
    columnLabel: NUMERIC_COLUMN_LABELS[0],
    order: 'ASC',
  });

  function handleInputChange({ target: { name, value } }) {
    setSorting((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setActiveSorting(sorting);
  }

  return (
    <form onSubmit={ handleSubmit }>
      <select
        name="columnLabel"
        value={ sorting.columnLabel }
        onChange={ handleInputChange }
        data-testid="column-sort"
      >
        {NUMERIC_COLUMN_LABELS.map((label) => (
          <option key={ label } value={ label }>
            {label}
          </option>
        ))}
      </select>
      <label htmlFor="asc-sort-input">
        <input
          type="radio"
          id="asc-sort-input"
          name="order"
          value="ASC"
          checked={ sorting.order === 'ASC' }
          onChange={ handleInputChange }
          data-testid="column-sort-input-asc"
        />
        Ascendente
      </label>
      <label htmlFor="desc-sort-input">
        <input
          type="radio"
          id="desc-sort-input"
          name="order"
          value="DESC"
          checked={ sorting.order === 'DESC' }
          onChange={ handleInputChange }
          data-testid="column-sort-input-desc"
        />
        Descendente
      </label>
      <button type="submit" data-testid="column-sort-button">Ordenar</button>
    </form>
  );
}
