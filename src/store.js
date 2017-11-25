import { createStore } from 'redux';
import rootReducer from './reducers/index';

const defaultState = {
  ratioWidget: {
    isPanelOpen: false,
    ratioWidgetHeadCurrency: 'USD',
    ratioTableCurrenciesCollection: ['EUR', 'RUB', 'GBP', 'JPY'],
    ratioPanelCurrenciesCollection: ['EUR', 'RUB', 'GBP', 'JPY'],
  },
};

const store = createStore(rootReducer, defaultState);

export default store;
