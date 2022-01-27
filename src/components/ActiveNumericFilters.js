import React from 'react';
import { useFilter } from '../context/FilterContext';

export default function ActiveNumericFilters() {
  const { activeNumericFilters, removeNumericFilter } = useFilter();
  return (
    <ul>
      {
        activeNumericFilters.map(({ columnLabel, comparisonType, value }) => (
          <li key={ columnLabel } data-testid="filter">
            <span>
              {`${columnLabel} ${comparisonType} ${value}`}
            </span>
            <button
              type="button"
              onClick={ () => removeNumericFilter(columnLabel) }
            >
              X
            </button>
          </li>
        ))
      }
    </ul>
  );
}
