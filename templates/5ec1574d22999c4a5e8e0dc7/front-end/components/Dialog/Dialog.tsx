/*
path: Dialog.tsx
completePath: front-end/components/Dialog/Dialog.tsx
unique_id: uZJ3fdwZ
*/
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Switch from '@mui/material/Switch'
import Tooltip from '@mui/material/Tooltip'
import AddIcon from '@mui/icons-material/Add'
import Fab from '@mui/material/Fab';
import React, { FunctionComponent, useState } from 'react'

interface addDialogProps {
  isOpen: boolean
  onOpen: VoidFunction
  onSave?: VoidFunction
  onClose?: VoidFunction
  title: string
  text?: string
  button: string
  saveDataHandler: Function
  color: "primary" | "inherit" | "secondary" | "default"
  data: any
  initialData: any
  setData: Function
  allowMultipleSubmit: boolean
  hideButton?: boolean
}

const AddDialog: FunctionComponent<addDialogProps> = (props) => {
  const { isOpen, onOpen, onSave, onClose, title, text, button, saveDataHandler, color, data, initialData, setData, allowMultipleSubmit, hideButton } = props

  const [switchState, setSwitchState] = useState({ addMultiple: false })

  const handleSwitchChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setSwitchState({ ...switchState, [name]: event.target.checked })
  }

  const resetSwitch = () => {
    setSwitchState({ addMultiple: false })
  }

  const handleClose = () => {
    if (onSave) {
      resetSwitch()
      setData(initialData)
    }
    onClose()
  }

  const handleSubmit = () => {
    saveDataHandler(data)
    setData(initialData)
    if (onSave) !switchState.addMultiple && handleClose()
  }

  return (
    <React.Fragment>
      {!hideButton && (
        <Tooltip title={title}>
          <Fab aria-label={title} color={color} onClick={onOpen}>
            <AddIcon />
          </Fab>
        </Tooltip>
      )}
      <Dialog disableEnforceFocus open={isOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{text}</DialogContentText>
          {props.children}
        </DialogContent>
        <DialogActions>
          {allowMultipleSubmit && (
            <Tooltip title="Add multiple">
              <Switch
                checked={switchState.addMultiple}
                onChange={handleSwitchChange('addMultiple')}
                value="addMultiple"
                inputProps={ { 'aria-label': 'secondary checkbox' } }
              />
            </Tooltip>
          )}
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
