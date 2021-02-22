/*
path: KanbanBoard.tpl
type: file
unique_id: glsvuPHA
icon: ico-kanban-board
options:
  - name: Columns
    display: Columns
    type: text
    options: ''
  - name: ColumnName
    display: Column Name
    type: text
    options: ''
  - name: Subtitle
    display: Subtitle
    type: text
    options: ''
  - name: className
    display: ClassName
    type: text
    options: ''
  - name: RowData
    display: Row Data
    type: text
    options: ''
  - name: matchCondition
    display: Match Condition
    type: text
    options: ''
  - name: classNameList
    display: ClassName (list)
    type: text
    options: ''
  - name: onDrop
    display: On Drop
    type: text
    options: ''
  - name: data
    display: Data
    type: dropdown
    options: >-
      return aptugo.store.getState().application.tables.map(({ unique_id, name
      }) => [unique_id, name])
  - name: addRecords
    display: Add Records
    type: text
    options: ''
  - name: columnHeaderColor
    display: Column Header Color
    type: text
    options: ''
sourceType: javascript
settings:
  - name: Packages
    value: |
      "react-dnd": "latest",
      "react-dnd-html5-backend": "latest",
children: []
*/
{% if data %}{% set table = data | tableData %}{% else %}{% set table = element.values.data | tableData %}{% endif %}
{% if element.values.addRecords %}
{% set bpr %}
import Button from '@material-ui/core/Button'
{% endset %}
{{ save_delayed('bpr', bpr ) }}
{% set bpr %}
import AddIcon from '@material-ui/icons/Add'
{% endset %}
{{ save_delayed('bpr', bpr ) }}
{% endif %}
{% set bpr %}
import { useDispatch } from 'react-redux'
{% endset %}
{{ save_delayed('bpr', bpr ) }}
{% set bpr %}
import { edit{{ table.name | friendly | capitalize }} } from '../store/actions/{{ table.name | friendly | lower }}Actions'
{% endset %}
{{ save_delayed('bpr', bpr ) }}
{% set bpr %}
import clsx from 'clsx'
{% endset %}
{{ save_delayed('bpr',bpr) }}
{% set bpr %}
import { DndProvider, useDrop, useDrag, DropTargetMonitor, DragSourceMonitor } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
{% endset %}
{{ save_delayed('bpr',bpr) }}
{% set ph %}
const KanbanColumn = ({ channel, children }) => {
    const ref = React.useRef(null)
    const [{ isOver }, drop] = useDrop({
      accept: 'card',
      drop(item: any) {
        {{ element.values.onDrop | raw }}
      },
      collect: (monitor) => ({
        isOver: monitor.isOver()
      })
    })
    drop(ref)
    return <div ref={ref} className={clsx(isOver && classes.over)} >{children}</div>
  }

const KanbanItem = ({ item, children }) => {
    const ref = React.useRef(null)
    const [{ isDragging }, drag] = useDrag({
      item: { type: 'card', item },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    })

    const opacity = isDragging ? 0 : 1
    drag(ref)
    return (
      <div ref={ref} className={classes.item} style={ { opacity } }>
        {children}
      </div>
    )
  }
{% endset %}
{{ save_delayed('ph',ph) }}
<DndProvider backend={HTML5Backend}>       
<div className={clsx(classes.kanban {% if element.values.className %}, {{ element.values.className }}{% endif %})}>
{ {{ element.values.Columns }}.map((columnItem, columnIndex) => {
    return (
      <KanbanColumn channel={columnItem} key={columnIndex} >
          <div {% if element.values.columnHeaderColor %}style={ { backgroundColor: {{ element.values.columnHeaderColor }} } }{% endif %}>
            <div className='kanbanHeader'>{{ element.values.ColumnName }}{% if element.values.Subtitle %}<span>{{ element.values.Subtitle }}</span>{% endif %}</div>
            <svg width="10" height="56"><path d="M1 0l8 28-8 28"></path></svg>
          </div>
          <div className={clsx(classes.list {% if element.values.classNameList %}, {{ element.values.classNameList }}{% endif %})}>
            { {{ element.values.RowData }}.map((rowItem, rowIndex) => {
              if ({{ element.values.matchCondition }}) {
                return (
                  <KanbanItem key={rowIndex} item={rowItem}>
                    {{ content | raw }}
                  </KanbanItem>
                )
              }
            })}
            {% if element.values.addRecords %}
            <Button onClickCapture={() => { {{ element.values.addRecords }} }}>
              <AddIcon />
            </Button>
            {% endif %}
          </div>
      </KanbanColumn>
    )
})}
</div>
</DndProvider>