import React from 'react';
import {
  Link,
} from 'react-router-dom';
import Converter from './../../components/converter/Converter.jsx';
import RatioWidget from './../../components/ratio-widget/RatioWidget.jsx';

function Main() {
  return (
    <div>
      <header className="header">
        <Link className="header__link" to="/contacts">to contacts</Link>
      </header>
      <main className="main">
        <Converter isConverterWithWidget />
      </main>
      <footer className="footer">
        <div className="footer__ratio-widget">
          <RatioWidget />
        </div>
      </footer>
    </div>
  );
}

export default Main;
