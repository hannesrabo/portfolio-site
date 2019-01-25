import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/secondAboutPage">The second about page</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </Container>
);

export default Nav;
