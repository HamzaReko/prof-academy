import React from 'react';
import { NavLink,Link } from 'react-router';
import { HashLink } from 'react-router-hash-link';


const Header = () => (
  <header dir='ltr' id="header" className="header d-flex align-items-center sticky-top">
    <div className="container-fluid container-xl position-relative d-flex align-items-center">
      <Link to="/" className="logo d-flex align-items-center me-auto">
        <h1 className="sitename">Prof Academy</h1>
      </Link>
      <nav id="navmenu" className="navmenu">
        <ul>
          <li><NavLink to="/" className="active">الرئيسيه</NavLink></li>
          {/* <li><a href="about.html">من نحن</a></li> */}
          <li><HashLink to="/#featured-instructors">عملائنا</HashLink></li>
          <li><HashLink to="/#cta">خدماتنا</HashLink></li>
        </ul>
        {/* <i className="mobile-nav-toggle d-xl-none bi bi-list" /> */}
      </nav>
      <NavLink to="/contact" className="btn-getstarted">قدم طلبك الأن</NavLink>
    </div>
  </header>
);

export default Header; 