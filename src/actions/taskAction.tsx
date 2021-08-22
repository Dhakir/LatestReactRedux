import { Task } from '../interfaces/task'
import { TaskType } from '../interfaces/taskType'

let addTask = (taskName:string)=> {
    var task=new Task();
    task.taskId=0;
    task.taskName=taskName;
    task.type=TaskType.Add;
    return task;
}

let deleteTask = (taskId:number)=> {
    var task=new Task();
    task.taskId=taskId;
    task.type=TaskType.Delete;
    return task;
}


export { addTask, deleteTask }