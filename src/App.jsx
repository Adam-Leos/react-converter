import 'reset-css';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Main from './views/main/Main.jsx';
import Contacts from './views/contacts/Contacts.jsx';
import './components/layout/layout.scss';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Main} />
        <Route path="/contacts" component={Contacts} />
      </div>
    </Router>
  );
}

ReactDOM.render((
  <App />
), document.getElementById('app-root'));
