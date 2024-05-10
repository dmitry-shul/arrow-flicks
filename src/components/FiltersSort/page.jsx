"use client";
import React, { useState, useEffect } from "react";
import styles from "./FiltersSort.module.css";
import MultiSelectComp from "@/components/MultiSelectComp/page";
import InputRating from "@/components/InputRating/page";
import SelectorSort from "@/components/SelectorSort/page";

const FiltersSort = ({ ...props }) => {
  const [defaultFilters, setDefaultFilters] = useState(true)
  const [filters, setFilters] = useState({
    genres: [],
    releaseYear: null,
    ratingFrom: "",
    ratingTo: "",
    sortBy: "React",
  });

  const resetFilters = () => {
    setFilters({
      genres: [],
      releaseYear: null,
      ratingFrom: "",
      ratingTo: "",
      sortBy: filters.sortBy,
    });
  };

  useEffect(() => {
    filters.genres.length == 0 && filters.releaseYear == null && filters.ratingFrom.length == 0 && filters.ratingTo.length == 0 ? setDefaultFilters(true) : setDefaultFilters(false)
  }, [filters])
  
  return (
    <div {...props} className={styles.filtersSort}>
      <div className={styles.filters}>
        <MultiSelectComp
          label="Genres"
          placeholder="Select genre"
          value={filters.genres}
          setFilters={(e) => setFilters({ ...filters, genres: e })}
        />

        <SelectorSort
          label="Release year"
          placeholder="Select release year"
          defaultValue={null}
          value={filters.releaseYear}
          setFilters={(e) => setFilters({ ...filters, releaseYear: e })}
          style={{ margin: "0 16px", marginLeft: "20px" }}
        />

        <div className={styles.ratingAndBtn}>
          <InputRating
            label="Ratings"
            placeholder="From"
            value={filters.ratingFrom}
            setFilters={(e) => setFilters({ ...filters, ratingFrom: e })}
          />

          <InputRating
            label=""
            placeholder="To"
            style={{ margin: "0 16px 0 8px" }}
            value={filters.ratingTo}
            setFilters={(e) => setFilters({ ...filters, ratingTo: e })}
          />

          <button
            onClick={resetFilters}
            disabled={defaultFilters}
            className={styles.resetBtn}
            style={defaultFilters ? {color: "#7B7C88", cursor: "default"} : {}}
          >
            Reset filters
          </button>
        </div>
      </div>

      <div className={styles.sort}>
        <SelectorSort
          label="Sort by"
          placeholder=""
          defaultValue="React"
          setFilters={(e) => setFilters({ ...filters, sortBy: e })}
        />
      </div>
    </div>
  );
};

export default FiltersSort;

