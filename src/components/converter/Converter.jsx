import React from 'react';
import PropTypes from 'prop-types';
import './converter.scss';
import ConverterFeild from './ConverterField.jsx';
import GetCurrencyRatio from '../../utils/GetCurrencyRatio';

class Converter extends React.Component {
  onConvertCurrencyClick = () => {
    this.exchangeCurrency();

    if (this.props.isConverterWithWidget) {
      this.changeRatioWidgetCurrency();
    }
  }

  changeRatioWidgetCurrency = () => {
    const currencyFrom = document.querySelector('.j-currency-from').value.toUpperCase();
    const ratioWidgetCurrencyValue = document.querySelector('.j-ratio-widget-currency').innerHTML.toUpperCase();

    if (currencyFrom === ratioWidgetCurrencyValue) {
      return false;
    }

    this.props.changeRatioTableCurrencies(currencyFrom, ratioWidgetCurrencyValue);
    this.props.changeRatioPanelCurrencies(currencyFrom, ratioWidgetCurrencyValue);
    this.props.changeWidgetHeadCurrency(currencyFrom);
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
        <button
          type="button"
          className="converter__button"
          onClick={this.onConvertCurrencyClick}
        >
          Convert
        </button>
      </div>
    );
  }
}

Converter.propTypes = {
  isConverterWithWidget: PropTypes.bool.isRequired,
  changeRatioTableCurrencies: PropTypes.func.isRequired,
  changeWidgetHeadCurrency: PropTypes.func.isRequired,
  changeRatioPanelCurrencies: PropTypes.func.isRequired,
};

export default Converter;
