import { Box, Button, Dialog, DialogTitle, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUserData } from 'redux/auth/operations';

export const EditDialog = props => {
  const dispatch = useDispatch();
  const [openDialog, setOpenDialog] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    dispatch(
      getUserData({
        user: form.elements.user.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };
  const { open } = props;
  const handleClose = () => {
    console.log('DialogSubmit');
    setOpenDialog(false);
    setAnchorEl(null);
  };
  return (
    <Dialog onClose={handleClose} open={open} anchorEl={anchorEl}>
      <DialogTitle>Your account data</DialogTitle>
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit}
        sx={{ mt: 1, mx: 2 }}
      >
        {/* <TextField
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
        /> */}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Show
        </Button>
      </Box>
    </Dialog>
  );
};

EditDialog.propTypes = {
  //   onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
