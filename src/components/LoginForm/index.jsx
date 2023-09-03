import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    console.log({
      email: form.elements.email.value,
      password: form.elements.password.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email
        <input type="text" id="email" name="email" />
      </label>

      <label htmlFor="password">
        Password
        <input type="text" id="password" name="password" />
      </label>

      <button type="submit">Log In</button>
    </form>
  );
};
