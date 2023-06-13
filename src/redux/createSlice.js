import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist'
import contactsData from '../components/data/initialContacts.json'
import storage from 'redux-persist/lib/storage'


export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: contactsData,
    filter: '',
    
  },
 

  reducers: {

    createContact(state, action) {
      state.contacts.push(action.payload);
    },

    deleteContact(state, action) {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },

    filterContact(state, action) {
      state.filter = action.payload;
    },

    updateLocalStorage(state, action) {
      state.contacts = action.payload;
    },

  },
});



const persistConfig = {
  key: 'root',
  storage,
}

export const persistedContactsSlice = persistReducer(persistConfig, contactsSlice.reducer)


export const {
  createContact,
  deleteContact,
  filterContact,
  updateLocalStorage,
} = contactsSlice.actions;
