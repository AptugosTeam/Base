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
  if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File)) {
    Object.keys(data).forEach(key => {
      buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
    });
  } else {
    const value = data == null ? '' : data;

    formData.append(parentKey, value);
  }
}

export default createEpicMiddleware<Action, Action, IState>();