import { data } from "./Data";
import TodoCollection from "./TodoCollection";
import TodoItem from "./TodoItem";
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

//Type Alias와 Interface의 차이점
//Type Alias와 Interface를 살펴보았을 때 서로 대부분의 기능을 공유하고 있습니다. 언뜻 보면 ‘둘을 왜 구분해놓았을까?’ 라고 생각하실 수도 있습니다.
//그런데 둘의 큰 차이가 하나 있습니다. Interface는 선언 병합이 가능하지만, Type Alias는 그렇지 않습니다.
//Interface의 선언 병합
//Interface는 동일한 이름으로 여러 번 선언해도 컴파일 시점에 아래처럼 합칠 수 있습니다. 이런 동작을 선언 병합(Declaration Merging)이라고 합니다.

interface Window {
  title: string;
}

interface Window {
  ts: import("typescript");
}

declare function getWindow(): Window;

const window = getWindow();
const src = 'const a = "Hello World"';
window.ts.transpileModule(src, {});    // transpileModule() 메서드 사용 가능
//타입 스크립트 기본
//기본
let bool: boolean = false;
let str: string = "str";
let number: number = 1;
//리스트
let list: number[] = [1, 2, 3];
let strList: string[] = ["1", "2", "3"];
//튜플
let x: [string, number];
x = ["1", 1]; //성공
//  x=[1,"1"] //실패
//이후 배열처럼 접근하여 문자열 함수같은  관련된 기능을 쓸 수있다.

//열거
enum Color {
  Red,
  Green,
  Blue,
}
let c: number = Color.Blue; //2
let a: string = Color[2]; //blue
console.log(a);

//Any는 어떠한 값도 들어올수 있는 타입
//void는 함수의 반환값이 없을떄 사용한다.

//object는 오브잭트 타입을 말한다 사실 이방법보단 인터페이스를 활용하여  프로퍼티를 명시하는게 더 좋다
const name = (obj: object | any): void => {
  console.log(obj.ccf);
};

name({ ccf: "dasdd" });

//타입 단언
let someValue: any = "this is a string";
//someValue의 타입은 any이고 들어온값은 string이다
//때문에 string 함수를 사용하기위해  someValue를 string이라고 단언(프로그래머가 단언) 하여 함수(length)를 쓸수 있도록한다. (단언을 안하고 해도 상관없지만 그렇게되면 관련된 기능을 자동완성 할 수 없다. )

let strLength: number = (<string>someValue).length; //혹은 let strLength1:number=(someValue as string).length //으로 as 으로 사용 할 수있다.

console.log(strLength);

//인터페이스 타입검사를 위한 강력한 도구
//아래의 경우를
const printLabel = (lableObj: { label: string }) => {
  console.log(lableObj.label);
};
const myObj = { size: 10, label: "size 10 object" };

printLabel(myObj);
//인터페이스를 이용하면

interface LabeledValue {
  label: string;
}
// 다음과같이 파라미터의 타입을 정해 줄 수있다.
const printLabel1 = (myObj: LabeledValue) => {
  console.log(myObj.label);
};
printLabel1(myObj);

