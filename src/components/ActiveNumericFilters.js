import React from 'react';
import { useFilter } from '../context/FilterContext';

export default function ActiveNumericFilters() {
  const { numericFilters } = useFilter();
  return (
    <ul>
      {
        numericFilters.map(({ columnLabel, comparisonType, value }) => (
          <li key={ columnLabel }>
            {`${columnLabel} ${comparisonType} ${value}`}
          </li>
        ))
      }
    </ul>
  );
}
