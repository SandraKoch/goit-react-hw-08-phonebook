import { Box, CssBaseline, Grid, Paper } from '@mui/material';
import Typography from '@mui/joy/Typography';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Copyright } from 'components/Copyright';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { Filter } from 'components/Filter';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Grid container component="main">
      <CssBaseline />
      <Grid item xs={18} sm={7} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 12,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography
            width="100%"
            marginBottom="30px"
            level="h3"
            fontWeight="xl"
            fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
          >
            Your Phonebook Contacts:
          </Typography>
          <ContactForm />
          <Filter />
          <ContactList />
        </Box>
        <Copyright />
      </Grid>

      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage:
            'url(https://github.com/SandraKoch/goit-react-hw-08-phonebook/blob/main/src/images/network-4901591_1280.jpg?raw=true)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: t =>
            t.palette.mode === 'light'
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    </Grid>
  );
};

export default Contacts;
