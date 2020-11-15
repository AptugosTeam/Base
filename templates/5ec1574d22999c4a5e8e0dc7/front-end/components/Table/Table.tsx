import React, { FunctionComponent } from 'react'

import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'

import styles from './table.module.scss'

interface tableProps {
  addProcedure?: Function,
  addTitle?: string,
  addText?: string,
  tableData: Array<Array<string>>,
  tableHead: string[],
  tableHeaderColor: 'warning' | 'primary' | 'danger' | 'success' | 'info' | 'rose' | 'gray',
  title: string
}

const AptugoTable: FunctionComponent<tableProps> = (props) => {
  const RenderCells = (cellData: React.ReactNode[]) => {
    let children = [props.children]
    try {
      children = [...props.children as Array<any>]
    } catch(e) {}
    
    return children.map((child: any, index) => {
      let newProps: any = { ...child.props }
      
      for (const [key, value] of Object.entries(newProps)) { newProps[key] = typeof value === 'function' ? value(cellData): value }
      if (child.props.onClickCapture) newProps['onClickCapture'] = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => { child.props.onClickCapture({...e, element: cellData }) }

      newProps.children = React.Children.map(child.props.children, (subChild) => {
        let newSubProps: any = {}
        if (subChild.props.onClickCapture) newSubProps['onClickCapture'] = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => { subChild.props.onClickCapture({...e, element: cellData }) }
        return React.cloneElement(subChild, newSubProps)
      })
      
      const newChild = React.cloneElement(child, newProps)
      return <TableCell key={`child${index}`}>{newChild}</TableCell>
    })
  }

  return (
    <div className={styles.tableHolder}>
      <Table className={styles.table}>
        {props.tableHead !== undefined ? (
          <TableHead className={`${styles.tableHeader} ${props.tableHeaderColor}`}>
            <TableRow className={styles.tableHeadRow}>
              {props.tableHead.map((prop, key) => {
                return (
                  <TableCell
                    className={styles.tableCell + ' ' + styles.tableHeadCell}
                    key={key}
                  >
                    {prop}
                  </TableCell>
                )
              })}
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {props.tableData.map((row, key) => {
            const fields = Object.values(row)
            return (
              <TableRow key={key} className={styles.tableBodyRow}>
                {Array.isArray(props.children) ? RenderCells(row) : fields.map((field, subkey) => <TableCell className={styles.tableCell} key={subkey}>{field}</TableCell>)}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>      
    </div>
  )
}

export default AptugoTable
