// import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import {
  addContact,
  deleteContact,
} from '../src/phoneBookRedux/contacts/contacts-slice';
// import { setFilter } from '../redux/filter/filter-slice';
import { getFilteredContacts } from '../src/phoneBookRedux/contacts/contacts-selectors';
// import css from '../index.css';

const App = () => {
  const contacts = useSelector(getFilteredContacts);
  // const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const isDuplicate = ({ name }) => {
    const normalizedName = name.toLowerCase();
    return contacts.some(
      contact => contact.name.toLowerCase() === normalizedName
    );
  };

  const onAddContact = data => {
    if (isDuplicate(data)) {
      return alert('Цей контакт вже існує!');
    }
    const action = addContact(data);
    dispatch(action);
  };

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div className="blockPhonebook">
      <h1 className="titlePhonebook">Phonebook</h1>
      <div>
        <ContactForm onSubmit={onAddContact} />
      </div>
      <h2 className="titleContacts">Contacts</h2>
      <div className="formContacts">
        <Filter />
        {contacts.length > 0 ? (
          <ContactList items={contacts} deleteContact={onDeleteContact} />
        ) : (
          <p className="message">No contacts found</p>
        )}
      </div>
    </div>
  );
};

export default App;




// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React is amazing</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
