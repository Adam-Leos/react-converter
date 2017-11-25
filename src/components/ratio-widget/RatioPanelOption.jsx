import React from 'react';
import PropTypes from 'prop-types';

function RatioPanelOption(props) {
  return (
    <label className="ratio-widget__label">
      <input
        type="checkbox"
        onChange={props.onChange}
        className="ratio-widget__checkbox j-ratio-checkbox"
        name={props.upperCaseCurrency}
        value={props.upperCaseCurrency} 
        defaultChecked
      />
      {props.upperCaseCurrency}
    </label>
  );
}

RatioPanelOption.propTypes = {
  onChange: PropTypes.func.isRequired,
  upperCaseCurrency: PropTypes.string.isRequired,
};

export default RatioPanelOption;
