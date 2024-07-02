import React from 'react';
import Nav from '../Nav/Nav';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__top">
        <Logo />

        <Nav />

        <div className="header__modal">
          <Link to="/sign-in" className="header__login">
            Profile
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
