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

export function buildFormData(formData, data, parentKey = null) {
  Object.keys(data).forEach((key) => {
    if (data[key]) {
      let savekey = key
      let value = data[key] == null ? '' : data[key]
      if (data[key] && typeof data[key] === 'object' && !(data[key] instanceof Date) && !(data[key] instanceof File)) {
        value = JSON.stringify(data[key])
      }

      if (data[key] && Array.isArray(data[key]) && data[key][0] instanceof File) {
        // handle array of filess
        Object.keys(data[key]).forEach((subkey) => {
          formData.append(`${savekey}[${subkey}]`, data[key][subkey])
        })
      } else {
        formData.append(savekey, value)
      }
    }
  })
}

export default createEpicMiddleware<Action, Action, IState>();