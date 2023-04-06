import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './Logo.jsx';

const NavBar = () => {
  return (
    <>
      <Link>Shop</Link>
      <Link>Partners</Link>
      <Link>Boricanna</Link>
      <Link to='/'>
        <Logo />
      </Link>
      <Link>Account</Link>
      <Link>🛒</Link>
    </>
  )
};

export default NavBar;