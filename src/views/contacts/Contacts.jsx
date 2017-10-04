import React from 'react';
import {
  Link,
} from 'react-router-dom';
import './contacts.scss';
import './../../components/copyright/copyright.scss';

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
        <div className="copyright">
          <span className="copyright__letter copyright__letter--1">W</span>
          <span className="copyright__letter copyright__letter--2">I</span>
          <span className="copyright__letter copyright__letter--3">T</span>
          <span className="copyright__letter copyright__letter--4">H</span>
          <span className="copyright__letter copyright__letter--5">&nbsp;</span>
          <span className="copyright__letter copyright__letter--6">L</span>
          <span className="copyright__letter copyright__letter--7">O</span>
          <span className="copyright__letter copyright__letter--8">V</span>
          <span className="copyright__letter copyright__letter--9">E</span>
          <span className="copyright__letter copyright__letter--10">&nbsp;</span>
          <span className="copyright__letter copyright__letter--11">F</span>
          <span className="copyright__letter copyright__letter--12">R</span>
          <span className="copyright__letter copyright__letter--13">O</span>
          <span className="copyright__letter copyright__letter--14">M</span>
          <span className="copyright__letter copyright__letter--15">&nbsp;</span>
          <span className="copyright__letter copyright__letter--16">A</span>
          <span className="copyright__letter copyright__letter--17">D</span>
          <span className="copyright__letter copyright__letter--18">A</span>
          <span className="copyright__letter copyright__letter--19">M</span>
          <span className="copyright__letter copyright__letter--20">&nbsp;</span>
          <span className="copyright__letter copyright__letter--21">L</span>
          <span className="copyright__letter copyright__letter--22">E</span>
          <span className="copyright__letter copyright__letter--23">O</span>
          <span className="copyright__letter copyright__letter--24">S</span>
          <span className="copyright__letter copyright__letter--25">&nbsp;</span>
        </div>
      </footer>
    </div>
  );
}

export default Contacts;
