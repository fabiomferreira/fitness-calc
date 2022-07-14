import React, { useMemo, useState } from 'react';
import Form from './components/FormCalculator';
import Store from '../../store';
import Results from './components/Results';

function Calculator() {
  const [results, setResults] = useState({});
  const { CalculatorContext } = Store;

  const values = useMemo(() => ({ results, setResults }), [results, setResults]);
  return (
    <div>
      <CalculatorContext.Provider value={values}>
        <Form />
        <Results />
      </CalculatorContext.Provider>
    </div>
  );
}

export default Calculator;
