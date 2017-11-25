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
      <Converter
        isConverterWithWidget
        changeRatioTableCurrencies={props.changeRatioTableCurrencies}
        changeRatioPanelCurrencies={props.changeRatioPanelCurrencies}
        changeWidgetHeadCurrency={props.changeWidgetHeadCurrency}
      />
    </main>
    <footer className="footer">
      <div className="footer__ratio-widget">
        <RatioWidget
          ratioWidget={props.ratioWidget}
          toggleRatioPanel={props.toggleRatioPanel}
          changeRatioTableCurrencies={props.changeRatioTableCurrencies}
        />
      </div>
    </footer>
  </div>
);

Main.propTypes = {
  ratioWidget: PropTypes.shape({
    isPanelOpen: PropTypes.bool.isRequired,
    ratioWidgetHeadCurrency: PropTypes.string.isRequired,
    ratioTableCurrenciesCollection: PropTypes.arrayOf(PropTypes.string).isRequired,
    ratioPanelCurrenciesCollection: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  toggleRatioPanel: PropTypes.func.isRequired,
  changeRatioTableCurrencies: PropTypes.func.isRequired,
  changeWidgetHeadCurrency: PropTypes.func.isRequired,
  changeRatioPanelCurrencies: PropTypes.func.isRequired,
};

export default Main;
