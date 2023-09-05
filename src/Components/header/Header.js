import React from 'react';
import { Link } from 'react-router-dom';
// import AuthenticatedRoutes from '../Routes/AuthenticatedRoutes';

function Header() {
  return (
    <div> Header
      <Link to={'/home'}>HOme</Link>
    </div>
  )
}

export default Header