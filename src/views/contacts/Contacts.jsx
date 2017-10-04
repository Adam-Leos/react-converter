import React from 'react';
import {
  Link,
} from 'react-router-dom';
import './contacts.scss';
import Copyright from './../../components/copyright/Copyright.jsx';

function Contacts() {
  return (
    <div>
      <header className="header">
        <Link className="header__link" to="/">to main</Link>
      </header>
      <main className="main">
        <div className="contacts">
          <a className="contacts__link" href="https://www.linkedin.com/in/adam-leos/" rel="noopener noreferrer" target="_blank">LinkedIn</a>
          <a className="contacts__link contacts__link--facebook" href="https://www.facebook.com/4leos" rel="noopener noreferrer" target="_blank">Facebook</a>
          <a className="contacts__link contacts__link--gmail" href="mailto:leos2397@gmail.com">GMail - leos2397@gmail.com</a>
        </div>
      </main>
      <footer className="footer">
        <Copyright />
      </footer>
    </div>
  );
}

export default Contacts;
