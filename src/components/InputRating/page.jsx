'use client'
import React from 'react'
import styles from "./InputRating.module.css"
import { Input } from '@mantine/core'
import SVGSelector from '../UI/SVGSelector'

const InputRating = ({label, placeholder, value, setFilters, ratingError, ...props}) => {

  return (
    <Input.Wrapper 
      {...props}
      classNames={{
        root: styles.root,
        label: styles.label,
      }}
      label={label} 
    >
      <Input 
        classNames={{
          input: ratingError === "" ? styles.input : value !== "" ? [styles.input, styles.input__invalid].join(" ") : styles.input,
        }}
        
        placeholder={placeholder} 
        rightSection={<SVGSelector/>}
        value={value}
        onChange={(e) => setFilters(e.target.value)}
        min={0}
        max={10}
        step="1"
        pattern="[0-9]{0,2}"
      />
    </Input.Wrapper>
  )
}

export default InputRating