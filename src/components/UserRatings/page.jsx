'use client'
import React, { useState } from 'react'
import styles from "./UserRatings.module.css"
import RateStar from '../UI/RateStar'
import Modal from '../Modal/page'
import { CloseButton } from '@mantine/core'
import RatingComp from '../RatingComp/page'

const UserRatings = ({movie}) => {
  const [visibleModal, setVisibleModal] = useState(false)
  const [myRate, setMyRate] = useState(0)
  const {original_title, id} = movie

  console.log(myRate, id)
  
  const handler = (e) => {
    e.stopPropagation()
    setVisibleModal(!visibleModal)
  }

  return (
    <div onClick={(e) => handler(e)}>
      <div className={styles.rate}>
        <RateStar color={"D5D6DC"}/>
        <span></span>
      </div>
      <Modal visible={visibleModal} setVisible={setVisibleModal}>
        <div className={styles.header}>
          <p>Your rating</p>
          <CloseButton onClick={() => setVisibleModal(false)} />
        </div>

        <div className={styles.main}>
          <h5>{original_title}</h5>
          <RatingComp myRate={myRate} setMyRate={setMyRate} />

          <div className={styles.buttons}>
            <button className={styles.saveBtn}>Save</button>
            <button className={styles.removeBtn}>Remove rating</button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default UserRatings
