import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me1.png`} alt="" />
      </Link>
      <header>
        <h2>Namrata Kulkarni</h2>
        <p><a href="mailto:namratajkulkarni@gmail.com">namratajkulkarni@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Namrata.
        I am a <a href="https://www.psu.edu/">Penn State</a> 2022 graduate majoring in Human-Centered Design.
        I am a UI/UX designer who is excited about creating meaningful experiences,
        solving complex problems, and delivering user-centered designs.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Namrata Kulkarni.</p>
    </section>
  </section>
);

export default SideBar;
