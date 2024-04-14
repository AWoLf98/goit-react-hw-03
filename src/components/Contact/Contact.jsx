import css from './Contact.module.css';
import { FaUserAstronaut } from 'react-icons/fa';
import { CgSmartphone } from 'react-icons/cg';

export default function Contact({ id, name, number }) {
  return (
    <li className={css['contact-box']} key={id}>
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
      <button type='button'>Delete</button>
    </li>
  );
}
