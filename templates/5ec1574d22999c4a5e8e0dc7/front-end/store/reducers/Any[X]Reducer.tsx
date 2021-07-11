import produce from 'immer'
import { ApiStatus, Ipaginated{{ table.name | friendly | capitalize }}, I{{ table.name | friendly | capitalize }}Item } from '../models'
import { {{ table.name | friendly | capitalize }}Action, {{ table.name | friendly | capitalize }}ActionTypes } from '../actions/{{ table.name | friendly | lower }}Actions'

export const initial{{ table.name | friendly | capitalize }}State: I{{ table.name | friendly | capitalize }}State = {
  loadingStatus: ApiStatus.NOTLOADED,
  addingStatus: ApiStatus.NOTLOADED,
  searchingStatus: ApiStatus.NOTLOADED,
  searchString: '',
  {{ table.name | friendly | lower }}: [],
  found{{ table.name | friendly | lower }}: [],
  totalDocs: 0,
  errMessage: '',
  errStatus: null,
  errField: null
}

export default function {{ table.name | friendly | lower }}Reducer(state: I{{ table.name | friendly | capitalize }}State = initial{{ table.name | friendly | capitalize }}State, action: {{ table.name | friendly | capitalize }}Action) {
  return produce(state, draft => {
    switch (action.type) {
      case {{ table.name | friendly | capitalize }}ActionTypes.SEARCH_{{ table.name | friendly | upper }}:
        draft.searchString = action.searchOptions.searchString
        break
      case {{ table.name | friendly | capitalize }}ActionTypes.SEARCHING_{{ table.name | friendly | upper }}:
        draft.searchingStatus = ApiStatus.LOADING
        break

      case {{ table.name | friendly | capitalize }}ActionTypes.SEARCHING_{{ table.name | friendly | upper }}_FAILED:
        draft.searchingStatus = ApiStatus.FAILED
        break

      case {{ table.name | friendly | capitalize }}ActionTypes.FOUND_{{ table.name | friendly | upper }}:
        draft.searchingStatus = ApiStatus.LOADED
        action.keep ? draft.found{{ table.name | friendly | lower }}.push(...action.payload.{{ table.name | friendly | lower }}.docs) : draft.found{{ table.name | friendly | lower }} = action.payload.{{ table.name | friendly | lower }}.docs
        draft.totalDocs = action.payload.{{ table.name | friendly | lower }}.totalDocs
        break
        
      case {{ table.name | friendly | capitalize }}ActionTypes.LOAD_{{ table.name | friendly | upper }}:
      case {{ table.name | friendly | capitalize }}ActionTypes.LOADING_{{ table.name | friendly | upper }}:
        draft.loadingStatus = ApiStatus.LOADING
        break

      case {{ table.name | friendly | capitalize }}ActionTypes.LOADING_{{ table.name | friendly | upper }}_FAILED:
        draft.loadingStatus = ApiStatus.FAILED
        break

      case {{ table.name | friendly | capitalize }}ActionTypes.LOADED_{{ table.name | friendly | upper }}:
        draft.loadingStatus = ApiStatus.LOADED
        draft.{{ table.name | friendly | lower }} = action.payload.{{ table.name | friendly | lower }}.docs
        draft.totalDocs = action.payload.{{ table.name | friendly | lower }}.totalDocs
        break

      case {{ table.name | friendly | capitalize }}ActionTypes.ADD_{{ table.name | friendly | upper }}:
      case {{ table.name | friendly | capitalize }}ActionTypes.ADDING_{{ table.name | friendly | upper }}:
        draft.addingStatus = ApiStatus.LOADING
        draft.errMessage = ''
        draft.errStatus = null
        draft.errField = null
        break

      case {{ table.name | friendly | capitalize }}ActionTypes.ADDING_{{ table.name | friendly | upper }}_FAILED:
        draft.addingStatus = ApiStatus.FAILED
        draft.errMessage = action.message
        draft.errStatus = action.status
        draft.errField = action.field
        break

      case {{ table.name | friendly | capitalize }}ActionTypes.ADDED_{{ table.name | friendly | upper }}:
        draft.addingStatus = ApiStatus.LOADED
        draft.errStatus = 200
        draft.{{ table.name | friendly | lower }}.push(action.payload.{{ table.name | friendly | lower }}.docs[0])
        if (draft.searchString) draft.found{{ table.name | friendly | lower }}.push(action.payload.{{ table.name | friendly | lower }}.docs[0])
        break
        
      case {{ table.name | friendly | capitalize }}ActionTypes.REMOVE_{{ table.singleName | friendly | upper }}:
        draft.{{ table.name | friendly | lower }}.splice(draft.{{ table.name | friendly | lower }}.findIndex({{ table.singleName | friendly | lower }} => {{ table.singleName | friendly | lower }}._id === action.payload._id), 1)
        break
        
      case {{ table.name | friendly | capitalize }}ActionTypes.EDIT_{{ table.name | friendly | upper }}:
        draft.{{ table.name | friendly | lower }}[draft.{{ table.name | friendly | lower }}.findIndex(
          ({{ table.singleName | friendly | lower }}) => {{ table.singleName | friendly | lower }}._id === action.payload._id)] = action.payload
        break
        
      case {{ table.name | friendly | capitalize }}ActionTypes.EDITED_{{ table.name | friendly | upper }}:
        draft.{{ table.name | friendly | lower }}[draft.{{ table.name | friendly | lower }}.findIndex(
          ({{ table.singleName | friendly | lower }}) => {{ table.singleName | friendly | lower }}._id === action.payload._id)] = action.payload
        draft.found{{ table.name | friendly | lower }}[draft.found{{ table.name | friendly | lower }}.findIndex(
          ({{ table.singleName | friendly | lower }}) => {{ table.singleName | friendly | lower }}._id === action.payload._id)] = action.payload
        break
    }
  })
}

export interface I{{ table.name | friendly | capitalize }}State {
  loadingStatus: ApiStatus
  addingStatus: ApiStatus
  searchingStatus: ApiStatus
  searchString: string
  {{ table.name | friendly | lower }}: I{{ table.name | friendly | capitalize }}Item[]
  found{{ table.name | friendly | lower }}: I{{ table.name | friendly | capitalize }}Item[]
  totalDocs: number
  errMessage?: string
  errStatus?: number
  errField?: string
}