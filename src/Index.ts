import { data } from "./Data";
import TodoCollection from "./TodoCollection";
import TodoItem from "./TodoItem";

// const sampleTodos:TodoItem[]=data.map(
//     (item,index)=>new TodoItem(item.id, item.task, item.complete)
// )
// const myTodoCollection=new TodoCollection("YJJ",sampleTodos)
 

// console.log(`${myTodoCollection.userName}`)
// myTodoCollection.getTodoById(1)?.printDetails()
// myTodoCollection.addTodo("집에가기")
// myTodoCollection.markComplete(3,true)
// myTodoCollection.todoItems.map((item)=>item.printDetails())


 //타입 스크립트 기본
//기본
 let bool:boolean=false
 let str:string = "str"
 let number:number=1
//리스트
 let list : number[]=[1,2,3]
 let strList :string[]=["1","2","3"]
//튜플
 let x:[string,number]
 x=["1",1] //성공
//  x=[1,"1"] //실패
//이후 배열처럼 접근하여 문자열 함수같은  관련된 기능을 쓸 수있다.

//열거
enum Color {Red,Green,Blue}
let c:number=Color.Blue //2
let a:string=Color[2] //blue
console.log(a)

//Any는 어떠한 값도 들어올수 있는 타입
//void는 함수의 반환값이 없을떄 사용한다.

//object는 오브잭트 타입을 말한다
const name=(obj:object|any):void=>{
    console.log(obj.ccf)
}

name({ccf:"dasdd"})

//타입 단언
let someValue:any="this is a string"
//someValue의 타입은 any이고 들어온값은 string이다
//때문에 string 함수를 사용하기위해  someValue를 string이라고 단언(프로그래머가 단언) 하여 함수(length)를 쓸수 있도록한다. (단언을 안하고 해도 상관없지만 그렇게되면 관련된 기능을 자동완성 할 수 없다. )

let strLength:number=(<string>someValue).length  //혹은 let strLength:number(someValue as string).length 으로 as 으로 사용 할 수있다.

console.log(strLength)

//인터페이스 타입검사를 위한 강력한 도구 
//아래의 경우를
const printLabel=(lableObj:{label:string})=>{
    console.log(lableObj.label)
}
const myObj={size:10,label:"size 10 object"}

printLabel(myObj)
//인터페이스를 이용하면

interface LabeledValue{
    label:string
}
// 다음과같이 파라미터의 타입을 정해 줄 수있다.
const printLabel1=(myObj:LabeledValue)=>{
    console.log(myObj.label)
}
printLabel1(myObj)

//선택적 프로퍼티(optional properties) 모든 프로퍼티가 필요한 것은 아니ㅣ 선택적으로 받을 수 있는 프로퍼티는 ?를 붙여준다.
interface SquareConfig{
    color?:string,
    width?:number
}
interface returnType{
    color:string,
    area:number
}
const createSqure=(config:SquareConfig):returnType=>{
    let newSqure:returnType={color:"",area:0}
    if(config.color){
        newSqure.color=config.color
    }
    if(config.width){
        newSqure.area=config.width*config.width
    }
    
    return newSqure
}
//여기서 항상 파라미터에 모든 프로퍼티를 포함할 필요가없다
console.log(createSqure({color:'white'}))



