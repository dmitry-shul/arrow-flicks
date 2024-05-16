'use client'
import React from 'react'
import styles from "./DetailsSecondaryCard.module.css"
import YouTube from 'react-youtube';

const DetailsSecondaryCard = ({details, ...props}) => {
  const {videos, overview, production_companies} = details

  if(videos.results.length === 0 && overview === "" && production_companies.length === 0) {
    return null;
  }

  return (
    <div {...props} className={styles.secondaryCard}>
      {
        videos?.results.length === 0
        ? <div/>
        : <div className={styles.trailer}>
            <h5>Trailer</h5>
            <YouTube videoId={videos?.results[0].key} title={videos?.results[0].name} className={styles.YTVideo} />
          </div>
      }

      <div className={styles.description}>
        <h5>Description</h5>
        <p>{overview}</p>
      </div>
      
      {
        production_companies?.length === 0
        ? <div></div>
        :  <div className={styles.production}>
            <h5>Production</h5>

            {
              production_companies?.map(item => 
                <div key={item.logo_path + item.name}>
                  {
                    item.logo_path === null
                    ? <img src="/assets/icons/notFoundLogoProduction.svg" alt="not found" />
                    : <img src={`/img/w300/${item.logo_path}`} alt={item.name} />
                  }
                  <p>{item.name}</p>
                </div>
              )
            }
          </div>
      }
    </div>
  )
}

export default DetailsSecondaryCard
