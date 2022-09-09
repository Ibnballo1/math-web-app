/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import calculate from '../logic/calculate';
import '../App.css';

// Create an array for the data
const calculator = ['0', 'AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: '',
      operation: '',
    };
    this.handleCalculation = this.handleCalculation.bind(this);
  }

  handleCalculation(e) {
    const btnName = e.target.value;
    this.setState((data) => calculate(data, btnName));
  }

  outPut() {
    const { total, next, operation } = this.state;
    const result = `${total || ''} ${operation || ''} ${next || ''}`;
    return result;
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          {
            calculator.map((item, index) => {
              if (index === 0) {
                return (
                  <input type="button" key={index} readOnly className={`item${index} + items`} value={this.outPut()} />
                );
              }
              return <input type="button" onClick={this.handleCalculation} className={`item${index} + items`} key={index} value={item} />;
            })
          }
        </div>
      </section>
    );
  }
}

export default Calculator;
