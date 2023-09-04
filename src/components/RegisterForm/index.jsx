import {
  Avatar,
  Button,
  CssBaseline,
  Grid,
  Paper,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material';
import { Box } from '@mui/system';
import { Copyright } from 'components/Copyright';
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

  const defaultTheme = createTheme();
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* here comes the content part */}
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar>
            <Typography component="h1" variant="h5">
              Create an account
            </Typography>
            {/* this is a box for the registration form */}
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="user"
                name="user"
                label="User name"
                type="text"
                autoComplete="off"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Register now
              </Button>
            </Box>
            <Copyright />
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              'url(https://github.com/SandraKoch/goit-react-hw-08-phonebook/blob/main/src/images/team-4529717_1280.jpg?raw=true)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: t =>
              t.palette.mode === 'light'
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* <form onSubmit={handleSubmit}>
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
          </form> */}
      </Grid>
    </ThemeProvider>
  );
};
