import { Toolbar } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const AuthNavigation = () => {
  return (
    <Toolbar>
      <NavLink
        to="/register"
        style={{
          color: 'white',
          textDecoration: 'none',
          marginRight: '10px',
          fontSize: '22px',
        }}
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        style={{
          color: 'white',
          textDecoration: 'none',
          marginRight: '10px',
          fontSize: '22px',
        }}
      >
        Login
      </NavLink>
    </Toolbar>
  );
};
