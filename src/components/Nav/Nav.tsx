import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

const getLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn('nav__link', {
    active: isActive,
  });

const Nav: React.FC = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink to="/discover" className={getLinkClass}>
            Discover
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink to="/contact" className={getLinkClass}>
            Contact
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink to="/about" className={getLinkClass}>
            About us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
