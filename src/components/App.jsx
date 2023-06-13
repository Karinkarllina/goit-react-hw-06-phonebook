import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import css from './App.module.css'


export function App() {

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


