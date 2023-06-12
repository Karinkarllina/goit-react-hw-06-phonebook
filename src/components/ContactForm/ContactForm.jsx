import { useDispatch } from 'react-redux';
import { createContact } from 'redux/createSlice';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

export function ContactForm() { 
    
    const dispatch = useDispatch();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const formValue = event.currentTarget;
    dispatch(
        createContact({
        id: nanoid(),
        name: formValue.elements.name.value,
        number: formValue.elements.number.value,
      })
    );
    formValue.reset();
    };
  
    
    return (
        <form onSubmit={handleSubmit} className={css.formMaine}>
            <label className={css.formMaineLabel}>
                Name
                <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                className={css.inputMaine}
                />
            </label>
            <label className={css.formMaineLabel}>
                Number
                <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                className={css.inputMaine}
                />
            </label>
          <button type='submit'className={css.formAddBtn}> Add Contact </button>
        </form>
    )
}

