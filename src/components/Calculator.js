/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';
import calculate from '../logic/calculate';

// Create an array for the data
const calculator = ['0', 'AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];

const Calculator = () => {
  const [state, setState] = useState({
    total: '0',
    next: '',
    operation: '',
  });

  const handleCalculation = (e) => {
    const btnName = e.target.value;
    setState((state) => calculate(state, btnName));
  };

  const outPut = () => {
    const { total, next, operation } = state;
    const result = `${total || ''} ${operation || ''} ${next || ''}`;
    return (result);
  };

  return (
    <section className="section">
      <h2>Let&apos;s do some math!</h2>
      <div className="container">
        {
          calculator.map((item, index) => {
            if (index === 0) {
              return (
                <input type="button" key={index} readOnly className={`item${index} + items`} value={outPut()} />
              );
            }
            return <input type="button" className={`item${index} + items`} key={index} value={item} onClick={handleCalculation} />;
          })
        }
      </div>
    </section>
  );
};

export default Calculator;
