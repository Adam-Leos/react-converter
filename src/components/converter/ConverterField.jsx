import React from 'react';

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
    const currenciesCollection = ['USD', 'RUB', 'EUR', 'GBR', 'JPY'];

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
          {currenciesCollection.map(currency => (
            <option value={currency} key={currency}>{currency}</option>
          ))}
        </select>
      </div>
    );
  }
}

export default ConverterFeild;
