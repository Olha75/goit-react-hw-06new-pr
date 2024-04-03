import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../phoneBookRedux/contacts/contacts-slice';
import css from './contactForm.module.css';
import { nanoid } from 'nanoid';

const INITIAL_STATE = { name: '', number: '' };

const ContactForm = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({ ...INITIAL_STATE });

  const handleChange = ({ target }) => {
    const { name, value } = target;

    if (name === 'number') {
      const numericValue = value.replace(/\D/g, '');
      if (value !== numericValue) {
        alert('Введіть тільки цифри');
        return;
      }
      setState(prevState => ({
        ...prevState,
        [name]: numericValue,
      }));
    } else {
      setState(prevState => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContact(state));
    setState({ ...INITIAL_STATE });
  };

  const { name, number } = state;
  const nameId = nanoid();
  const telId = nanoid();

  return (
    <form className={css.forma} onSubmit={handleSubmit}>
      <div>
        <label className={css.labelForm} htmlFor={nameId}>
          Name
        </label>
        <input
          className={css.inpForm}
          value={name}
          onChange={handleChange}
          id={nameId}
          type="text"
          name="name"
          required
          placeholder="Введіть ім'я"
        />
        <label className={css.labelForm} htmlFor={telId}>
          Number
        </label>
        <input
          className={css.inpForm}
          value={number}
          onChange={handleChange}
          id={telId}
          type="tel"
          name="number"
          required
          placeholder="Введіть номер телефона"
        />
        <button className={css.btnForm} type="submit">
          Add contact
        </button>
      </div>
    </form>
  );
};

export default ContactForm;

// це до перевірки 
// Контактна форма (ContactForm.jsx)
// import React, { useState } from 'react';
// import { nanoid } from 'nanoid';
// import { useDispatch } from 'react-redux';
// import { addContact } from '../../phoneBookRedux/contacts/contacts-slice';
// import css from './contactForm.module.css';

// const INITIAL_STATE = { name: '', number: '' };

// const ContactForm = ({ onSubmit }) => {
//   const dispatch = useDispatch();
//   const [state, setState] = useState({ ...INITIAL_STATE });

//   const handleChange = ({ target }) => {
//     const { name, value } = target;

//     if (name === 'number') {
//       const numericValue = value.replace(/\D/g, '');
//       if (value !== numericValue) {
//         alert('Введіть тільки цифри');
//         return;
//       }
//       setState(prevState => ({
//         ...prevState,
//         [name]: numericValue,
//       }));
//     } else {
//       setState(prevState => ({
//         ...prevState,
//         [name]: value,
//       }));
//     }
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     console.log('Handling submit...');
//     onSubmit(state); 
//     console.log('Form state:', state);
//     dispatch(addContact({ ...state }));
//     setState({ ...INITIAL_STATE });
//   };

//   const { name, number } = state;
//   const nameId = nanoid();
//   const telId = nanoid();

//   return (
//     <form className={css.forma} onSubmit={handleSubmit}>
//       <div>
//         <label className={css.labelForm} htmlFor={nameId}>
//           Name
//         </label>
//         <input
//           className={css.inpForm}
//           value={name}
//           onChange={handleChange}
//           id={nameId}
//           type="text"
//           name="name"
//           required
//           placeholder="Введіть ім'я"
//         />
//         <label className={css.labelForm} htmlFor={telId}>
//           Number
//         </label>
//         <input
//           className={css.inpForm}
//           value={number}
//           onChange={handleChange}
//           id={telId}
//           type="tel"
//           name="number"
//           required
//           placeholder="Введіть номер телефона"
//         />
//         <button className={css.btnForm} type="submit">
//           Add contact
//         </button>
//       </div>
//     </form>
//   );
// };

// export default ContactForm;


// це було перед перевіркою

// import { useState } from 'react';
// import { nanoid } from 'nanoid';
// import { useDispatch } from 'react-redux';
// // import { addContact } from '../../phoneBookRedux/contacts/contacts-slice';
// import { addContact } from '../../phoneBookRedux/contacts/contacts-slice';
// import css from './contactForm.module.css';

