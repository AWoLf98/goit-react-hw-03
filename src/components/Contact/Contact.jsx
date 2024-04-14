import css from './Contact.module.css';

import { FaUserAstronaut } from 'react-icons/fa';
import { CgSmartphone } from 'react-icons/cg';

export default function Contact({ contact: {id, name, number}, onDelete }) {
  return (
    <li className={css['contact-box']}>
      <div className={css['contact-info']}>
        <div className={css['contact-info-item']}>
          <FaUserAstronaut />
          <p>{name}</p>
        </div>
        <div className={css['contact-info-item']}>
          <CgSmartphone />
          <p>{number}</p>
        </div>
      </div>
      <button type='button' onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
}
