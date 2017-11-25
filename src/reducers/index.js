import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import ratioWidget from './ratioWidget';

const rootReducer = combineReducers({
  ratioWidget,
  routing: routerReducer,
});

export default rootReducer;
