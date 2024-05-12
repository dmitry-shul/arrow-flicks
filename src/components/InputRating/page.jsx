'use client'
import React from 'react'
import styles from "./InputRating.module.css"
import { Input } from '@mantine/core'
import SVGSelector from '../UI/SVGSelector'

const InputRating = ({label, placeholder, value, setFilters, ...props}) => {
  return (
    <Input.Wrapper 
      classNames={{
        root: styles.root,
        label: styles.label,
      }}
      label={label} 
      {...props}
    >
      <Input 
        classNames={{
          input: styles.input,
        }}
        type='number'
        placeholder={placeholder} 
        rightSection={<SVGSelector/>}
        value={value}
        onChange={(e) => setFilters(e.target.value)}
        min={0}
        max={10}
      />
    </Input.Wrapper>
  )
}

export default InputRating