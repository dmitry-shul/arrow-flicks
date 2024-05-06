import React from 'react'
import styles from "./InputRating.module.css"
import { Input } from '@mantine/core'
import SVGSelector from '../UI/SVGSelector'

const InputRating = ({...props}) => {
  return (
    <Input.Wrapper 
      classNames={{
        root: styles.root,
        label: styles.label,
      }}
      label="Ratings" 
      {...props}
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