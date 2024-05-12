'use client'
import React, { useState } from 'react'
import styles from "./MultiSelectComp.module.css"
import { MultiSelect } from '@mantine/core';

const MultiSelectComp = ({genres, label, placeholder, value, setFilters, ...props}) => {

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
      onChange={(e) => setFilters(e)}
      label={label}
      placeholder={value.length === 0 ? placeholder : ""}
      rightSection={" "}
      data={genres}
      withScrollArea={false}
      styles={{ dropdown: { maxHeight: 188, overflowY: 'auto' } }}
      checkIconPosition="none"
      comboboxProps={{ middlewares: { shift: false }, offset: 8, transitionProps: { transition: 'pop', duration: 200 } }}
      {...props}
    />
  )
}

export default MultiSelectComp