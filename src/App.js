/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Calculator from './components/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleCalculation = this.handleCalculation.bind('this');
    this.state = {
      total: '5',
      next: '',
      operation: '',
    };
  }

  handleCalculation(newTotal) {
    const { total, next, operation } = this.state;
    console.log(`Total is ${total}, next is ${next} & operation is ${operation}`);
    this.setState({ total: newTotal });
  }

  render() {
    const { total } = this.state;
    return (
      <div className="App">
        <Calculator
          result={total}
          handleCalculation={this.handleCalculation}
        />
      </div>
    );
  }
}

export default App;
