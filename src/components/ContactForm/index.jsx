import Typography from '@mui/joy/Typography/Typography';
import { Box, Button, Stack, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addNewContact } from 'redux/contacts/operations';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;

    const contact = {
      name: e.currentTarget.elements.name.value,
      number: e.currentTarget.elements.phone.value,
    };

    dispatch(addNewContact(contact));
    form.reset();
  };

  return (
    <Box
      sx={{
        my: 3,
        display: 'flex',
        // width: '100%',
        flexDirection: 'column',
      }}
    >
      <form onSubmit={handleSubmit}>
        <Typography
          color="primary"
          fontSize="lg"
          fontWeight="lg"
          paddingBottom="15px"
        >
          Add a new contact here:
        </Typography>
        <Stack spacing={2} direction="row">
          <TextField
            id="name"
            label="Contact name"
            type="text"
            variant="filled"
            title="Name may contain only letters, apostrophe, dash and spaces"
          />
          <TextField
            id="phone"
            label="Phone number"
            type="tel"
            variant="filled"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
          <Button variant="contained" type="submit">
            <PersonAddOutlinedIcon />
          </Button>
        </Stack>
      </form>
    </Box>
  );
};
