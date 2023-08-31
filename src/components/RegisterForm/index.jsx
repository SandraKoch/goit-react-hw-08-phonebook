import { useDispatch } from 'react-redux';
import { register } from 'redux/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;

    dispatch(
      register({
        user: form.elements.user.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    console.log({
      user: form.elements.user.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    });

    form.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="user">
        Username
        <input type="text" id="user" name="user" placeholder="..." />
      </label>

      <label htmlFor="email">
        Email address
        <input type="text" id="email" name="email" placeholder="..." />
      </label>

      <label htmlFor="password">
        Password
        <input type="text" id="password" name="password" placeholder="..." />
      </label>

      <button type="submit">Register</button>
    </form>
  );
};
