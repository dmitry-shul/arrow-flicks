import React from 'react'
import styles from "./MultiSelectComp.module.css"
import { MultiSelect } from '@mantine/core';

/*import '@mantine/core/styles/ScrollArea.css';
import '@mantine/core/styles/UnstyledButton.css';
import '@mantine/core/styles/VisuallyHidden.css';
import '@mantine/core/styles/Paper.css';
import '@mantine/core/styles/Popover.css';
import '@mantine/core/styles/CloseButton.css';
import '@mantine/core/styles/Group.css';
import '@mantine/core/styles/Loader.css';
import '@mantine/core/styles/Overlay.css';
import '@mantine/core/styles/ModalBase.css';
import '@mantine/core/styles/Input.css';
import '@mantine/core/styles/Flex.css';*/

const MultiSelectComp = () => {
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
      }}
      label="Genres"
      placeholder="Select genre"
      data={['React', 'Angular', 'Vue', 'Svelte', 'Other', 'ghghyuguy', 'dsgfwdgfw']}
      rightSection={<img src="/assets/icons/arrow-down.svg"/>}
      /*clearable*/
      /*searchable*/
      maxDropdownHeight={188}
      /*nothingFoundMessage="Nothing found..."*/
      checkIconPosition="none"
      comboboxProps={{ middlewares: { shift: false }, offset: 8, transitionProps: { transition: 'pop', duration: 200 } }}
    />
  )
}

export default MultiSelectComp