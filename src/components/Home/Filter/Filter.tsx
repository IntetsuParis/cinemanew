import React, { FC, ChangeEvent } from "react";
import styles from "../Explore/Explore.module.scss";

interface ISortOptionsProps {
  sortByTitle: string;
  sortByDate: string;
  sortByRate: string;
  handleTitleSortChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleDateSortChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleRateSortChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const Filter: FC<ISortOptionsProps> = ({
  sortByTitle,
  sortByDate,
  sortByRate,
  handleTitleSortChange,
  handleDateSortChange,
  handleRateSortChange,
}) => {
  return (
    <div className={styles.filter}>
      <label>Sort by Title: </label>
      <select value={sortByTitle} onChange={handleTitleSortChange}>
        <option value="default">Default</option>
        <option value="title-asc">Title (A-Z)</option>
        <option value="title-desc">Title (Z-A)</option>
      </select>
      <label>Sort by Year: </label>
      <select value={sortByDate} onChange={handleDateSortChange}>
        <option value="default">Default</option>
        <option value="date-asc">Release Date (Oldest First)</option>
        <option value="date-desc">Release Date (Newest First)</option>
      </select>
      <label>Sort by Rating: </label>
      <select value={sortByRate} onChange={handleRateSortChange}>
        <option value="default">Default</option>
        <option value="rate-asc">Rating (Lowest First)</option>
        <option value="rate-desc">Rating (Highest First)</option>
      </select>
    </div>
  );
};

export default Filter;
