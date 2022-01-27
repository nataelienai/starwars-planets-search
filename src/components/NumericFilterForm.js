import React, { useEffect, useState } from 'react';
import { useFilter } from '../context/FilterContext';

const NUMERIC_COLUMN_LABELS = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const COMPARISON_TYPES = [
  'maior que',
  'menor que',
  'igual a',
];

export default function NumericFilterForm() {
  const [numericFilter, setNumericFilter] = useState({
    columnLabel: NUMERIC_COLUMN_LABELS[0],
    comparisonType: COMPARISON_TYPES[0],
    value: '0',
  });

  const [unfilteredColumnLabels, setUnfilteredColumnLabels] = useState([]);
  const { activeNumericFilters, addNumericFilter } = useFilter();

  useEffect(() => {
    const filteredColumnLabels = activeNumericFilters.map(({ columnLabel }) => (
      columnLabel
    ));
    setUnfilteredColumnLabels(
      NUMERIC_COLUMN_LABELS.filter((numericColumnLabel) => (
        !filteredColumnLabels.includes(numericColumnLabel)
      )),
    );
  }, [activeNumericFilters]);

  useEffect(() => {
    setNumericFilter((prevState) => ({
      ...prevState,
      columnLabel: unfilteredColumnLabels.length > 0 ? unfilteredColumnLabels[0] : '',
    }));
  }, [unfilteredColumnLabels]);

  function handleInputChange({ target: { name, value } }) {
    setNumericFilter((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (numericFilter.columnLabel !== '') {
      addNumericFilter(numericFilter);
    }
  }

  return (
    <form onSubmit={ handleSubmit }>
      <select
        name="columnLabel"
        value={ numericFilter.columnLabel }
        onChange={ handleInputChange }
        data-testid="column-filter"
      >
        {unfilteredColumnLabels.map((label) => (
          <option key={ label } value={ label }>
            {label}
          </option>
        ))}
      </select>

      <select
        name="comparisonType"
        value={ numericFilter.comparisonType }
        onChange={ handleInputChange }
        data-testid="comparison-filter"
      >
        {COMPARISON_TYPES.map((comparisonType) => (
          <option key={ comparisonType } value={ comparisonType }>
            {comparisonType}
          </option>
        ))}
      </select>

      <input
        type="number"
        name="value"
        value={ numericFilter.value }
        onChange={ handleInputChange }
        data-testid="value-filter"
      />

      <button type="submit" data-testid="button-filter">Filtrar</button>
    </form>
  );
}
