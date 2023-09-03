import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import TextField from '@mui/material/TextField';
import { Button, Stack } from '@mui/material';

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
      <Stack spacing={2}>
        <TextField id="email" label="Email" type="text" variant="filled" />
        <TextField
          id="password"
          label="Password"
          type="text"
          variant="filled"
        />
        <Button variant="contained" type="submit">
          Log in
        </Button>
      </Stack>
    </form>
  );
};

// password    123asd7#
