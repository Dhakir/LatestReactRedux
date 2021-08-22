import { Task } from '../interfaces/task'
import { TaskType } from '../interfaces/taskType'

let addDeleteTask = (state:any,action:any) =>
{
    switch(action.type)
    {
        case TaskType.Add:
                action.taskId=state.length+1;
                let result=[
                    ...state,
                    action
                ];
                return result;
                
        case TaskType.Delete:
                state.forEach((task:Task,index:number)=>
                {
                    if(task.taskId===action.taskId)
                    {
                        state.splice(index,1);
                    } 
                });
                return state;
            
        default:
                state=new Array<any>();
                return state;

    }
}

export { addDeleteTask } 