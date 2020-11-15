import React, { FunctionComponent } from 'react'
import clsx from 'clsx'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import classes from './sidebar.module.scss'

interface sidebarProps {
  handleDrawerToggle?: VoidFunction
  open: boolean
  color: string
}

const Sidebar: FunctionComponent<sidebarProps> = (props) => {
  const localClasses = {
    [classes.drawerOpen]: props.open,
    [classes.drawerClose]: !props.open,
    [classes[`color${props.color}`]]: true
  }

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, localClasses)}
      classes={ {
        paper: clsx(localClasses),
      } }
    >
      {props.children}
    </Drawer>
  )
}

export default Sidebar