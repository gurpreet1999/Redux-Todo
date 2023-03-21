import { combineReducers } from 'redux'
import filtersReducer from './filterSlice'
import todosReducer from './todoSlice'

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  todos: todosReducer,
  filters: filtersReducer
})

export default rootReducer