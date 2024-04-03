let lastContacts = null;
let lastFilter = null;
let lastFilteredContacts = null;

export const getFilteredContacts = store => {
  const { contacts, filter } = store;
  

  if (contacts === lastContacts && filter === lastFilter) {
    return lastFilteredContacts;
  }
  
  lastContacts = contacts;
  lastFilter = filter;

  if (!filter || !contacts) {
    lastFilteredContacts = [];
    return lastFilteredContacts;
  }
  
  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(({ name, phone }) => {
    if (!name || !phone) {
      return false;
    }
    
    const normalizedName = name.toLowerCase();

    return (
      normalizedName.includes(normalizedFilter) ||
      phone.includes(normalizedFilter)
    );
  });

  lastFilteredContacts = filteredContacts;
  return lastFilteredContacts;
};





// export const getFilteredContacts = store => {
//   const { contacts, filter } = store;
//   if (!filter || !contacts) {
//     return [];
//   }
  
//   const normalizedFilter = filter.toLowerCase();
//   const filteredContacts = contacts.filter(({ name, phone }) => {
  
//     if (!name || !phone) {
//       return false;
//     }
    
//     const normalizedName = name.toLowerCase();

//     return (
//       normalizedName.includes(normalizedFilter) ||
//       phone.includes(normalizedFilter)
//     );
//   });

//   return filteredContacts;
// };









// export const getFilteredContacts = store => {
//   const { contacts, filter } = store;
//   if (!filter || !contacts) {
//     return [];
//   }
  
//   const normalizedFilter = filter.toLowerCase();
//   const filteredContacts = contacts.filter(({ name, phone }) => {
//     const normalizedName = name.toLowerCase();

//     return (
//       normalizedName.includes(normalizedFilter) ||
//       phone.includes(normalizedFilter)
//     );
//   });

//   return filteredContacts;
// };









// export const getContacts = store => store.contacts;

// export const getFilteredContacts = store => {
//   const { contacts, filter } = store;
//   if (!filter) {
//     return contacts;
//   }
//   const normalizedFilter = filter.toLowerCase();
//   const filtredContacts = contacts.filter(({ name, phone }) => {
//     const normalizedName = name.toLowerCase();

//     return (
//       normalizedName.includes(normalizedFilter) ||
//       phone.includes(normalizedFilter)
//     );
//   });

//   return filtredContacts;
// };
