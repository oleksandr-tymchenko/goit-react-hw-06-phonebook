import PropTypes from 'prop-types';
import { ContactsCont } from './ContactListStyled';

import { useSelector } from 'react-redux';
import { getContacts, getFilterValue } from 'redux/selectors';

import Contact from 'components/Contact/Contact';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  console.log('contacts', contacts);
  // const contArr = Object.values(contacts);
  // const delEl = contArr.pop();
  // console.log('contArr', contArr);
  const filterValue = useSelector(getFilterValue);

  const getVisibleContacts = () => {
    const normalizedFilter = filterValue.toLowerCase();
    // console.log('contacts', contacts);

    if (!contacts) return;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const visibleContacts = getVisibleContacts();
  return (
    <ContactsCont>
      {visibleContacts.map(contact => {
        return (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </ContactsCont>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func,
};
