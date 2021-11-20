import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/aaron.jpeg`} alt="Aaron's portrait" />
      </Link>
      <header>
        <h2>Aaron Osterby</h2>
        <p><a href="mailto:aaron@osterby.com">aaron@osterby.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Aaron. I like making things and connecting people. Currently developing an
        NFT-supported wine swapping project for cellar owners and managers. If that&apos;s
        interesting to you let&apos;s connect. I am a <a href="https://cmu.edu">Carnegie Mellon</a>
        &nbsp;MSIT graduate, Adelaidian, start-up advisor, and software development manager
        at <a href="https://isoton.com">Isoton</a>.
        Before Isoton I was
        at <a href="https://adelaide.edu.au">University of Adelaide</a>
        , <a href="https://sweat.com">Sweat</a>
        , <a href="https://portalink.com">Portalink</a>. Keen sailor and former inshore racing
        crew on CYCSA&apos;s Alliance.
      </p>
    </section>
    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Aaron Osterby<Link to="/">osterby.github.io/personal-site</Link>.</p>
    </section>
  </section>
);

export default SideBar;
