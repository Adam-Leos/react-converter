import {
  TOGGLE_RATIO_PANEL,
  CHANGE_WIDGET_HEAD_CURRENCY,
  CHANGE_RATIO_TABLE_CURRENCIES,
  CHANGE_RATIO_PANEL_CURRENCIES,
} from './actionTypes';

export function toggleRatioPanel() {
  return {
    type: TOGGLE_RATIO_PANEL,
  };
}

export function changeWidgetHeadCurrency(newWidgetCurrency) {
  return {
    type: CHANGE_WIDGET_HEAD_CURRENCY,
    newWidgetCurrency,
  };
}

export function changeRatioTableCurrencies(currencyToRemove, currencyToAdd) {
  return {
    type: CHANGE_RATIO_TABLE_CURRENCIES,
    currencyToRemove,
    currencyToAdd,
  };
}

export function changeRatioPanelCurrencies(currencyToRemove, currencyToAdd) {
  return {
    type: CHANGE_RATIO_PANEL_CURRENCIES,
    currencyToRemove,
    currencyToAdd,
  };
}
