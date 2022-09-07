/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import '../App.css';

// Create an array for the data
const calculator = ['0', 'AC', '+/-', '%', '÷', '7', '8', '9', 'X', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
const design = calculator.map((item, index) => (
  <p className={`item${index} + items`} key={index}>{item}</p>
));

class Calculator extends React.Component {
  render() {
    return (
      <section className="section">
        <div className="container" border={1}>{design}</div>
      </section>
    );
  }
}

export default Calculator;
