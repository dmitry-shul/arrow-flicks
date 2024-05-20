"use client";
import React, { useState, useEffect } from "react";
import styles from "./FiltersSort.module.css";
import MultiSelectComp from "@/components/MultiSelectComp/page";
import InputRating from "@/components/InputRating/page";
import SelectorSort from "@/components/SelectorSort/page";
import { useFetching } from "@/hooks/useFetching";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setGenres } from "@/redux/features/genresSlice";
import UnFillButton from "../UnFillButton/page";
import { validateRatingInputs } from "@/utils/validateRatingInputs";
import { SORT_BY } from "@/utils/sortBy";

const FiltersSort = ({ filters, setFilters, ...props }) => {
  const [ratingError, setRatingError] = useState("");
  const [openFilters, setOpenFilters] = useState(false);
  const [defaultFilters, setDefaultFilters] = useState(true);
  const genres = useAppSelector((state) => state.genre.genres);
  const dispatch = useAppDispatch();

  const [fetchGenres, isGenresLoading, isGenresLoaded, genresError] = useFetching(async () => {
    await fetch("/genres")
    .then((response) => response.json())
    .then((response) => dispatch(setGenres(response)));
  });

  useEffect(() => {
    fetchGenres()
  }, []);

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
    setRatingError(validateRatingInputs(filters))
    filters.genres.length == 0 &&
    filters.releaseYear == null &&
    filters.ratingFrom.length == 0 &&
    filters.ratingTo.length == 0
      ? setDefaultFilters(true)
      : setDefaultFilters(false);
  }, [filters]);

  const setSelectedGenres = (e) => {
    const selectedGenres = genres?.genres.filter((item) =>
      e.includes(item.name),
    );
    setFilters({ ...filters, genres: selectedGenres });
  };

  const setSortBy = (e) => {
    const mySortBy = SORT_BY.find((item) => e === item.title);
    setFilters({ ...filters, sortBy: mySortBy.link });
  };

  return (
    <div {...props} className={openFilters ? [styles.filtersSort, styles.filtersSort_active].join(" ") : styles.filtersSort} >
      <div onClick={() => setOpenFilters(!openFilters)} className={styles.filters__openBtn} >
        {openFilters ? "Close" : "Open"} filters
        <img src="/assets/icons/arrow-down.svg" alt="arrow" style={openFilters ? { transform: "rotate(180deg)" } : {}} />
      </div>

      <div className={styles.filters}>
        <MultiSelectComp
          genres={genres?.genres?.map((item) => item.name)}
          label="Genres"
          placeholder={isGenresLoaded ? "Select genre" : "Loading..."}
          value={filters.genres.map((item) => item.name)}
          setFilters={(e) => setSelectedGenres(e)}
        />

        <SelectorSort
          data={Array(new Date().getFullYear() - 1884)
            .fill()
            .map((_, i) => String(new Date().getFullYear() - i))
            .flat(Infinity)}
          label="Release year"
          placeholder="Select release year"
          defaultValue={null}
          value={filters.releaseYear}
          setFilters={(e) => setFilters({ ...filters, releaseYear: e })}
          allowDeselect={true}
          style={{ margin: "0 16px", marginLeft: "20px" }}
        />

        <div className={styles.ratingAndBtn}>
          <div className={styles.rating_errorMassage}>
            <div className={styles.rating}>
              <InputRating
                label="Ratings"
                placeholder="From"
                value={filters.ratingFrom}
                setFilters={(e) => setFilters({ ...filters, ratingFrom: e })}
              />

              <InputRating
                label=""
                placeholder="To"
                value={filters.ratingTo}
                setFilters={(e) => setFilters({ ...filters, ratingTo: e })}
              />
            </div>
            <p>{ratingError}</p>
          </div>

          <div className={styles.resetBtn}>
            <UnFillButton
              onClick={resetFilters}
              disabled={defaultFilters}
              style={ defaultFilters ? { color: "#7B7C88", cursor: "default" } : {} }
            >
              Reset filters
            </UnFillButton>
          </div>
        </div>
      </div>

      <div className={styles.sort}>
        <SelectorSort
          data={SORT_BY.map((item) => item.title)}
          label="Sort by"
          placeholder=""
          defaultValue={SORT_BY[0].title}
          setFilters={(e) => setSortBy(e)}
          allowDeselect={false}
        />
      </div>
    </div>
  );
};

export default FiltersSort;