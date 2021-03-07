import React from 'react';

import { Nav as Navi, Navbar } from 'react-bootstrap';

const pages = {
  home: 'Home',
  about: 'About',
  projects: 'Projects'
};

const Nav = (props) => {
  return (
    <Navbar collapseOnSelect expand="sm" bg="transparent" sticky="top" >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ml-auto" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Navi className="ml-auto text-right">
          {Object.keys(pages).map((key) => {
            return <Navi.Link href={"#"+key}>{pages[key]}</Navi.Link>;
          })}
        </Navi>
      </Navbar.Collapse>
  </Navbar>
  );
};
export default Nav;
