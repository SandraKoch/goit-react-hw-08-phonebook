import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  styled,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import DeleteIcon from '@mui/icons-material/Delete';
import { PersonRounded } from '@mui/icons-material';
import { deleteContact } from 'redux/contacts/operations';
import { getFilter } from 'redux/filter/selectors';

export const ContactList = () => {
  const filterQuery = useSelector(getFilter);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const deleteItem = id => {
    dispatch(deleteContact(id));
  };

  const StyledList = styled(List)({
    '& .MuiListItem-root:hover': {
      backgroundColor: 'orange',
      '&, & .MuiAvatar-root': {
        color: 'black',
      },
    },
  });

  return (
    <StyledList sx={{ width: '100%', marginTop: 0 }}>
      {contacts
        .filter(item =>
          item.name.toLowerCase().includes(filterQuery.toLowerCase())
        )
        .map(item => (
          <ListItem
            key={item.id + 'i'}
            item={item}
            sx={{ borderBottom: '1px solid grey', minWidth: '300px' }}
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
  );
};
