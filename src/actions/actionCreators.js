export function toggleRatioPanel() {
  return {
    type: 'TOGGLE_RATIO_PANEL',
  };
}

export function changeWidgetCurrency(newCurrency) {
  return {
    type: 'CHANGE_WIDGET_CURRENCY',
    newCurrency,
  };
}

export function changeCurrencyCollection(newCurrencyArray) {
  return {
    type: 'CHANGE_CURRENCY_COLLECTION',
    newCurrencyArray,
  };
}
