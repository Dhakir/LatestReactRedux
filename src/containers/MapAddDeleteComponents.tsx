import { connect } from 'react-redux'
import { addTask  } from '../actions/taskAction'
import { AddDeleteComponentList } from '../components/addDeleteComponentList'

export default connect(
  (state:any) => {
    console.log(state);
    return {Tasks: state.tasks}
  },
  (dispatch:any) => {
    return {
      dispatchMethod: (taskName:any)=>dispatch(addTask(taskName))
    }
  }
)(AddDeleteComponentList)