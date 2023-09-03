import { Button } from '@mui/material';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <Button
        variant="contained"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Log out
      </Button>
      {/* <button type="button" onClick={() => dispatch(logOut())}>
        Logout 
      </button> */}
    </div>
  );
};
