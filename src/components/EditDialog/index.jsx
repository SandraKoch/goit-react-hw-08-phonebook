import { Box, Button, Dialog, DialogTitle, TextField } from '@mui/material';
import PropTypes from 'prop-types';

export const EditDialog = props => {
  const { open } = props;
  const handleClose = () => {
    console.log('DialogSubmit');
  };
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Edit your account data</DialogTitle>
      <Box
        component="form"
        noValidate
        //   onSubmit={handleSubmit}
        sx={{ mt: 1, mx: 2 }}
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
          Save changes
        </Button>
      </Box>
    </Dialog>
  );
};

EditDialog.propTypes = {
  //   onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
