import { Button, Toolbar, Typography } from '@mui/material';
// import { Box } from '@mui/system';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Toolbar>
      {/* <Box> */}
      <Typography>Welcome, {user.name}!</Typography>
      <Button
        variant="contained"
        type="button"
        edge="end"
        style={{ marginLeft: '10px' }}
        onClick={() => dispatch(logOut())}
      >
        Log out
      </Button>
      {/* <button type="button" onClick={() => dispatch(logOut())}>
        Logout 
      </button> */}
      {/* </Box> */}
    </Toolbar>
  );
};
