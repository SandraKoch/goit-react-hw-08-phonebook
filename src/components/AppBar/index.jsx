import { AppBar, Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import { AuthNavigation } from 'components/AuthNavigation';
import { Navigation } from 'components/Navigation/index.jsx';
import { UserMenu } from 'components/UserMenu';
import { useAuth } from 'hooks';

export const ApplicationBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
