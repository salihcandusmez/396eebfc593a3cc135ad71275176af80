import { FiSearch } from "react-icons/fi";
import { ISearchInput } from "./SearchInput.types";
import React from "react";
import styles from "./SearchInput.module.scss";

const SearchInput = ({ placeholder, value, onChange }: ISearchInput) => {
  return (
    <div className={styles["search-input"]}>
      <FiSearch className={styles["search-input__icon"]} />
      <input
        type="text"
        className={styles["search-input__input"]}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchInput;
