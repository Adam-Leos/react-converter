function ratioWidget(state = [], action) {
  switch (action.type) {
    case 'TOGGLE_RATIO_PANEL':
      return {
        ...state,
        isPanelOpen: !state.isPanelOpen,
      };

    case 'CHANGE_WIDGET_CURRENCY':
      return state;

    case 'CHANGE_CURRENCY_COLLECTION': {
      return {
        ...state,
        currenciesCollection: action.newCurrencyArray,
      };
    }

    default:
      return state;
  }
}

export default ratioWidget;
