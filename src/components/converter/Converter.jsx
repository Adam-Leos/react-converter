import React from 'react';
import './converter.scss';
import ConverterFeild from './ConverterField.jsx';
import GetCurrencyRatio from '../../utils/GetCurrencyRatio';

class Converter extends React.Component {
  constructor(props) {
    super(props);
  }

  onConvertCurrencyClick = () => {
    this.exchangeCurrency();
    if (this.props.isConverterWithWidget) {
      this.changeRatioWidgetCurrency();
    }
  }

  changeRatioWidgetCurrency = () => {
    const currencyFrom = document.querySelector('.j-currency-from').value.toUpperCase();
    const ratioWidgetCurrency = document.querySelector('.j-ratio-widget-currency');
    const ratioWidgetCurrencyValue = ratioWidgetCurrency.innerHTML.toUpperCase();

    if (currencyFrom === ratioWidgetCurrencyValue) {
      return false;
    }

    const ratioWidgetRows = document.querySelectorAll('.j-ratio-currency-row');
    const currenciesToShow = [ratioWidgetCurrencyValue];

    ratioWidgetRows.forEach((row) => {
      if (row.dataset.currency !== currencyFrom) {
        const upperCaseCurrency = row.dataset.currency.toUpperCase();
        currenciesToShow.push(upperCaseCurrency);
      }
    });

    ratioWidgetCurrency.innerHTML = currencyFrom;
    // RatioWidget.fillRatioWidget(currencyFrom, currenciesToShow);
  }

  // TODO value validation
  exchangeCurrency = async () => {
    const calculatedInput = document.querySelector('.j-currency-calculated');
    const caluclatedCurrency = await this.calculateCurrency();
    const roundedValue = Math.round(caluclatedCurrency * 100) / 100;

    calculatedInput.value = roundedValue;
  }

  calculateCurrency = async () => {
    const currencyFrom = document.querySelector('.j-currency-from').value.toUpperCase();
    const currencyTo = document.querySelector('.j-currency-to').value.toUpperCase();

    if (currencyFrom === currencyTo) {
      const currentValue = document.querySelector('.j-currency-entered').value;

      return currentValue;
    }

    const enteredInput = document.querySelector('.j-currency-entered');
    const rates = await GetCurrencyRatio(currencyFrom);

    return enteredInput.value * rates[currencyTo];
  }

  render() {
    return (
      <div className="converter">
        <ConverterFeild type="entered" />
        <ConverterFeild type="calculated" />
        <button type="button" className="converter__button j-convert-currency" onClick={this.onConvertCurrencyClick}>Convert</button>
      </div>
    );
  }
}

export default Converter;
