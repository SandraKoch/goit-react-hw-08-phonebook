import { ContactItem } from 'components/ContactItem';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);

  return (
    <div>
      <ul>
        {contacts
          // .filter(item =>
          //   item.name.toLowerCase().includes(filterQuery.toLowerCase())
          // )
          .map(item => (
            <ContactItem key={item.id} item={item} />
          ))}
      </ul>
    </div>
  );
};
