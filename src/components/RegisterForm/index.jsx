import { Button, Stack, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

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
      <Stack spacing={2}>
        <TextField id="user" label="User name" type="text" variant="filled" />
        <TextField id="email" label="Email" type="text" variant="filled" />
        <TextField
          id="password"
          label="Password"
          type="text"
          variant="filled"
        />
        <Button variant="contained" type="submit">
          Register
        </Button>
      </Stack>
    </form>
  );
};
