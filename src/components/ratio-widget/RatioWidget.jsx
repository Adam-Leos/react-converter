import React from 'react';
import PropTypes from 'prop-types';
import './ratio-widget.scss';
import RatioPanelOption from './RatioPanelOption.jsx';
import RatioWidgetRow from './RatioWidgetRow.jsx';
import GetCurrencyRatio from '../../utils/GetCurrencyRatio';

// TODO use templates for html
class RatioWidget extends React.Component {
  onRatioCheckboxChange = (event) => {
    this.toggleRatioVisibility(event.target);
  }

  toggleRatioPanel = () => {
    this.props.toggleRatioPanel();
  }

  toggleRatioVisibility = (triggeredCheckbox) => {
    if (triggeredCheckbox.checked) {
      this.props.changeRatioTableCurrencies(undefined, triggeredCheckbox.value);
    } else {
      this.props.changeRatioTableCurrencies(triggeredCheckbox.value);
    }
  }

  render() {
    const {
      isPanelOpen,
      ratioWidgetHeadCurrency,
      ratioTableCurrenciesCollection,
      ratioPanelCurrenciesCollection,
    } = this.props.ratioWidget;

    return (
      <div className="ratio-widget">
        <table className="ratio-widget__table">
          <thead>
            <tr className="ratio-widget__row">
              <th colSpan="2" className="ratio-widget__data ratio-widget__data--head">
                Current ratio of &nbsp;
                <span className="j-ratio-widget-currency">{ratioWidgetHeadCurrency}</span>
                <span role="button" tabIndex={0} className={`ratio-widget__arrow j-toggle-ratio-panel ${isPanelOpen ? 'active' : ''}`} onClick={this.toggleRatioPanel} />
              </th>
            </tr>
          </thead>
          <tbody className="ratio-widget__body j-ratio-widget-body">
            {ratioTableCurrenciesCollection.map((currency, index) => {
              const currencyRatio = GetCurrencyRatio(ratioWidgetHeadCurrency);
              const upperCaseCurrency = currency.toUpperCase();

              return (
                <RatioWidgetRow
                  upperCaseCurrency={upperCaseCurrency}
                  currencyRatio={currencyRatio}
                  key={upperCaseCurrency}
                />
              );
            })}
          </tbody>
          <tfoot className={`ratio-widget__foot ${ratioTableCurrenciesCollection.length > 0 ? 'hidden' : ''}`}>
            <tr className="ratio-widget__row">
              <td colSpan="2" className="ratio-widget__data">
                There is nothing to show. Please, select some more currency to show.
              </td>
            </tr>
          </tfoot>
        </table>
        <div className={`ratio-widget__panel j-ratio-panel ${isPanelOpen ? 'active' : ''}`}>
          {ratioPanelCurrenciesCollection.map((currency, index) => {
            const upperCaseCurrency = currency.toUpperCase();

            return (
              <RatioPanelOption
                upperCaseCurrency={upperCaseCurrency}
                onChange={this.onRatioCheckboxChange}
                key={upperCaseCurrency}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

RatioWidget.propTypes = {
  ratioWidget: PropTypes.shape({
    isPanelOpen: PropTypes.bool.isRequired,
    ratioWidgetHeadCurrency: PropTypes.string.isRequired,
    ratioTableCurrenciesCollection: PropTypes.arrayOf(PropTypes.string).isRequired,
    ratioPanelCurrenciesCollection: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  toggleRatioPanel: PropTypes.func.isRequired,
  changeRatioTableCurrencies: PropTypes.func.isRequired,
};

export default RatioWidget;
