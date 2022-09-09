/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
// import calculate from '../logic/calculate';
// import operate from '../logic/operate';
import '../App.css';

// Create an array for the data
const calculator = ['0', 'AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.result);
    this.handleCalculation = this.handleCalculation.bind('this');
  }

  handleCalculation(e) {
    const { result } = this.props;
    const { handleCalculation } = this.props;
    handleCalculation(e.target.value);
    console.log((e.target.value), result);
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          {
            calculator.map((item, index) => {
              const { result } = this.props;
              if (index === 0) {
                return (
                  <input type="button" key={index} readOnly className={`item${index} + items`} value={result} />
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

Calculator.propTypes = {
  result: PropTypes.string.isRequired,
  handleCalculation: PropTypes.func.isRequired,
};
export default Calculator;
