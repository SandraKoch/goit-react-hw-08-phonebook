import { Box, CssBaseline, Grid, Paper } from '@mui/material';
import Typography from '@mui/joy/Typography';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Copyright } from 'components/Copyright';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 14,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <ContactForm />
          <Typography
            marginTop="30px"
            level="h3"
            fontWeight="xl"
            fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
          >
            Your Phonebook Contacts:
          </Typography>
          <ContactList />
        </Box>
        <Copyright />
      </Grid>
    </Grid>
  );
};

export default Contacts;
