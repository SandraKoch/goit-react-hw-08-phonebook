import { Logout } from '@mui/icons-material';
import {
  Avatar,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from '@mui/material';
import React, { useState } from 'react';
// import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { Box } from '@mui/system';
import { EditDialog } from 'components/EditDialog';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logOut());
    setAnchorEl(null);
  };

  // modal - dialog
  const [openDialog, setOpenDialog] = useState(false);

  const handleEdit = event => {
    // openEdit();
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  // const { user } = useAuth();

  return (
    <Tooltip>
      <React.Fragment>
        <Box
          sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}
        >
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
            </IconButton>
          </Tooltip>
        </Box>

        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          // onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem onClick={handleEdit}>
            <Avatar /> Edit Profile
            <EditDialog open={openDialog} onClick={handleCloseDialog} />
          </MenuItem>
          <Divider />
          {/* <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem> */}
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
          {/* <Button
            variant="contained"
            type="button"
            edge="end"
            style={{ marginLeft: '10px' }}
            onClick={() => dispatch(logOut())}
          >
            Log out
          </Button> */}
        </Menu>
      </React.Fragment>
    </Tooltip>

    // <Toolbar>
    //   {/* <Box> */}
    //   {/* <Typography>Welcome, {user.name}!</Typography> */}
    //   <Button
    //     variant="contained"
    //     type="button"
    //     edge="end"
    //     style={{ marginLeft: '10px' }}
    //     onClick={() => dispatch(logOut())}
    //   >
    //     Log out
    //   </Button>
    //   {/* <button type="button" onClick={() => dispatch(logOut())}>
    //     Logout
    //   </button> */}
    //   {/* </Box> */}
    // </Toolbar>
  );
};
