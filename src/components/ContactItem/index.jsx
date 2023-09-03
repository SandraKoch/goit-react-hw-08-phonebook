import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

export const ContactItem = ({ item }) => {
  const dispatch = useDispatch();

  const deleteItem = id => {
    dispatch(deleteContact(id));
  };

  return (
    <li>
      {item.name}: {item.number}
      <button type="button" onClick={() => deleteItem(item.id)}>
        Usuń
      </button>
    </li>
  );
};
