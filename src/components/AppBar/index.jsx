import { AuthNavigation } from 'components/AuthNavigation';
import { Navigation } from 'components/Navigation/index.jsx';
import { UserMenu } from 'components/UserMenu';
import { useAuth } from 'hooks';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
    </header>
  );
};
