/*
path: Autocomplete.tsx
type: file
unique_id: 1Ds72TH0
icon: ico-field
sourceType: typescript
children: []
*/
import clsx from 'clsx'
import React, { FunctionComponent } from 'react'
import Select from 'react-select'
import classes from './autocomplete.module.scss'

export interface AutocompleteProps {
  onChange: any
  options: { label: string; value: string }[]
  loading: boolean
  label: string
  value: any
  chips?: boolean
  onType: Function
  placeholder: string
}

const AptugoAutocomplete: FunctionComponent<any> = (props: AutocompleteProps) => {
  const [dropdownOptions, setDropdownOptions] = React.useState([])
  const [localValue, setLocalValue] = React.useState('')
  const [timeout, setLocalTimeout] = React.useState(null)

  const handleInputChange = (newValue: string) => {
    const inputValue = newValue.replace(/\W /g, '')
    setLocalValue(inputValue)
    if (timeout) {
      clearTimeout(timeout)
      setLocalTimeout(null)
    }
    setLocalTimeout(
      setTimeout(() => {
        props.onType(inputValue)
      }, 150)
    )
    return inputValue
  }

  React.useEffect(() => {
    props.onType('')
  }, [])

  React.useEffect(() => {
    let options = []
    if (props.value) {
      options.push(...props.value)
    }
    options.push(...props.options)
    if (localValue.length > 2) {
      options.push({ label: `Add ${localValue}...`, value: 'new' })
    }
    setDropdownOptions(options)
  }, [props.options, props.value])

  return (
    <div className={clsx('MuiFormControl-root MuiTextField-root MuiFormControl-marginDense MuiFormControl-fullWidth', classes.autocomplete)}>
      <label
        className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-marginDense MuiFormLabel-filled"
        data-shrink="true"
      >
        {props.label}
      </label>
      <div className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-fullWidth MuiInput-fullWidth MuiInputBase-formControl MuiInput-formControl MuiInputBase-marginDense MuiInput-marginDense">
        <Select
          placeholder={props.placeholder || props.label}
          className={classes.aptugoDropdown}
          classNamePrefix="aptugo"
          value={props.value || null}
          isMulti={props.chips}
          onChange={(newValue) => {
            if (!Array.isArray(newValue)) newValue = [newValue]
            newValue = newValue.map((vals) => (vals.value === 'new' ? { value: null, label: localValue } : vals))
            props.onChange(newValue)
          }}
          onInputChange={handleInputChange}
          cacheOptions={false}
          defaultOptions
          defaultMenuIsOpen={false}
          closeMenuOnSelect={true}
          options={dropdownOptions}
        />
      </div>
    </div>
  )
}

export default AptugoAutocomplete
