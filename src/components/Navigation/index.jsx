import { Toolbar } from '@mui/material';
import { useAuth } from 'hooks';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Toolbar>
      <NavLink
        to="/"
        style={{
          color: 'white',
          textDecoration: 'none',
          marginRight: '10px',
          fontSize: '22px',
        }}
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          style={{
            color: 'white',
            textDecoration: 'none',
            marginRight: '10px',
            fontSize: '22px',
          }}
        >
          Contacts
        </NavLink>
      )}{' '}
    </Toolbar>
  );
};
