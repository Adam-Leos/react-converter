import React from 'react';
import PropTypes from 'prop-types';
import {
  Link,
} from 'react-router-dom';
import Converter from './../../components/converter/Converter.jsx';
import RatioWidget from './../../components/ratio-widget/RatioWidget.jsx';

const Main = props => (
  <div>
    <header className="header">
      <Link className="header__link" to="/contacts">to contacts</Link>
    </header>
    <main className="main">
      <Converter isConverterWithWidget />
    </main>
    <footer className="footer">
      <div className="footer__ratio-widget">
        <RatioWidget
          ratioWidget={props.ratioWidget}
          toggleRatioPanel={props.toggleRatioPanel}
          changeCurrencyCollection={props.changeCurrencyCollection}
        />
      </div>
    </footer>
  </div>
);

Main.propTypes = {
  ratioWidget: PropTypes.shape({
    isPanelOpen: PropTypes.bool.isRequired,
    widgetCurrency: PropTypes.string.isRequired,
    currenciesCollection: PropTypes.arrayOf(PropTypes.string).isRequired,
    ratioPanelCurrencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  toggleRatioPanel: PropTypes.func.isRequired,
  changeCurrencyCollection: PropTypes.func.isRequired,
};

export default Main;
