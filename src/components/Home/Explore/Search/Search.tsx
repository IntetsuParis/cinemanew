import React, { FC, useEffect, useState } from "react";
import styles from "./Search.module.scss";

const Search: FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [debounce, setDebounce] = useState(query);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounce(query);
    }, 300); // задержка в миллисекундах

    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  useEffect(() => {
    onSearch(debounce);
  }, [debounce]);

  return (
    <form className={styles.search}>
      <input
        type="search"
        placeholder="Type to search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
};

export default Search;
