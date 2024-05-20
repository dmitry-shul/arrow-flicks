'use client'
import React, { useEffect, useState } from 'react'
import styles from "./UserRatings.module.css"
import RateStar from '../UI/RateStar'
import Modal from '../Modal/page'
import { CloseButton } from '@mantine/core'
import RatingComp from '../RatingComp/page'
import { useAppDispatch } from '@/redux/hooks'
import { setMark } from '@/redux/features/genresSlice'
import FillButton from '../FillButton/page'
import UnFillButton from '../UnFillButton/page'

const UserRatings = ({movie}) => {
  const dispatch = useAppDispatch()
  const [visibleModal, setVisibleModal] = useState(false)
  const [rateLS, setRateLS] = useState({})
  const [myRate, setMyRate] = useState(0)
  const {original_title, id} = movie
  
  const openModal = (e) => {
    e.stopPropagation()
    setVisibleModal(!visibleModal)
  }

  useEffect(() => {
    const rates = getRatesFromLocalStorage()
    const thisRate = rates.find(item => item.movieID == id)
    setRateLS(thisRate)
    setMyRate(thisRate?.rate)
  }, [visibleModal])

  const getRatesFromLocalStorage = () => {
    if(localStorage.getItem('rates')) {
      const rates = JSON.parse(localStorage.getItem('rates'))
      return rates
    }
    return []
  }

  const saveRateToLocalStorage = () => {
    let rates = getRatesFromLocalStorage()
    const thisRate = rates.find(item => item.movieID == id)
    setRateLS(thisRate)
    if(thisRate) {
      rates = rates.filter(item => item.movieID !== id)
      setRateLS({movieID: id, rate: myRate})
    }
    localStorage.setItem('rates', JSON.stringify([...rates , {movieID: id, rate: myRate, movie}]));
    setVisibleModal(false)
  }

  const removeRateFromLocalStorage = () => {
    let rates = getRatesFromLocalStorage()
    if(rateLS) {
      rates = rates.filter(item => item.movieID !== id)
      setRateLS({})
    }
    localStorage.setItem('rates', JSON.stringify([...rates]));
    setVisibleModal(false)
    dispatch(setMark())
  }

  return (
    <div onClick={(e) => openModal(e)}>
      <div className={styles.rate}>
        <RateStar color={rateLS ? "9854F6" : "D5D6DC"}/>
        <span>{rateLS?.rate}</span>
      </div>

      <Modal visible={visibleModal} setVisible={setVisibleModal}>
        <div className={styles.header}>
          <p>Your rating</p>
          <CloseButton style={{marginRight: "-10px"}} onClick={() => setVisibleModal(false)} />
        </div>

        <div className={styles.main}>
          <h5>{original_title}</h5>
          <RatingComp myRate={myRate} setMyRate={setMyRate} />

          <div className={styles.buttons}>
            <FillButton onClick={saveRateToLocalStorage}>Save</FillButton>
            <UnFillButton onClick={removeRateFromLocalStorage}>Remove rating</UnFillButton>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default UserRatings
