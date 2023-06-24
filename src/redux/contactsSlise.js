// import { createSlice } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
// import { persistReducer } from 'redux-persist';

// const contactsInitialState = [
//   { id: 0, name: 'Mango', number: 1223345 },
//   { id: 1, name: 'Poly', number: 45454545 },
//   { id: 2, name: 'Ajax', number: 4545454545 },
// ];
// // const contactsInitialState = [];

// const contactsSlice = createSlice({
//   name: 'contaсts',
//   initialState: contactsInitialState,
//   reducers: {
//     addContact(state, action) {
//       return [...state, action.payload];
//     },

//     deleteContact(state, action) {
//       return state.filter(contact => contact.id !== action.payload);
//     },
//   },
// });

// export const { addContact, deleteContact } = contactsSlice.actions;
// const contactsReducer = contactsSlice.reducer;

// // const persistConfig = {
// //   key: 'contacts',
// //   storage,
// // };

// // export const persistedContactsReduser = persistReducer(
// //   persistConfig,
// //   contactsSlice.reducer
// // );
// const persistConfig = {
//   key: 'contaсts',
//   storage,
// };

// export const persistedContactsReduser = persistReducer(
//   persistConfig,
//   (state, action) => contactsReducer(state, action)
//   //   contactsSlice.reducer
// );

// // Selectorsnpm

import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import SetTransform from './transform';

const contactsInitialState = {
  items: [
    { id: 0, name: 'Mango', number: 1223345 },
    { id: 1, name: 'Poly', number: 45454545 },
    { id: 2, name: 'Ajax', number: 4545454545 },
  ],
};
// const contactsInitialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact(state, action) {
      state.items = [...state.items, action.payload];
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;

const persistConfig = {
  key: 'contacts',
  storage,
  //   transforms: [SetTransform],
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
  //   (state, action) => contactsReducer(state, action)
);

// export const getContacts = state => Object.values(state.contacts);

// export default persistedContactsReducer;
