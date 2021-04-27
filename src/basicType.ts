let anyValue: any;
let numValue: number;
let stringValue: string;
let booleanValue: boolean;
let undefinedValue: undefined;
let nullValue: null;
let objValue: object;
let symbolValue: symbol;

numValue = 3.3;
stringValue = "hello";

booleanValue = true;

// undefined, null 모든 타입의 하위타입 => 상위타입으로 정의된 변수에 할당 가능
// 즉 위의 어떤 타입의 변수에서도 undefined나 null을 할당 가능
// 최상위 타입은 any
undefinedValue = undefined
undefinedValue = null

// object 타입은 원시형 타입을 제외한 모든 데이터 타입 할당 가능
objValue = new String('hello'); // => new를 붙였기 때문에 String 레퍼타입, String 객체가 반환되므로 가능(만약 String('hello') 라고만 했다면 string으로 처리되어 에러 발생)
// objValue = String("This is string");

// symbolValue = Symbol();
// {
//     symbolValue: "hello" // 이런 식으로 사용하게 됨
// }

// 배열 타입 정의
let nameList: string[]
// nameList = [1, 3]; // 에러 발생
// nameList.push(2) // 에러발생
nameList.push("hello")
nameList = ["1", "3"];

// 인라인으로 타입 정의
let user1: {name: string, score: number};
user1 = { name: "lotte", score: 30 }
// user1 = { name: 10, score: "30" }; // 에러 발생

let user2: {name: string, score: number};


// 튜플 타입 정의
let tuple2: [number, string]
tuple2 = [1, "hello"]
// tuple2 = [1, 2] // 에러 발생

let tuple3: [number, number, number];
tuple3 = [1, 2, 3]
// tuple3 = [1, "2", 3] // 에러 발생

