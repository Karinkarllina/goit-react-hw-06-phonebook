import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },

  reducers: {
    
    createContact(state, action) {
      state.contacts.push(action.payload);
      localStorage.setItem('contacts', JSON.stringify(state.contacts));
    },

    deleteContact(state, action) {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
      localStorage.setItem('contacts', JSON.stringify(state.contacts));
    },

    filterContact(state, action) {
      state.filter = action.payload;
    },

    updateLocalStorage(state, action) {
      state.contacts = action.payload;
    },

  },
});


export const {
  createContact,
  deleteContact,
  filterContact,
  updateLocalStorage,
} = contactsSlice.actions;
