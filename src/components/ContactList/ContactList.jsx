import PropTypes from 'prop-types';
import { ContactsCont } from './ContactListStyled';

import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

import Contact from 'components/Contact/Contact';

export default function ContactList() {
  const contacts = useSelector(getContacts);

  return (
    <ContactsCont>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </ContactsCont>
  );
}

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   onDeleteContact: PropTypes.func,
// };
