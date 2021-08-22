import * as React from 'react'
import { AddDeleteComponentProps } from '../interfaces/addDeleteComponentProps'


export default class AddDeleteComponent extends React.Component<AddDeleteComponentProps> {
    constructor(props:any) {
      super(props);

      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.props.TaskClick();
    }
  
    render() {
      return (
        
        <li onClick={this.handleClick}>
          {this.props.TaskName}
        </li>
      );
    }
  }