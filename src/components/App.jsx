import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { CommonLayout } from './CommonLayout';
import Home from 'pages/Home';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { refreshToken } from 'redux/auth/authSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchContacts } from '../redux/operations';
// import { selectContacts } from 'redux/selectors';

const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const Contacts = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshig } = useAuth();

  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);

  return isRefreshig ? (
    <div>Refreshing user...</div>
  ) : (
    <div
      style={{
        height: '100vh',
        width: '100%',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Routes basename={process.env.PUBLIC_URL}>
        <Route path="/" element={<CommonLayout />}>
          <Route index element={<Home />} />
          <Route
            path="register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Register />}
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
          <Route
            path="*"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
        </Route>
      </Routes>

      {/* <div>
        {isLoading && <p>Loading tasks...</p>}
        {error && <p>{error}</p>}
        <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>
      </div> */}
    </div>
  );
};
