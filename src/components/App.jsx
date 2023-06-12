import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateLocalStorage } from '../redux/createSlice'
import css from './App.module.css'


export function App() {

const dispatch = useDispatch();

useEffect(() => {
    const contactsStorage = localStorage.getItem('contacts');

    const parsСontactsStorage = JSON.parse(contactsStorage);

    if (!parsСontactsStorage) {
      return;
  }
  
  dispatch(updateLocalStorage(parsСontactsStorage));
  
  }, [dispatch]);


  return (
    <div className={css.phonebookWrap}>
      <h1 className={css.maineTitle}>Phonebook</h1>
      <ContactForm/>
      <h2 className={css.sectionTitle}>Contacts</h2>
      <Filter/>
      <ContactList/>
    </div>
  );
}


