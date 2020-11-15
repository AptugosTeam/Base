import React, { FunctionComponent } from 'react'

import styles from './table.module.scss'

interface fieldProps {
  value: string | Function;
}

const AptugoField: FunctionComponent<fieldProps> = (props) => {
  return <div className={styles.tableField}>{props.value}</div>
}

export default AptugoField
