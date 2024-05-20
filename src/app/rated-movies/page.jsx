"use client";
import React, { useEffect, useState } from "react";
import styles from "./RatedMovies.module.css";
import Search from "@/components/Search/page";
import MoviesList from "@/components/MoviesList/page";
import PaginationComp from "@/components/PaginationComp/page";
import Image from "next/image";
import Link from "next/link";
import LoaderComp from "@/components/LoaderComp/page";
import { useAppSelector } from "@/redux/hooks";
import { convertMoviesToArrays } from "@/utils/convertMoviesToArrays";
import { useSearch } from "@/hooks/useSearch";
import FillButton from "@/components/FillButton/page";

const RatedMovies = () => {
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const mark = useAppSelector((state) => state.genre.mark);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  useEffect(() => {
    const rates = getRatesFromLocalStorage()
    const movies = rates.map(item => item.movie)
    const searchedMovies = useSearch(movies, searchValue)
    setMovies(convertMoviesToArrays(searchedMovies))
    setIsLoading(false)
  }, [mark, searchValue])

  const getRatesFromLocalStorage = () => {
    if (localStorage.getItem("rates")) {
      const rates = JSON.parse(localStorage.getItem("rates"));
      return rates;
    }
    return [];
  };

  useEffect(() => {
    movies[0] === undefined && localStorage.removeItem('rates');
  }, [movies])

  return (
    <>
      <section className={styles.content}>
        {isLoading ? (
          <LoaderComp />
        ) : movies[0]?.length === 0 ? (
          <div className={styles.notFound}>
            <Image src="/assets/images/notFoundRatedMovies.png" width={400} height={300} alt="Not found rated movies" priority />
            <p>You haven't rated any films yet</p>
            <Link href="/movies">
              <FillButton>Find movies</FillButton>
            </Link>
          </div>
        ) : (
          <div className={styles.wrapper}>
            <div className={styles.title}>
              <h1>Rated movies</h1>
              <Search className={styles.search} setSearchValue={setSearchValue} />
            </div>
            
            {
              movies[0] === undefined
              ? <div className={styles.searchNotFound}>
                  <Image src="/assets/images/notFoundRatedMovies.png" width={400} height={300} alt="Not found rated movies" priority />
                  <div>Not found</div>
                </div>
              : <>
                  <MoviesList movies={movies[page - 1]} />

                  <div className={styles.paginationSection}>
                    <PaginationComp page={page} setPage={setPage} totalPage={movies.length} />
                  </div>
                </>
            }
            
          </div>
        )}
      </section>
    </>
  );
};

export default RatedMovies;
