import { useDispatch } from 'react-redux';
import css from './contactItem.module.css';
import { deleteContact } from '../../../phoneBookRedux/contacts/contacts-slice';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={css.contactsItem}>
      {name} {number}
      <button className={css.btnItem} onClick={handleDelete} type="button">
        X
      </button>
    </li>
  );
};

export default ContactItem;