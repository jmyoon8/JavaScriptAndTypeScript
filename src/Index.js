"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//npm install typescript -g
//npm install concurrnetly -g
//npm install nodemon -g
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
let bool = false;
let str = "str";
let number = 1;
//리스트
let list = [1, 2, 3];
let strList = ["1", "2", "3"];
//튜플
let x;
x = ["1", 1]; //성공
//  x=[1,"1"] //실패
//이후 배열처럼 접근하여 문자열 함수같은  관련된 기능을 쓸 수있다.
//열거
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Blue; //2
let a = Color[2]; //blue
console.log(a);
//Any는 어떠한 값도 들어올수 있는 타입
//void는 함수의 반환값이 없을떄 사용한다.
//object는 오브잭트 타입을 말한다 사실 이방법보단 인터페이스를 활용하여  프로퍼티를 명시하는게 더 좋다
const name = (obj) => {
    console.log(obj.ccf);
};
name({ ccf: "dasdd" });
//타입 단언
let someValue = "this is a string";
//someValue의 타입은 any이고 들어온값은 string이다
//때문에 string 함수를 사용하기위해  someValue를 string이라고 단언(프로그래머가 단언) 하여 함수(length)를 쓸수 있도록한다. (단언을 안하고 해도 상관없지만 그렇게되면 관련된 기능을 자동완성 할 수 없다. )
let strLength = someValue.length; //혹은 let strLength1:number=(someValue as string).length //으로 as 으로 사용 할 수있다.
console.log(strLength);
//인터페이스 타입검사를 위한 강력한 도구 
//아래의 경우를
const printLabel = (lableObj) => {
    console.log(lableObj.label);
};
const myObj = { size: 10, label: "size 10 object" };
printLabel(myObj);
// 다음과같이 파라미터의 타입을 정해 줄 수있다.
const printLabel1 = (myObj) => {
    console.log(myObj.label);
};
printLabel1(myObj);
const createSqure = (config) => {
    let newSqure = { color: "", area: 0 };
    if (config.color) {
        newSqure.color = config.color;
    }
    if (config.width) {
        newSqure.area = config.width * config.width;
    }
    console.log(newSqure);
    return newSqure;
};
//여기서 항상 파라미터에 모든 프로퍼티를 포함할 필요가없다
console.log(createSqure({ color: 'white' }));
let p1 = { x: 1000, y: 2000 };
// p1.x=1000 결과는 에러 realonly속성은 처음 할당됨 값이외에 값이 들어올경우 타입에러방생
//마찬가지로 array도 이처럼 리드온니 타입을 재공한다
let ab = [1, 2, 3, 4];
let ra = ab;
// ra[0]=2 처음 할당된 array의 인덱스는 변경 불가능 때문에 인덱스가 바뀌는 배열함수는 사용 불가능
ab = ra; //하지만 타입 단언으로 오버라이드 가능
console.log(ab);
//초과 프로퍼티 검사 : 기본적으로 typescript는 인터페이스에 없는 프로퍼티가 들어온다면 에러를 발생시키지만 타입단언으로 에러를 발생시키지 않을 수 있다
//아래처럼 파라미터 타입과 다른 프로퍼티가 파라미터로 들어온다면 에러를 발생시키지만 타입단어를 통해 에러를 피해 갈 수 있다 (원래는 color이 들어가야한다)
createSqure({ colour: 'red', width: 100 });
//하지만 더 좋은 방법은 문자열 인덱스 서명(인덱스 시그니처)을 추가하는것이 더 나은 방법 입니다 80줄로가보자(80줄에 [props:string]:any)
createSqure({ colour: 1, width: 100 });
//초과 프로퍼티 검사를 피할 수 있는 마지막 방법은 JSON을 변수에 할당하여 피하는방법이다
let s = { colour: "22", width: 200 };
createSqure(s);
let myFunc = (param1, param2) => {
    let search = param1.search(param2);
    return search > -1;
};
console.log(myFunc("123", "4"));
let myArray = ["Bob", "Fred"];
let myStr = myArray[0];
let info = {
    id: 'sksk',
    pass: 1234
};
//json으로 표현
let hy = {
    interval: 1,
    reset: (number, string) => {
        console.log(number, string);
    }
};
hy.reset(1, "d");
hy.interval = 1;
//function으로 표현
const value = () => {
    let hy = {
        interval: 1,
        reset: (number, string) => {
            console.log(number, string);
        }
    };
    return hy;
};
value().reset(1, "d");
console.log(value());
///////function 의 기본형 void는 펑션의 리턴값이 없을떄 사용한다; 
//파라미터에 ?를 주어 optional하게 파라미터를 받을 수 있다.(파라미터를 뒤에부터 입력해야한다.) 옵셔널을 넣을경우 이니셜라이져를 사용 할 수 없다.
/////중요!!!! optional 하게 타입을 지정할경우 반듯이 if나 삼항식으로 으로 분기처리를 해야한다 안할경우 에러남
const func = (number = 1, string) => {
    string ? string = string : string = "";
    return number + string;
};
//이니셜 라이져를 사용할경우 undefined를 넣으면 이니셜라이져의 값이 나온다
console.log(func(undefined, "dd")); //
//여러가지 변수를 받을때 (...arg)
const argfunc = (param1, ...arg) => {
    return param1 + ' ' + arg.join(' ');
};
console.log(argfunc("111", "111", "111", "111"));
// let string:Easing="4" 에러발생
const literal = (string) => {
    // string='' 여기서 ''안에서 리터럴 타입만 자동완성이 뜬다 개꿀!
    if (string === "1") {
    }
    else if (string === "2") {
    }
    else if (string === "3") {
    }
    else {
    }
};
let sa = { string: '1', num: 1 };
//유니언 타입 이미 존재하는 타입이나 인터페이스를 결합하는 방법
const left = (value, padding) => {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(" ") + value;
    }
    else if (typeof padding === 'string') {
        return padding + value;
    }
    // throw new Error('ddddd')
};
console.log(left("dd", 4));
console.log(left("dd", "4"));
let letgo = {
    let: "1",
    go: '1',
    out: '1'
};
letgo.let;
const state = (state) => {
    switch (state.state) {
        case '1':
            return '1';
        case '2':
            return '2';
        case '3':
            return '3';
    }
};
console.log(state({ state: '1' }));
let test;
test = {
    artists: [{ name: 'ddd' }],
    success: false,
    error: { message: 'asd' }
};
//인터페이스는 여러가지 인터페이스를 implement 할수 없지만 type은 교차타입으로 다 합칠 수 있따
const handleArtistsResponse = (response) => {
    response.artists;
    response.error;
    response.success;
    if (response.error) {
        console.error(response.error.message);
        return;
    }
};
//정리 유니온타입은 |으로 연결된 타입/인터페이스의 공통된 프로퍼티만 접근이 가능하며 만약 공통된 부분이 리터럴 타입이면 리터럴 타입들이 합쳐진다
//    교차타입 &으로 연결된 타입/인터페이스의 모든 프로퍼티에 접근이 가능하다
//enum
//이넘에 숫자를 초기화하면 그다음 프로퍼티는 자도으로 ++하여 숫자가 먹여진다 중간에 숫자를 먹이면 그전까진 0부터 먹여지다가 숫자를 먹인 다음부터 다시++되어 먹여진다
var numbers;
(function (numbers) {
    numbers[numbers["Up"] = 0] = "Up";
    numbers[numbers["Down"] = 1] = "Down";
    numbers[numbers["Left"] = 4] = "Left";
    numbers[numbers["Right"] = 5] = "Right";
})(numbers || (numbers = {}));
console.log(numbers);
/*
위에 이넘을 찍어보면
{
  '1': 'Up',
  '2': 'Down',
  '3': 'Left',
  '4': 'Right',
  Up: 1,
  Down: 2,
  Left: 3,
  Right: 4
}
으로나온다
*/
//사용법
const respond = (number) => {
    return number;
};
console.log(respond(numbers.Down));
//문자 열거형
var strings;
(function (strings) {
    strings["Up"] = "UP";
    strings["Down"] = "DOWN";
    strings["Left"] = "LEFT";
    strings["Right"] = "RIGHT";
})(strings || (strings = {}));
//숫자대신 stirng을 넣어 직렬화한다.
console.log(strings);
//제너릭을 이용하면 유연하게 타입을 받아서 지정할 수 있다 즉  사용할 타입을 나중에 지정하겠다는것
const generic = (arg) => {
    return arg;
};
generic(1);
let gen = {
    // gen<T>(arg:T):T{
    //     console.log(arg)
    //     return arg
    // },
    gen: (arg) => {
        console.log(arg);
        return arg;
    }
};
gen.gen(1);
//제네릭 제약조건에서 타입 매개변수 제약된 타입으로 제너릭을 선언 할 수있다 (제약된 타입이랑 아래와 같이 설명한다)
//T의 타입이 만약 오브잭트일경우 K의 타입을 T의 키로만 강재할수있다
const getProperty = (obj, key) => {
    console.log(obj[key]);
};
//없는 키값이면(ex 'c') 에러발생
getProperty({ a: 1, b: 2 }, 'a');
