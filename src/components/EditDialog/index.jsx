import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';

export const EditDialog = props => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(getUserData());
  };
  const { open } = props;

  return (
    <Dialog
      // onClose={handleClose}
      open={open}
    >
      <DialogTitle>Your account data</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={() => props.onCLose()}
        //   onClick={handleClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: theme => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        <Box sx={{ mt: 1, mx: 2 }}>
          <Typography>User name: {user.name}</Typography>
          <Typography>Email: {user.email}</Typography>
          <Button
            onClick={handleSubmit}
            type="button"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Request personal data from API
          </Button>

          {/* <button onClick={() => props.onCLose()}>OK (opened {open})</button> */}
        </Box>
      </DialogContent>
    </Dialog>
  );
};
