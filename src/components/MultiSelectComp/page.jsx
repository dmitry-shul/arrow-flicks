'use client'
import React, { useState } from 'react'
import styles from "./MultiSelectComp.module.css"
import { MultiSelect } from '@mantine/core';

const MultiSelectComp = ({label, placeholder, ...props}) => {
  const [value, setValue] = useState([]);

  //console.log(value)

  return (
    <MultiSelect
      classNames={{
        root: styles.root,
        wrapper: styles.wrapper,
        label: styles.label,
        input: styles.input,
        inputField: styles.inputField,
        pill: styles.pill,
        pillsList: styles.pillsList,
        dropdown: styles.dropdown,
        options: styles.options,
        option: styles.option,
        section: styles.section,
        inputField: styles.inputField,
      }}
      value={value}
      onChange={setValue}
      label={label}
      placeholder={value.length === 0 ? placeholder : ""}
      rightSection={" "}
      data={['React', 'Angular', 'Vue', 'Svelte', 'Other', 'Reacct', 'Angulsar', 'Vdue', 'Sverlte', 'Ofther']}
      withScrollArea={false}
      styles={{ dropdown: { maxHeight: 188, overflowY: 'auto' } }}
      checkIconPosition="none"
      comboboxProps={{ middlewares: { shift: false }, offset: 8, transitionProps: { transition: 'pop', duration: 200 } }}
      {...props}
    />
  )
}

export default MultiSelectComp