// const INITIAL_STATE = { name: '', number: '' };

// const ContactForm = ({ onSubmit }) => {
//   const dispatch = useDispatch();
//   const [state, setState] = useState({ ...INITIAL_STATE });

//   const handleChange = ({ target }) => {
//     const { name, value } = target;

//     if (name === 'number') {
//       const numericValue = value.replace(/\D/g, '');
//       if (value !== numericValue) {
//         alert('Введіть тільки цифри');
//         return;
//       }
//       setState(prevState => ({
//         ...prevState,
//         [name]: numericValue,
//       }));
//     } else {
//       setState(prevState => ({
//         ...prevState,
//         [name]: value,
//       }));
//     }
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     console.log('Handling submit...');
//     onSubmit(state); 
//     console.log('Form state:', state);
//     dispatch(addContact({ ...state }));
//     setState({ ...INITIAL_STATE });
//   };

//   const { name, number } = state;
//   const nameId = nanoid();
//   const telId = nanoid();

//   return (
//     <form className={css.forma} onSubmit={handleSubmit}>
//       <div>
//         <label className={css.labelForm} htmlFor={nameId}>
//           Name
//         </label>
//         <input
//           className={css.inpForm}
//           value={name}
//           onChange={handleChange}
//           id={nameId}
//           type="text"
//           name="name"
//           required
//           placeholder="Введіть ім'я"
//         />
//         <label className={css.labelForm} htmlFor={telId}>
//           Number
//         </label>
//         <input
//           className={css.inpForm}
//           value={number}
//           onChange={handleChange}
//           id={telId}
//           type="tel"
//           name="number"
//           required
//           placeholder="Введіть номер телефона"
//         />
//         <button className={css.btnForm} type="submit">
//           Add contact
//         </button>
//       </div>
//     </form>
//   );
// };

// export default ContactForm;






// import { useState } from 'react';
// import { nanoid } from 'nanoid';
// import { useDispatch } from 'react-redux';
// import { addContact } from '../../phoneBookRedux/contacts/contacts-slice';
// import css from './contactForm.module.css';

// const INITIAL_STATE = { name: '', number: '' };

// const ContactForm = () => {
//   const dispatch = useDispatch();
//   const [state, setState] = useState({ ...INITIAL_STATE });

//   const handleChange = ({ target }) => {
//     const { name, value } = target;

//     if (name === 'number') {
//       const numericValue = value.replace(/\D/g, '');
//       if (value !== numericValue) {
//         alert('Введіть тільки цифри');
//         return;
//       }
//       setState(prevState => ({
//         ...prevState,
//         [name]: numericValue,
//       }));
//     } else {
//       setState(prevState => ({
//         ...prevState,
//         [name]: value,
//       }));
//     }
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     dispatch(addContact({ ...state }));
//     setState({ ...INITIAL_STATE });
//   };

//   const { name, number } = state;
//   const nameId = nanoid();
//   const telId = nanoid();

//   return (
//     <form className={css.forma} onSubmit={handleSubmit}>
//       <div>
//         <label className={css.labelForm} htmlFor={nameId}>
//           Name
//         </label>
//         <input
//           className={css.inpForm}
//           value={name}
//           onChange={handleChange}
//           id={nameId}
//           type="text"
//           name="name"
//           required
//           placeholder="Введіть ім'я"
//         />
//         <label className={css.labelForm} htmlFor={telId}>
//           Number
//         </label>
//         <input
//           className={css.inpForm}
//           value={number}
//           onChange={handleChange}
//           id={telId}
//           type="tel"
//           name="number"
//           required
//           placeholder="Введіть номер телефона"
//         />
//         <button className={css.btnForm} type="submit">
//           Add contact
//         </button>
//       </div>
//     </form>
//   );
// };

// export default ContactForm;
