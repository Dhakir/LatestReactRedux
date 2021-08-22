import { combineReducers } from 'redux'
import { addDeleteTask } from './addDeleteTask'

const rootReducer=combineReducers({
    tasks:addDeleteTask
})

export default rootReducer;