/*
path: index.tsx
completePath: front-end/store/epics/index.tsx
unique_id: 2yDQTtLe
*/

import { combineEpics, createEpicMiddleware } from 'redux-observable'
{% for table in application.tables %}
import {{ table.name | friendly | lower }}Epics from './{{ table.name | friendly | lower }}Epics'
{% endfor %}
import { IState } from '../reducers'
import { Action } from 'redux'

export const rootEpic = combineEpics(
{% for table in application.tables %}
  {{ table.name | friendly | lower }}Epics,
{% endfor %})

export function buildFormData(formData:any, data:any, parentKey:any = null) {
  Object.keys(data).forEach((key) => {
    if (data[key]) {
      let savekey = key
      if (parentKey) savekey = `${parentKey}___${key}`
      let value = data[key] == null ? '' : data[key]
      if (typeof data[key] === 'object' && data[key].uri) {
        formData.append(savekey, value)
      } else if (typeof data[key] === 'object') {
        buildFormData(formData, data[key], savekey)  
      } else {
        formData.append(savekey, value)
      }
    }
  })
}

export default createEpicMiddleware<Action, Action, IState>();