//선택적 프로퍼티(optional properties) 모든 프로퍼티가 필요한 것은 아니ㅣ 선택적으로 받을 수 있는 프로퍼티는 ?를 붙여준다.
interface SquareConfig {
  color?: string;
  width?: number;
  //어래이면 number json이면 string이다(인덱싱을 뭐로할건지 정한다 보통 어래이는 인덱스가 number json는 string)
  [propName: string]: any;
}
interface returnType {
  color: string;
  area: number;
}
const createSqure = (config: SquareConfig): returnType => {
  let newSqure: returnType = { color: "", area: 0 };
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
console.log(createSqure({ color: "white" }));

//읽기 전용 프로퍼티
interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = { x: 1000, y: 2000 };
// p1.x=1000 결과는 에러 realonly속성은 처음 할당됨 값이외에 값이 들어올경우 타입에러방생

//마찬가지로 array도 이처럼 리드온니 타입을 재공한다
let ab: number[] = [1, 2, 3, 4];
let ra: ReadonlyArray<number> = ab;
// ra[0]=2 처음 할당된 array의 인덱스는 변경 불가능 때문에 인덱스가 바뀌는 배열함수는 사용 불가능
ab = ra as number[]; //하지만 타입 단언으로 오버라이드 가능
console.log(ab);

//초과 프로퍼티 검사 : 기본적으로 typescript는 인터페이스에 없는 프로퍼티가 들어온다면 에러를 발생시키지만 타입단언으로 에러를 발생시키지 않을 수 있다

//아래처럼 파라미터 타입과 다른 프로퍼티가 파라미터로 들어온다면 에러를 발생시키지만 타입단어를 통해 에러를 피해 갈 수 있다 (원래는 color이 들어가야한다)
createSqure({ colour: "red", width: 100 } as SquareConfig);
//하지만 더 좋은 방법은 문자열 인덱스 서명(인덱스 시그니처)을 추가하는것이 더 나은 방법 입니다 80줄로가보자(80줄에 [props:string]:any)
createSqure({ colour: 1, width: 100 });
//초과 프로퍼티 검사를 피할 수 있는 마지막 방법은 JSON을 변수에 할당하여 피하는방법이다
let s = { colour: "22", width: 200 };
createSqure(s);

//함수타입 인터페이스
interface func {
  (param1: string, param2: string): boolean;
}

let myFunc: func = (param1, param2) => {
  let search = param1.search(param2);
  return search > -1;
};
console.log(myFunc("123", "4"));

//인덱서블 타입
//타입을 인데그로 기술하는 방법
//인덱서블 타입은 array or json 의 타입을 지정해주는 방법이다
//[index:number]:string 은 인덱싱이 넘버 즉 배열을 받겠다는 것
//반대로  [key:string]:string 은 json타입의 string값만 받겠다는 것

//인덱싱타입에서 array를 표현하고싶을경우 index의 타입을 number으로 지정
interface StringArray {
  [index: number]: string;
}
let myArray: StringArray = ["Bob", "Fred"];
let myStr: string = myArray[0];

//인덱싱 타입에서 json를 표현 하고 싶을경우

interface StringJSON {
  [index: string]: string | number;
  location1: number; //인덱싱이 받는 값의 타입과 다를경우  에러를 발생하지만 여러 타입을 사용할경우 에러방지
  location2: string;
  //같을경우 사용가능 만약
}
//인터페이스 확장하기
interface toExtend {
  id: string;
}
interface reciveExtend extends toExtend {
  pass: number;
}
let info: reciveExtend = {
  id: "sksk",
  pass: 1234,
};
//하이브리드 타입
interface hybrid {
  interval: number;
  reset(number: number, string: string): void;
}
//json으로 표현
let hy: hybrid = {
  interval: 1,
  reset: (number, string) => {
    console.log(number, string);
  },
};
hy.reset(1, "d");
hy.interval = 1;

//function으로 표현
const value = (): hybrid => {
  let hy: hybrid = {
    interval: 1,
    reset: (number, string) => {
      console.log(number, string);
    },
  };
  return hy;
};
value().reset(1, "d");
console.log(value());

///////function 의 기본형 void는 펑션의 리턴값이 없을떄 사용한다;
//파라미터에 ?를 주어 optional하게 파라미터를 받을 수 있다.(파라미터를 뒤에부터 입력해야한다.) 옵셔널을 넣을경우 이니셜라이져를 사용 할 수 없다.

/////중요!!!! optional 하게 타입을 지정할경우 반듯이 if나 삼항식으로 으로 분기처리를 해야한다 안할경우 에러남
const func = (number: number = 1, string?: string): any => {
  string ? (string = string) : (string = "");

  return number + string;
};
//이니셜 라이져를 사용할경우 undefined를 넣으면 이니셜라이져의 값이 나온다
console.log(func(undefined, "dd")); //

//여러가지 변수를 받을때 (...arg)
const argfunc = (param1: string, ...arg: string[]): string => {
  return param1 + " " + arg.join(" ");
};
console.log(argfunc("111", "111", "111", "111"));

//리터럴 타입 들어오는 값에대한 값을 정의할수있다

type Easing = "1" | "2" | "3";
// let string:Easing="4" 에러발생
const literal = (string: Easing) => {
  // string='' 여기서 ''안에서 리터럴 타입만 자동완성이 뜬다 개꿀!
  if (string === "1") {
  } else if (string === "2") {
  } else if (string === "3") {
  } else {
  }
};
//리터럴 타입은 인터페이스에서도 사용가능하다
interface literal {
  string: "1" | "2";
  num: 1 | 2 | 3;
}
let sa: literal = { string: "1", num: 1 };

//유니언 타입 이미 존재하는 타입이나 인터페이스를 결합하는 방법
const left = (value: string, padding: any) => {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  } else if (typeof padding === "string") {
    return padding + value;
  }
  // throw new Error('ddddd')
};
console.log(left("dd", 4));
console.log(left("dd", "4"));
// console.log(left("dd",true))
//위에 padding파라미터의 타입을 string | number 으로 설정해주면 typescript에서 에러를 잡아준다. error를 throw해줄 필요가 없다

