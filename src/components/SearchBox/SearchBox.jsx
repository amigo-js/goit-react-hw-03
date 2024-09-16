import { useId } from "react";
import styles from "./SearchBox.module.css";

export default function SearchBox({ value, onSearch }) {
  const searchId = useId();
  return (
    <div className={styles.searchBox}>
      <label htmlFor={searchId}>Find contact by name</label>
      <input
        type="text"
        id={searchId}
        value={value}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search by name..."
      />
    </div>
  );
}
