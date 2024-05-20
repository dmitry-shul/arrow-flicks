'use client'
import React from 'react'
import styles from "./SelectorSort.module.css"
import { Select } from '@mantine/core'

const SelectorSort = ({data, label, placeholder, defaultValue, value, setFilters, allowDeselect, ...props}) => {

  return (
    <Select
      {...props}
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
      data={data}
      rightSection={" "}
      withScrollArea={false}
      styles={{ dropdown: { maxHeight: 188, overflowY: 'auto' } }}
      checkIconPosition="none"
      comboboxProps={{ middlewares: { shift: false }, offset: 8, transitionProps: { transition: 'pop', duration: 200 } }}
      defaultValue={defaultValue}
      allowDeselect={allowDeselect}
    />
  )
}

export default SelectorSort