"use client";
import React, { useEffect } from "react";
import styles from "./MoviesList.module.css";
import MovieCard from "../MovieCard/page";
import { useRouter } from "next/navigation";
import { useFetching } from "@/hooks/useFetching";
import { setGenres } from "@/redux/features/genresSlice";
import { useAppDispatch } from "@/redux/hooks";

const MoviesList = ({ movies, ...props }) => {
  const { push } = useRouter();
  const dispatch = useAppDispatch();

  const [fetchGenres, isGenresLoading, isGenresLoaded, genresError] =
    useFetching(async () => {
      await fetch("/genres")
        .then((response) => response.json())
        .then((response) => dispatch(setGenres(response)));
    });

  useEffect(() => {
    //fetchGenres()
  }, []);

  return (
    <div {...props} className={styles.cardList}>
      {movies?.map((movie, index) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onClick={() => push(`/movies/${movie.id}`)}
        />
      ))}
    </div>
  );
};

export default MoviesList;
