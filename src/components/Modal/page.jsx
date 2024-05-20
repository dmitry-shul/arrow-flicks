'use client'
import React from 'react'
import styles from "./Modal.module.css"

const Modal = ({children, visible, setVisible, ...props}) => {
  const styleClasses = [styles.modal];

  if(visible) {
    styleClasses.push(styles.active);
  }
  
  return (
    <div 
      {...props} 
      className={styleClasses.join(" ")} 
    >
      <div 
        className={props.classModal ? props.classModal : styles.content} 
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal