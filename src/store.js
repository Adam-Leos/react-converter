import { createStore } from 'redux';
import rootReducer from './reducers/index';

const defaultState = {
  ratioWidget: {
    isPanelOpen: false,
    widgetCurrency: 'USD',
    currenciesCollection: ['EUR', 'RUB', 'GBP', 'JPY'],
    ratioPanelCurrencies: ['EUR', 'RUB', 'GBP', 'JPY'],
  },
};

const store = createStore(rootReducer, defaultState);

export default store;
