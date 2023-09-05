// import { WelcomePage } from 'components/WelcomePage';
import { HomePageLogged } from 'components/HomePageLogged';
import { WelcomePage2 } from 'components/WelcomePage2';
import { useAuth } from 'hooks';

const Home = () => {
  const { isLoggedIn } = useAuth();

  return <main>{isLoggedIn ? <HomePageLogged /> : <WelcomePage2 />}</main>;
};

export default Home;
