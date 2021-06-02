import { data } from "./Data";
import TodoCollection from "./TodoCollection";
import TodoItem from "./TodoItem";

const sampleTodos:TodoItem[]=data.map(
    (item,index)=>new TodoItem(item.id, item.task, item.complete)
)
const myTodoCollection=new TodoCollection("YJJ",sampleTodos)
 
myTodoCollection.getTodoById(1)?.printDetails()
myTodoCollection.addTodo("집에가기")
myTodoCollection.markComplete(3,true)
myTodoCollection.todoItems.map((item)=>item.printDetails())

console.log(`${myTodoCollection.userName}`)

 