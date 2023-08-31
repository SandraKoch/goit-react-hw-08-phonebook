import { useDispatch } from 'react-redux';
import { addNewContact } from 'redux/operations';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;

    const contact = {
      name: e.currentTarget.elements.name.value,
      number: e.currentTarget.elements.phone.value,
    };

    dispatch(addNewContact(contact));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name
        <input
          type="text"
          id="name"
          title="Name may contain only letters, apostrophe, dash and spaces"
          required
        />
      </label>
      <label htmlFor="phone">
        Phone number
        <input
          type="tel"
          id="phone"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};
