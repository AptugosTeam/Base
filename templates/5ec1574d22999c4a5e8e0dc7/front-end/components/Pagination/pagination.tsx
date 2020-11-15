import React, { FunctionComponent, ReactChild } from 'react'
import Button from '@material-ui/core/Button'

import classes from './pagination.module.scss'

interface paginationProps {
  currentPage: number
  setPage: Function
  totalItems: number
  itemsPerPage: number
}

const Pagination: FunctionComponent<paginationProps> = (props) => {
  return (
    <div className={classes.prevnext}>
      {props.currentPage > 0 && (
        <Button
          onClickCapture={(params) => {
            props.setPage(props.currentPage - 1)
          }}
        >Previous
        </Button>
      )}
      {props.totalItems > props.currentPage * props.itemsPerPage && (
        <Button
          onClickCapture={(params) => {
            props.setPage(props.currentPage + 1)
          }}
        >Next
        </Button>
      )}
    </div>
  )
} 

export default Pagination