//만약 유니언 타입들의 프로퍼티가 공통된 부분이 있다면 그 부분만 접근이가능하다(확신할 수 있는 부분만 접근가능)
interface unionA {
  let: string;
  go: string;
}

interface unionB {
  let: string;
  out: string;
}
type union = unionA | unionB;
let letgo: union = {
  let: "1",
  go: "1",
  out: "1",
};

letgo.let;
// letgo.go 에러가 발생한다 에러를 발생시키지 않으려면 인터페이스 들은 서로 extends 해야한다

//유니언된 프로퍼티의 리터럴 타입이 서로 다를경우 입력단에서 state의 모든 리터럴을 합쳐서 골라서 받는다.

interface state1 {
  state: "1";
}
interface state2 {
  state: "2";
}
interface state3 {
  state: "3";
}

type state = state1 | state2 | state3;

const state = (state: state1 | state2 | state3) => {
  switch (state.state) {
    case "1":
      return "1";
    case "2":
      return "2";
    case "3":
      return "3";
  }
};
console.log(state({ state: "1" }));

//교차타입
interface ErrorHandling {
  success: boolean;
  error?: { message: string };
}
interface ArtworksData {
  artwork: { title: string }[];
}
interface ArtistData {
  artists: { name: string }[];
}
let test: ArtistData & ErrorHandling;
test = {
  artists: [{ name: "ddd" }],
  success: false,
  error: { message: "asd" },
};

type ArtworksResponse = ArtworksData & ErrorHandling & ArtistData;
type ArtistResponse = ArtistData & ErrorHandling;

//인터페이스는 여러가지 인터페이스를 implement 할수 없지만 type은 교차타입으로 다 합칠 수 있따

