import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from 'redux/createSlice';


import PropTypes from 'prop-types';
import css from './ContactList.module.css';


export const ContactList = () => {

  const contacts = useSelector(state => state.contacts.contacts);
  const filterValue = useSelector(state => state.contacts.filter);
  

  const dispatch = useDispatch();

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );



    return (
    <ul className={css.contactList}>
        {filterContacts.map(({ name, number, id }) => {
            return (
              <li key={id} className={css.contactsItem}>
                <div className={css.contactItemWrap}>
                <p className={css.contactName}>{name}:
                  <span className={css.contactNumber}>{number}</span>
                  </p>
                    <button type='button' className={css.addContactBtn} onClick={() => dispatch(deleteContact(id))}>Delete</button>
                </div>
              </li>
            )
          })}
       
        
</ul>
    )
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  )
};