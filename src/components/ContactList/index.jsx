import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import DeleteIcon from '@mui/icons-material/Delete';
import { PersonRounded } from '@mui/icons-material';
import { deleteContact } from 'redux/contacts/operations';
import styled from '@emotion/styled';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const deleteItem = id => {
    dispatch(deleteContact(id));
  };

  const StyledList = styled(List)({
    // hover states
    '& .MuiListItem-root:hover': {
      backgroundColor: 'orange',
      '&, & .MuiAvatar-root': {
        color: 'black',
      },
    },
  });

  return (
    <div>
      <StyledList>
        {contacts.map(item => (
          <ListItem
            key={item.id}
            item={item}
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => deleteItem(item.id)}
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar>
                <PersonRounded />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={item.name} secondary={`${item.number}`} />
          </ListItem>
        ))}
      </StyledList>
      {/* <ul>
        {contacts
          // .filter(item =>
          //   item.name.toLowerCase().includes(filterQuery.toLowerCase())
          // )
          .map(item => (
            <ContactItem key={item.id} item={item} />
          ))}
      </ul> */}
    </div>
  );
};
