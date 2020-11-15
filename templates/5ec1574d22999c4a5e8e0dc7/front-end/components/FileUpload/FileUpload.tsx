import React, { FunctionComponent } from 'react'

import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: 'flex'
  },
  image: {
    maxHeight: '48px',
    margin: '5px 5px 0 0'
  },
  media: {
    maxHeight: '48px'
  },
  input: {
    display: 'none'
  },
  button: {
    position: 'absolute',
    right: 0,
    top: '-8px'
  }
})

const AptugoImageUpload: FunctionComponent<any> = (props) => {
  const classes = useStyles()
  const [state, setState] = React.useState({
    uploading: false,
    selectedFile: null,
    fileName: props.value
  })

  const handleUploadClick = (event) => {
    event.persist()
    const file = event.target.files[0]
    const reader = new FileReader()

    reader.onloadend = function(e) {
      setState({
        ...state,
        fileName: file.name,
        uploading: false,
        selectedFile: [reader.result]
      })

      props.onChange(event)
    }

    setState({
      ...state,
      uploading: true
    })
    
    reader.readAsDataURL(file)
  }

  const imageResetHandler = () => {
    setState({
      ...state,
      selectedFile: null
    })
  };

  const renderUploadedState = () => {
    return (
      <div className={classes.image} onClick={imageResetHandler}>
        <img
          className={classes.media}
          src={state.selectedFile || `/img/${state.fileName}`}
        />
      </div>
    )
  }

  return (
    <div className={classes.root}>
      {renderUploadedState()}
      <FormControl
        margin='dense'
        fullWidth
      >
        <InputLabel htmlFor="component-upload">{props.label}</InputLabel>
        <Input
          value={state.fileName || ''}
          id="component-upload"
          endAdornment={
            <label >
              <input
                accept="image/*"
                className={classes.input}
                multiple
                type="file"
                onChange={handleUploadClick}
              />
              <IconButton
                component='span'
                className={classes.button}
                aria-label="Search"
              >
                <SearchIcon />
              </IconButton>
            </label>
          }
        />
      </FormControl>
      
    </div>
  )
}

export default AptugoImageUpload
