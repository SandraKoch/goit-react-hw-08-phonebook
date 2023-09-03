import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ContactForm />
      <h3>Your Phonebook contact list:</h3>
      <ContactList />
    </div>
  );
};

export default Contacts;
