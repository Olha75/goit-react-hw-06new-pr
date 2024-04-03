// import React from 'react';
import { deleteContact } from '../../../phoneBookRedux/contacts/contacts-slice';
import css from './contactItem.module.css';

const ContactItem = ({ id, name, number }) => (
  <li className={css.contactsItem} key={id}>
    {name} {number}
    <button
      className={css.btnItem}
      onClick={() => deleteContact(id)}
      type="button"
    >
      X
    </button>
  </li>
);

export default ContactItem;


