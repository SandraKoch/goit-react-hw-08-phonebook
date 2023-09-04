import Typography from '@mui/joy/Typography/Typography';
import { Button, Stack, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addNewContact } from 'redux/contacts/operations';

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
    <form onSubmit={handleSubmit}>
      <Typography
        color="primary"
        fontSize="lg"
        fontWeight="lg"
        paddingBottom="15px"
      >
        Add new contact here:
      </Typography>
      <Stack spacing={2} direction="row">
        <TextField
          id="name"
          label="Contact name"
          type="text"
          variant="filled"
          title="Name may contain only letters, apostrophe, dash and spaces"
        />
        {/* <label htmlFor="name">
        Name
        <input
          type="text"
          id="name"
          title="Name may contain only letters, apostrophe, dash and spaces"
          required
        />
      </label> */}
        <TextField
          id="phone"
          label="Phone number"
          type="tel"
          variant="filled"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
        {/* <label htmlFor="phone">
        Phone number
        <input
          type="tel"
          id="phone"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label> */}
        <Button variant="contained" type="submit">
          Add contact
        </Button>
      </Stack>
      {/* <button type="submit">Add contact</button> */}
    </form>
  );
};
