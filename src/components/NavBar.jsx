import React from 'react';
import { Link } from 'react-dom';

import Logo from './components/Logo.jsx';

const NavBar = () => {
  return (
    <>
      <Link>Shop</Link>
      <Link>Partners</Link>
      <Link>Boricanna</Link>
      <Link>
        <Logo />
      </Link>
      <Link>Account</Link>
      <Link>🛒</Link>
    </>
  )
};

export default NavBar;