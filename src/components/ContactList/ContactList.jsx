import Contact from '../Contact/Contact';

export default function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map(contact => (
        <Contact key={contact.id} name={contact.name} number={contact.number} />
      ))}
    </ul>
  );
}
