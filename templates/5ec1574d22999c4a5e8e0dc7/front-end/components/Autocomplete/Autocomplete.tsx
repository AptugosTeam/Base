import React, { FunctionComponent } from 'react'
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete'
import CircularProgress from '@material-ui/core/CircularProgress'
import TextField from '@material-ui/core/TextField'

export interface AutocompleteProps {
  onChange: any
  options: { label: string, value: string}[]
  loading: boolean
  label: string
  value: any
  onType: Function
}

const AptugoAutocomplete: FunctionComponent<any> = (props: AutocompleteProps) => {
  const [open, setOpen] = React.useState(false)
  const [options, setOptions] = React.useState(props.options)
  const [value, setValue] = React.useState({ label: '', value: null })
  const [delayTimer, setDelay] = React.useState(null)

  const filter = createFilterOptions<{ label: string, value?: string, inputValue?: string}>();

  React.useEffect(() => {
    setValue(props.value)
    setOptions([
      ...options,
      props.value
    ])
  }, [props.value])

  React.useEffect(() => {
    setOptions([...props.options, props.value])
  }, [props.options])

  const onChange = (event,selectedOption,reason) => {
    if (selectedOption.inputValue) {
      props.onChange({ label: selectedOption.inputValue, value: null })
    } else {
      props.onChange(selectedOption)
    }
  }

  return (
    <Autocomplete
      freeSolo
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      value={value}
      autoComplete
      blurOnSelect
      open={open}
      onOpen={() => { setOpen(true) }}
      onClose={() => { setOpen(false) }}
      onChange={onChange}
      onInputChange={(event, newInputValue, reason) => {
        setDelay(clearTimeout(delayTimer))
        if (reason === 'input') {
          setDelay(setTimeout(function() {
            props.onType(newInputValue)
          }, 300))
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params)
        if (params.inputValue !== '') {
          filtered.push({
            label: `Add "${params.inputValue}"`,
            inputValue: params.inputValue
          })
        }
        return filtered
      }}
      getOptionSelected={(option, value) => option.value === value.value}
      getOptionLabel={option => option.label}
      renderOption={option => option.label}
      options={options}
      loading={props.loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label={props.label}
          InputProps={ {
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {props.loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          } }
        />
      )}
    />
  )
}

export default AptugoAutocomplete
