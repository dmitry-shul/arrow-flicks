import React from 'react'
import styles from "./InputRating.module.css"
import { Input } from '@mantine/core'
import SVGSelector from '../UI/SVGSelector'

const InputRating = () => {
  return (
    <Input.Wrapper 
      classNames={{
        root: styles.root,
        label: styles.label,
      }}
      label="Ratings" 
    >
      <Input 
        classNames={{
          input: styles.input,
        }}
        type='number'
        placeholder="From" 
        rightSection={<SVGSelector/>}
      />
    </Input.Wrapper>
  )
}

export default InputRating