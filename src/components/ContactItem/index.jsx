import { useDispatch } from 'react-redux';

export const ContactItem = ({ item }) => {
  const dispatch = useDispatch();

  const deleteItem = id => {
    dispatch(deleteItem(id));
  };

  return (
    <li>
      {item.name}: {item.phone}
      <button type="button" onClick={() => deleteItem(item.id)}>
        Usuń
      </button>
    </li>
  );
};
