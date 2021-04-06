import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FormControl from '@material-ui/core/FormControl'
import IconButton from '@material-ui/core/IconButton'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import { makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import React, { FunctionComponent } from 'react'
import clsx from 'clsx'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    maxHeight: '48px',
    margin: '5px 5px 0 0',
  },
  media: {
    maxHeight: '48px',
  },
  input: {
    display: 'none',
  },
  button: {
    position: 'absolute',
    right: 0,
    top: '-8px',
  },
})

const AptugoImageUpload: FunctionComponent<any> = (props) => {
  const classes = useStyles()
  const [state, setState] = React.useState({
    uploading: false,
    file: null,
    selectedFile: null,
    fileName: props.value,
    accept: props.accept || 'image/*',
  })

  const handleUploadClick = (event) => {
    event.persist()
    const file = event.target.files[0]
    const reader = new FileReader()

    reader.onloadend = function (e) {
      setState({
        ...state,
        file: file,
        fileName: file.name,
        uploading: false,
        selectedFile: [reader.result],
      })

      props.onChange(event)
    }

    setState({
      ...state,
      uploading: true,
    })

    reader.readAsDataURL(file)
  }

  const imageResetHandler = () => {
    setState({
      ...state,
      selectedFile: null,
    })
  }

  const renderUploadedState = () => {
    if (!state.selectedFile && !state.fileName && !props.value) return null
    if (state.file && state.file.type === 'application/pdf') return <FontAwesomeIcon className={classes.image} icon={faFilePdf} />
    var src = state.selectedFile || `/img/${state.fileName}`
    if (!state.selectedFile && !state.fileName) {
      src = `/img/${props.value}`
    }
    return (
      <div className={classes.image} onClick={imageResetHandler}>
        <img className={classes.media} src={src} />
      </div>
    )
  }

  return (
    <div className={clsx(classes.root, props.className && props.className )}>
      {renderUploadedState()}
      <FormControl margin="dense" fullWidth variant={props.variant}>
        <InputLabel htmlFor="component-upload">{props.label}</InputLabel>
        <Input
          value={state.fileName || ''}
          id="component-upload"
          placeholder={props.placeholder || null}
          endAdornment={
            <label>
              <input accept={state.accept} className={classes.input} multiple type="file" onChange={handleUploadClick} />
              <IconButton component="span" className={classes.button} aria-label="Search">
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