const handleArtistsResponse = (response: ArtistResponse) => {
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
enum numbers {
  Up,
  Down,
  Left = 4,
  Right,
}
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
const respond = (number: string | numbers) => {
  return number;
};

console.log(respond(numbers.Down));
//문자 열거형

enum strings {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
//숫자대신 stirng을 넣어 직렬화한다.
console.log(strings);

//제너릭을 이용하면 유연하게 타입을 받아서 지정할 수 있다 즉  사용할 타입을 나중에 지정하겠다는것
const generic = <T>(arg: T): T => {
  return arg;
};
generic<number>(1);

//인터페이스와 제너릭함수 활용

interface generic {
  gen<T>(arg: T): T;
}
let gen: generic = {
  // gen<T>(arg:T):T{
  //     console.log(arg)
  //     return arg
  // },
  gen: <T>(arg: T): T => {
    console.log(arg);
    return arg;
  },
};
gen.gen<number>(1);

//제네릭 제약조건에서 타입 매개변수 제약된 타입으로 제너릭을 선언 할 수있다 (제약된 타입이랑 아래와 같이 설명한다)
//T의 타입이 만약 오브잭트일경우 K의 타입을 T의 키로만 강재할수있다
const getProperty = <T, K extends keyof T>(obj: T, key: K) => {
  console.log(obj[key]);
};
//없는 키값이면(ex 'c') 에러발생
getProperty({ a: 1, b: 2 }, "a");

// 만약 교차타입의 배열일경우 다음과같이 타입체크를한다
type type1 = { type1: true };
type type2 = { type2: true };
const array: (type2 | type1)[] = [{ type1: true }, { type2: true }];

array.map((item) => {
  if ("type1" in item) {
    // 여기서 타입은 item1으로된다.
  }
  if ("type2" in item) {
    // 여기서 타입은 item2으로된다.
  }
});

// 튜플
const tuple = [1, 2, 34, 5, 6] as const;
// tuple[1] = 10; 에러발생

// 유틸 타입! 매우 유용하다 타입들을 가지고 놀수 있음

// 1. Partial<T>
// T의 모든 프로퍼티를 선택적으로 만드는 타입을 구성합니다. 이 유틸은 주어진 타입의 모든 하위 타입 집합을 나타내는 타입을 반환합니다.

interface Todo {
  title: string;
  description: string;
}

function usePartial(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  // fieldsToUpdate 이파라미터는 Todo인터페이스의 타입중 특정 부분(part) 타입을 의미
  return { ...todo, ...fieldsToUpdate };
}
const todo1: Todo = {
  title: "title",
  description: "description",
};
const todo2 = usePartial(todo1, { description: "asdasd" });
// 2번쨰 파라미터에서 Todo인터페이스의 타입을 부분적으로(타입이 ?으로 표시됨) 타입을 사용한다.
// 당연히 부분적으로 타입을 사용하겠다는 것이니 ?타입이다.(선택적 프로퍼티)
console.log(todo2); //{ title: 'asda', description: 'asdasd' }

// 2. Readonly<T>
// T의 모든 파라미터를 readOnly상태로 만든다 즉 한번 할당하면 재할당 불가능

interface NotReadOnly {
  title: string;
}
const readOnlyTypeVariable: Readonly<NotReadOnly> = {
  title: "이제난 리드온니이다.",
};
// readOnlyTypeVariable.title="asdasd" <== 타입에러:리드온니입니다.

// 3. Record<K,T>
//키의 타입은 K, 밸류의 타입은 T인 오브젝트를 만들때 씁니다.

// 키의 타입
type Page = "home" | "about" | "contact";
// value의 타입
interface PageInfo {
  title: string;
}
const record: Record<Page, PageInfo> = {
  about: { title: "asd" },
  contact: { title: "asd" },
  home: { title: "asd" },
};

// 4. Pick<T,K>
// T타입에서 K의 키값만 선택하여 새로운 타입은 반환한다.
interface TypeList {
  title: string;
  description: string;
  completed: boolean;
}

type iWillPickType = Pick<TypeList, "completed" | "description">;
const newType: iWillPickType = {
  description: "asd",
  completed: false,
  // title 이 타입은 선택안했으니 에러발생
};

// 5. Omit<T,K>
// T타입에서 K의 키값만 제거한뒤 새로운 타입을 반환

type iWillRemoveType = Omit<TypeList, "completed">;
const newOmitType: iWillRemoveType = {
  description: "asdasd",
  title: "asdasd",
  //completed 이부분은 제거되었기때문에 에러발생
};

// 6. Exclude<T,U>
// T에서 U에 할당 할 수있는 모든 속성을 제외한 타입을 구성합니다.
type EX1 = Exclude<"a" | "b" | "c", "a" | "c">; // "b"
type EX2 = Exclude<string | number | (() => void), Function>; // string|number

//7. Extract<T,U>
// T에서 U에 할당 할 수 있는 모든 속성을 추출하여 타입을 구성한다.
type ET1 = Extract<"a" | "b" | "c", "a" | "f">; // "a"
type ET2 = Extract<string | number | (() => void), Function>; // ()=>void

// 8.NonNullable<T>
// Nullable한 타입을 제거한다.
type T0 = NonNullable<string | number | undefined>; // string|number
type T1 = NonNullable<string[] | null | undefined>; // string[]

// 9. Parameters<T>
// 함수 타입 T의 매개변수 타입들의 튜플 타입을 구성합니다.(불변하는 배열)
