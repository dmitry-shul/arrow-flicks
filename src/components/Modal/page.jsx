'use client'
import React from 'react'
import styles from "./Modal.module.css"
import { CloseButton } from '@mantine/core';
import RatingComp from '../RatingComp/page';

const Modal = ({children, visible, setVisible, ...props}) => {
  const styleClasses = [styles.modal];

  if(visible) {
    styleClasses.push(styles.active);
  }
  
  return (
    <div 
      {...props} 
      className={styleClasses.join(" ")} 
      onClick={() => setVisible(false)}
    >
      <div 
        className={props.classModal ? props.classModal : styles.content} 
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.header}>
          <p>Your rating</p>
          <CloseButton />
        </div>

        <div className={styles.main}>
          <h5>The Green Mile</h5>
          <RatingComp />

          <div className={styles.buttons}>
            <button className={styles.saveBtn}>Save</button>
            <button className={styles.removeBtn}>Remove rating</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal