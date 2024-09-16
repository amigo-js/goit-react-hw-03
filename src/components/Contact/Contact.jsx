import { GiRotaryPhone } from "react-icons/gi";
import { LuContact } from "react-icons/lu";
import styles from "./Contact.module.css";

export default function Contact({ contact, onDelete }) {
  return (
    <div className={styles.contactCard}>
      <ul className={styles.contactList}>
        <li className={styles.contactItem}>
          <LuContact />
          <p>{contact.name}</p>
        </li>
        <li className={styles.contactItem}>
          <GiRotaryPhone />
          <p>{contact.number}</p>
        </li>
      </ul>
      <button className={styles.button} onClick={() => onDelete(contact.id)}>Delete</button>
    </div>
  );
}
