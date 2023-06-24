// export const getContacts = state => Object.values(state.contacts);
export const getContacts = state => state.contacts.items;
export const getFilterValue = state => state.filter.filter;
