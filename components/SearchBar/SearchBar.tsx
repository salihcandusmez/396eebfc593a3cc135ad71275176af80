import React, { useState } from "react";

import Button from "../Button/Button";
import { ISearchBar } from "./SearchBar.types";
import SearchInput from "../SearchInput/SearchInput";
import styles from "./SearchBar.module.scss";

const SearchBar = ({ onSearch, placeholder }: ISearchBar) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className={styles["search-bar"]}>
      <SearchInput
        placeholder={placeholder || "Search..."}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button label="Search" variant="primary" onClick={handleSearch} />
    </div>
  );
};

export default SearchBar;
