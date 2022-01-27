import React from 'react';
import { useFilter } from '../context/FilterContext';

export default function ActiveNumericFilters() {
  const { activeNumericFilters } = useFilter();
  return (
    <ul>
      {
        activeNumericFilters.map(({ columnLabel, comparisonType, value }) => (
          <li key={ columnLabel }>
            {`${columnLabel} ${comparisonType} ${value}`}
          </li>
        ))
      }
    </ul>
  );
}
