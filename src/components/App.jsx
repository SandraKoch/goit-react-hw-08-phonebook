import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { CommonLayout } from './CommonLayout';
import Home from 'pages/Home';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchContacts } from '../redux/operations';
// import { selectContacts } from 'redux/selectors';

const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const Contacts = lazy(() => import('../pages/Contacts'));

export const App = () => {
  // const dispatch = useDispatch();
  // // Otrzymujemy części stanu
  // const { items, isLoading, error } = useSelector(selectContacts);

  // // Wywołujemy operację
  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Routes basename={process.env.PUBLIC_URL}>
        <Route path="/" element={<CommonLayout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="contacts" element={<Contacts />} />
          {/* <Route path="*" element={<NotFound />} /> */}
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
