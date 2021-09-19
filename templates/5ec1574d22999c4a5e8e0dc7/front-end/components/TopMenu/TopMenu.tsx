/*
path: TopMenu.tsx
completePath: front-end/components/TopMenu/TopMenu.tsx
unique_id: 4yBozeZw
*/
import React, { FunctionComponent } from 'react'
import Button from '@mui/material/Button'
import { NavLink } from 'react-router-dom'
import clsx from 'clsx'

import classes from './topmenu.module.scss'

interface menuItemProps {
  text: string,
  link?: string,
  isSubMenu?: boolean
}

interface topMenuProps {
  className?: any
}

export const AptugoMenuItem: FunctionComponent<menuItemProps> = (props) => {
  const [isOpen, setOpen] = React.useState(false)

  let component = <div><Button>{props.text}</Button></div>
  if (props.link) {
    if (props.link.substr(0,4).toLowerCase() === 'http') {
      component = <a href={props.link}><Button>{props.text}</Button></a>
    } else {
      component = <NavLink to={props.link}><Button>{props.text}</Button></NavLink>    
    }
    
  }

  if (props.isSubMenu) {
    return component
  } else {
    return (
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className={isOpen ? classes.selectedItem : undefined}
      >
        {component}
        {props.children &&
          <div className={classes.subMenu}>
            {React.Children.map(props.children, (child: any) => React.cloneElement(child,{ isSubMenu: true }) )}
          </div>
        }
      </div>
    )
  }
}

const AptugoTopMenu: FunctionComponent<topMenuProps> = (props) => {
  const [isOpen, setOpen] = React.useState(false)

  const switchMenuView = () => {
    setOpen(!isOpen)
  }

  return (
    <div className={clsx(classes.menu,props.className)}>
      <div className={'actioner'} onClickCapture={switchMenuView}></div>
      <div className={clsx('menu', isOpen && 'isOpen')}>{props.children}</div>
    </div>
  )
}

export default AptugoTopMenu
