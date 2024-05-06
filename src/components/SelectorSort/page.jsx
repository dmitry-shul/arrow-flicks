'use client'
import React, { useState } from 'react'
import styles from "./SelectorSort.module.css"
import { Select } from '@mantine/core'

const SelectorSort = ({label, placeholder, defaultValue, value, setFilters, ...props}) => {

  return (
    <Select
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
      onChange={(e) => setFilters(e)}
      label={label}
      placeholder={placeholder}
      data={['React', 'Angular', 'Vue', 'Svelte', 'Other', 'Reacct', 'Angulsar', 'Vdue', 'Sverlte', 'Ofther']}
      rightSection={" "}
      withScrollArea={false}
      styles={{ dropdown: { maxHeight: 188, overflowY: 'auto' } }}
      checkIconPosition="none"
      comboboxProps={{ middlewares: { shift: false }, offset: 8, transitionProps: { transition: 'pop', duration: 200 } }}
      defaultValue={defaultValue}
      {...props}
    />
  )
}

export default SelectorSort