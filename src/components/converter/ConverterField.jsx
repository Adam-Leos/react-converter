import React from 'react';
import PropTypes from 'prop-types';

class ConverterFeild extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      entered: 0,
      calculated: 0,
    };
  }

  onCurrencyInput = (event) => {
    const eventTarget = event.target;
    const inputName = eventTarget.getAttribute('name');
    const inputValue = eventTarget.value;

    this.setState({
      [inputName]: [inputValue],
    });
  };

  render() {
    const allAvailableCurenciesCollection = ['USD', 'RUB', 'EUR', 'GBP', 'JPY'];

    return (
      <div className="converter__box">
        <label className="converter__label">
          <span className="converter__span">{this.props.type === 'entered' ? 'Exchange' : 'Into'}</span>
          <input
            className={`converter__input j-currency-${this.props.type}`}
            onChange={this.onCurrencyInput}
            type="number"
            name={this.props.type}
            value={this.state[this.props.type]}
          />
        </label>
        <select
          className={`converter__select j-currency-${this.props.type === 'entered' ? 'from' : 'to'}`}
          name="currency"
          onChange={this.onCurrencyInput}
        >
          {allAvailableCurenciesCollection.map(currency => (
            <option value={currency} key={currency}>{currency}</option>
          ))}
        </select>
      </div>
    );
  }
}

ConverterFeild.propTypes = {
  type: PropTypes.string.isRequired,
};

export default ConverterFeild;
