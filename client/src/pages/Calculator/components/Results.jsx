import React, { useContext } from 'react';
import store from '../../../store';
import ResultItem from './ResultItem';

function Results() {
  const { CalculatorContext } = store;
  const { results } = useContext(CalculatorContext);
  return (
    <div>
      {
        !Object.keys(results).length || (
          <>
            <ResultItem label="Carboidratos" value={`${results.carbs?.toFixed(2)}g`} />
            <ResultItem
              label="Proteína"
              value={`${results.minProtein?.toFixed(2)} - ${results.maxProtein?.toFixed(2)}g`}
            />
          </>
        )
      }
    </div>
  );
}

export default Results;
