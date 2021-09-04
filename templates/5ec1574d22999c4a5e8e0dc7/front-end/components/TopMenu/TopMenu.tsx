/*
path: TopMenu.tsx
completePath: front-end/components/TopMenu/TopMenu.tsx
unique_id: 4yBozeZw
*/
import React, { FunctionComponent } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { NavLink } from 'react-router-dom'
import clsx from 'clsx'

const styles = (theme: Theme) => createStyles({
  menu: {
    display: 'Flex',
    marginLeft: '3rem',
    '& > div .MuiButton-root:hover': {
      backgroundColor: 'inherit'
    },
    '& .MuiButton-root::after': {
      content: '""',
      position: 'absolute',
      bottom: '-1px',
      left: 0,
      width: 0,
      height: '3px',
      background: '#d10125',
      transition: '.33s all ease-out'
    }
  },
  subMenu: {
    position: 'absolute',
    background: 'white',
    opacity: 0,
    visibility: 'hidden',
    transform: 'translateY(30px)',
    overflow: 'hidden',
    transition: 'all 330ms ease-out 0ms',
    marginTop: '1rem',
    borderTop: '3px solid #d10125',
    padding: '1.5rem 2.2rem',
    '& a': {
      display: 'block'
    },
    '& .MuiButton-root': {
      color: '#9f9f9f',
      paddingRight: '1rem',
      transition: '.33s all ease-out',
      '&::before': {
        content: '">"',
        transition: '.33s all ease-out',
        width: 0,
        overflow: 'hidden'
      },
      '&:hover': {
        paddingRight: 0,
        '&::before': {
          width: '1rem'
        },
        color: '#d10125',
        backgroundColor: 'white'
      }
    },
  },
  selectedItem: {
    '& $subMenu': {
      opacity: 1,
      transform: 'translateY(0)',
      visibility: 'visible'
    },
    '& > .MuiButton-root, & > a > .MuiButton-root': {
      '&::after': {
        width: '100%',
      }
    }
  }
})
const useStyles = makeStyles(styles)

interface menuItemProps {
  text: string,
  link?: string,
  isSubMenu?: boolean
}

interface topMenuProps {
  className?: any
}

export const AptugoMenuItem: FunctionComponent<menuItemProps> = (props) => {
  const classes = useStyles()
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
  const classes = useStyles()
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
