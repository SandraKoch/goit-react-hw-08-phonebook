import { Grid, Toolbar } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const AuthNavigation = () => {
  return (
    <Toolbar>
      <Grid spacing={6} sx={{ display: 'flex' }}>
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
            '&:hover': {
              backgroundColor: 'black',
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          Login
        </NavLink>
      </Grid>
    </Toolbar>
  );
};
