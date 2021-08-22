import { Task } from '../interfaces/task'
let apiMiddleWare = (store:any) => (next:any) => (action:any)=>
{
    var actionParam:any=JSON.parse(JSON.stringify(action))
    next(actionParam);
}
export default apiMiddleWare;