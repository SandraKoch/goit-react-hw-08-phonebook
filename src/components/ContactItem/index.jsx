import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import Button from '@mui/material/Button';

export const ContactItem = ({ item }) => {
  const dispatch = useDispatch();

  const deleteItem = id => {
    dispatch(deleteContact(id));
  };

  return (
    <li>
      {item.name}: {item.number}
      <Button
        variant="contained"
        type="button"
        onClick={() => deleteItem(item.id)}
      >
        {' '}
        Usuń
      </Button>
    </li>
  );
};
