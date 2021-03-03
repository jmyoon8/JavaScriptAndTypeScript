import TodoItem from "./TodoItem";

class TodoCollection{
    
    private nextId:number=1
    
                                                        //참조변수 배열 할당
    constructor(public userName:String, public todoItems:TodoItem[]=[]){
        //파라미터에 접근제어자가 있으면 변수 선언을 안해도된다.
        // this.todoItems=todoItems
        // this.userName=userName

    }
    //할일 찾기 //찾은 값이 없을 수도있으니 아이템 or undefinded를 지정
    getTodoById(id:number):TodoItem | undefined{
        //파라미터의 아이디를 갖는 TodoItem을 찾는다.
        return this.todoItems.find((item)=>item.id===id);
    }
    //할일추가
    addTodo(task:String) : number{
        //중복 id가 있다면 계속해서 nextId가 ++된다. 없다면 undefinded가 되므로 while 문은 멈춘다.
        while(this.getTodoById(this.nextId)){
            this.nextId++
        }
        this.todoItems.push(new TodoItem(this.nextId,task))
        //할일이 생긴 id를 리턴
        return this.nextId
    }
    //할일완료
    markComplete(id:number, complete:boolean):void{
        const todoItem=this.getTodoById(id);
        if(todoItem){
            todoItem.complete=complete;
        }
    }

}

export default TodoCollection