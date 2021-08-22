import React from 'react'
import AddDeleteComponent from './addDeleteComponent'
import { AddDeleteComponentListProps } from '../interfaces/addDeleteComponentListProps'

export interface ITask
{
  taskName:string;
}

export class AddDeleteComponentList extends React.Component<AddDeleteComponentListProps,ITask> {

  constructor(props:any)
  {
    super(props);
    this.state={
      taskName:''
    };
  }
  
  handleChange(event:any)
    {
      this.setState({taskName:event.target.value})
    }
  
    render() {
      return (
        <>
        <input type="text" value={this.state.taskName} onChange={e=>this.handleChange(e)} />
        <button onClick={()=>this.props.dispatchMethod(this.state.taskName)}>Test</button>
        <ul>
                {this.props.Tasks?this.props.Tasks.map((task:any) => (
                   <AddDeleteComponent key={task.taskId} TaskName={task.taskName} TaskId={task.taskId} TaskClick={()=>this.props.dispatchMethod(this.state.taskName)}   />
            )):<b>Unexpected Error</b>}
      </ul>
      </>
      );
    }
  }