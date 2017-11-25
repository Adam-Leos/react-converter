import 'reset-css';
import React from 'react';
import { render } from 'react-dom';
import {
  Router,
  Route,
} from 'react-router-dom';
import { withRouter } from 'react-router';
import { createBrowserHistory } from 'history';
import { Provider, connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import store from './store';
import * as actionCreators from './actions/actionCreators';
import Main from './views/main/Main.jsx';
import Contacts from './views/contacts/Contacts.jsx';
import './components/layout/layout.scss';

function mapStateToProps(state) {
  return {
    ratioWidget: state.ratioWidget,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const Converter = props => (
  <div>
    <Route exact path="/" render={() => <Main {...props} />} />
    <Route path="/contacts" component={Contacts} />
  </div>
);

const ConnectedConverter = withRouter(connect(mapStateToProps, mapDispatchToProps)(Converter));

function App() {
  return (
    <Provider store={store}>
      <Router history={createBrowserHistory()}>
        <ConnectedConverter />
      </Router>
    </Provider>
  );
}

render(
  <App />,
  document.getElementById('app-root'),
);
