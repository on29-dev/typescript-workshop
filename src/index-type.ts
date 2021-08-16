// Index Type
// 속성의 이름이 정해져있지 않고 동적으로 처리해야 할 때 사용할 수 있음

interface Props {
  name: string;
  [key: number]: string; // 인덱스 시그니처 매개변수 형식은 문자열 또는 숫자형이어야 함
  
}

// const p: Props = {
//   name: 'hello',
//   a: 'd',  // [key: string]가 아니라 [key: number]일 경우 문자형 키 사용 불가
//   b: 'e',
//   // c: 3, // key의 값이 문자열이어야 하기 때문에 컴파일 에러
//   0: 'd', // [key: string]이어도 숫자형 키 사용 가능
//   1: 'b',
// }

// p["a"]
// p[0] // 숫자도 가능

// p.name
// p.d
// p.dfsf

// keyof: Props의 키들에 대한 타입을 가져올 수 있음
let keys: keyof Props;

interface User {
  name: string;
  age: number;
  hello(msg: string): void;
}

let keysOfUser: keyof User; // "name" | "age" | "hello"
keysOfUser = "age"

let helloMethod: User["hello"];
// helloMethod = "d"
