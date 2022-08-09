import React, { useContext } from 'react';
import store from '../../../store';
import ResultItem from './ResultItem';

function Results() {
  const { CalculatorContext } = store;
  const {
    results, results: {
      carbs, minProtein, maxProtein, minFat, maxFat, tmb,
    },
  } = useContext(CalculatorContext);
  return (
    <div>
      {
        !Object.keys(results).length || (
          <>
            <ResultItem label="Carboidratos" value={`${carbs?.toFixed(2)}g`} />
            <ResultItem
              label="Proteína"
              value={`${minProtein?.toFixed(2)} - ${maxProtein?.toFixed(2)}g`}
            />
            <ResultItem
              label="Gordura"
              value={`${minFat?.toFixed(2)} - ${maxFat?.toFixed(2)}g`}
            />
            <ResultItem
              label="Metabolismo basal"
              value={`${tmb?.toFixed(2)}kcal`}
            />
          </>
        )
      }
    </div>
  );
}

export default Results;
