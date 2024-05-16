"use client";
import React, { useEffect, useState } from "react";
import styles from "./Movie.module.css";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import DetailsMainCard from "@/components/DetailsMainCard/page";
import DetailsSecondaryCard from "@/components/DetailsSecondaryCard/page";
import { useFetching } from "@/hooks/useFetching";
import LoaderComp from "@/components/LoaderComp/page";

const Movie = () => {
  const params = useParams();
  const [details, setDetails] = useState({});

  const [fetchDetails, isDetailsLoading, isDetailsLoaded, detailsError] =
    useFetching(async () => {
      await fetch(
        `/details/${params.title}?language=en-US&append_to_response=videos`,
      )
        .then((response) => response.json())
        .then((response) => setDetails(response));
    });

  useEffect(() => {
    fetchDetails()
  }, []);

  if(details.status_code === 34) {
    notFound()
  }

  return (
    <section className={styles.content}>
      <div className={styles.wrapper}>
        <div className={styles.breadcrumbs}>
          <Link href="/movies">Movies</Link>
          <span>/</span>
          <p>{details.original_title}</p>
        </div>

        {isDetailsLoaded ? (
          <>
            <DetailsMainCard details={details} />
            <DetailsSecondaryCard details={details} />
          </>
        ) : (
          <LoaderComp />
        )}

        <div style={{ height: "70px" }} />
      </div>
    </section>
  );
};

export default Movie;
