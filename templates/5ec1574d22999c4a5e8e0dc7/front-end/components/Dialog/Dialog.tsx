import React, { useState, FunctionComponent } from 'react'

// @material-ui/core components
import AddIcon from '@material-ui/icons/Add'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import IconButton from '@material-ui/core/IconButton'
import Switch from '@material-ui/core/Switch'
import Tooltip from '@material-ui/core/Tooltip'

interface addDialogProps {
  isOpen: boolean,
  onOpen: VoidFunction,
  onClose: VoidFunction,
  title: string,
  text?: string,
  button: string,
  saveDataHandler: Function,
  color: 'warning' | 'primary' | 'danger' | 'success' | 'info' | 'rose' | 'gray',
  data: any,
  initialData: any,
  setData: Function,
  allowMultipleSubmit: boolean,
  hideButton?: boolean
}

const AddDialog: FunctionComponent<addDialogProps> = (props) => {
  const {
    isOpen,
    onOpen,
    onClose,
    title,
    text,
    button,
    saveDataHandler,
    color,
    data,
    initialData,
    setData,
    allowMultipleSubmit,
    hideButton
  } = props
  
  const [switchState, setSwitchState] = useState({ addMultiple: false })
  
  const handleSwitchChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setSwitchState({ ...switchState, [name]: event.target.checked })
  }

  const resetSwitch = () => {
    setSwitchState({ addMultiple: false })
  }

  const handleClose = () => {
    resetSwitch()
    setData(initialData)
    onClose()
  }

  const handleSubmit = () => {
    saveDataHandler(data)
    setData(initialData)
    !switchState.addMultiple && handleClose()
  }

  return (
    <React.Fragment>
      {!hideButton &&
        <Tooltip title={title}>
          <IconButton aria-label={title} onClick={onOpen} className={color}>
            <AddIcon />
          </IconButton>
        </Tooltip>
      }
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{text}</DialogContentText>
          {props.children}
        </DialogContent>
        <DialogActions>
          {allowMultipleSubmit &&
            <Tooltip title="Add multiple">
              <Switch
                checked={switchState.addMultiple}
                onChange={handleSwitchChange('addMultiple')}
                value="addMultiple"
                inputProps={ { 'aria-label': 'secondary checkbox' } }
              />
            </Tooltip>
          }
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            {button}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}

export default AddDialog
