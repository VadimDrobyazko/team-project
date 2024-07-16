import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="header__logo">
      FoodieGuider
    </Link>
  );
};

export default Logo;
