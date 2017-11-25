function ratioWidget(state = [], action) {
  switch (action.type) {
    case 'TOGGLE_RATIO_PANEL':
      return {
        ...state,
        isPanelOpen: !state.isPanelOpen,
      };

    case 'CHANGE_WIDGET_HEAD_CURRENCY':
      return {
        ...state,
        ratioWidgetHeadCurrency: action.newWidgetCurrency,
      };

    case 'CHANGE_RATIO_TABLE_CURRENCIES': {
      const currencyToRemove = action.currencyToRemove;
      const currencyToAdd = action.currencyToAdd;
      const newCurrenciesCollection = state.ratioTableCurrenciesCollection;

      if (typeof currencyToRemove === 'undefined') {
        newCurrenciesCollection.push(currencyToAdd);
      } else {
        const oldCurrencyPosition = newCurrenciesCollection.indexOf(currencyToRemove);

        if (typeof currencyToAdd === 'undefined') {
          newCurrenciesCollection.splice(oldCurrencyPosition, 1);
        } else {
          newCurrenciesCollection[oldCurrencyPosition] = currencyToAdd;
        }
      }

      return {
        ...state,
        ratioTableCurrenciesCollection: newCurrenciesCollection,
      };
    }

    case 'CHANGE_RATIO_PANEL_CURRENCIES': {
      const newCurrenciesCollection = state.ratioPanelCurrenciesCollection;
      const oldCurrencyPosition = newCurrenciesCollection.indexOf(action.newCurrency);

      newCurrenciesCollection[oldCurrencyPosition] = action.oldCurrency;

      return {
        ...state,
        ratioPanelCurrenciesCollection: newCurrenciesCollection,
      };
    }

    default:
      return state;
  }
}

export default ratioWidget;
