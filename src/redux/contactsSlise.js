import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = [
  { id: 0, name: 'Mango', number: 1223345 },
  { id: 1, name: 'Poly', number: 45454545 },
  { id: 2, name: 'Ajax', number: 4545454545 },
];

const contactsSlice = createSlice({
  name: 'contakts',
  initialState: contactsInitialState,
  reducers: {
    addContact(state, action) {
      return [...state, action.payload];
    },
    // addContact: {
    //   reducer(state, action) {
    //     return [...state, action.payload];
    //   },
    //   prepare(name, number) {
    //     return {
    //       payload: {
    //         id: nanoid(),
    //         name,
    //         number,
    //       },
    //     };
    //   },
    // },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
