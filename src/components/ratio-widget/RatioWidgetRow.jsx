import React from 'react';
import PropTypes from 'prop-types';

function RatioWidgetRow(props) {
  return (
    <tr className="ratio-widget__row j-ratio-currency-row" data-currency={props.upperCaseCurrency}>
      <td className="ratio-widget__data ratio-widget__data--currency">{props.upperCaseCurrency}</td>
      <td className="ratio-widget__data">{props.currencyRatio[props.upperCaseCurrency]}</td>
    </tr>
  );
}

RatioWidgetRow.propTypes = {
  currencyRatio: PropTypes.objectOf(PropTypes.number).isRequired,
  upperCaseCurrency: PropTypes.string.isRequired,
};

export default RatioWidgetRow;
