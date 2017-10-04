import React from 'react';
import './ratio-widget.scss';
import RatioPanelOption from './RatioPanelOption.jsx';
import RatioWidgetRow from './RatioWidgetRow.jsx';
import GetCurrencyRatio from '../../utils/GetCurrencyRatio';

// TODO use templates for html
class RatioWidget extends React.Component {
  constructor() {
    super();

    this.state = {
      isPanelOpen: false,
      widgetCurrency: 'USD',
      currenciesCollection: ['EUR', 'RUB', 'GBP', 'JPY'],
      ratioPanelCurrencies: ['EUR', 'RUB', 'GBP', 'JPY'],
    };
  }

  onRatioCheckboxChange = (event) => {
    this.toggleRatioVisibility(event.target);
  }

  toggleRatioPanel = () => {
    this.setState({
      isPanelOpen: !this.state.isPanelOpen,
    });
  }

  // TODO just remove unneeded currency, not create new array
  toggleRatioVisibility = (triggeredCheckbox) => {
    const ratioCheckboxes = document.querySelectorAll('.j-ratio-checkbox:checked');
    const newCurrenciesArray = [];

    ratioCheckboxes.forEach(ratioCheckbox => newCurrenciesArray.push(ratioCheckbox.value));
    this.setState({
      currenciesCollection: newCurrenciesArray,
    });
  }

  render() {
    return (
      <div className="ratio-widget">
        <table className="ratio-widget__table">
          <thead>
            <tr className="ratio-widget__row">
              <th colSpan="2" className="ratio-widget__data ratio-widget__data--head">
                Current ratio of &nbsp;
                <span className="j-ratio-widget-currency">USD</span>
                <span role="button" tabIndex={0} className={`ratio-widget__arrow j-toggle-ratio-panel ${this.state.isPanelOpen ? 'active' : ''}`} onClick={this.toggleRatioPanel} />
              </th>
            </tr>
          </thead>
          <tbody className="ratio-widget__body j-ratio-widget-body">
            {this.state.currenciesCollection.map((currency, index) => {
              const currencyRatio = GetCurrencyRatio(this.state.widgetCurrency);
              const upperCaseCurrency = currency.toUpperCase();

              return (
                <RatioWidgetRow
                  upperCaseCurrency={upperCaseCurrency}
                  currencyRatio={currencyRatio}
                  key={index}
                />
              );
            })}
          </tbody>
          <tfoot className="ratio-widget__foot j-ratio-widget-foot hidden">
            <tr className="ratio-widget__row">
              <td colSpan="2" className="ratio-widget__data">
                There is nothing to show. Please, select some more currency to show.
              </td>
            </tr>
          </tfoot>
        </table>
        <div className={`ratio-widget__panel j-ratio-panel ${this.state.isPanelOpen ? 'active' : ''}`}>
          {this.state.ratioPanelCurrencies.map((currency, index) => {
            const upperCaseCurrency = currency.toUpperCase();

            return (
              <RatioPanelOption
                upperCaseCurrency={upperCaseCurrency}
                onChange={this.onRatioCheckboxChange}
                key={index}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default RatioWidget;
