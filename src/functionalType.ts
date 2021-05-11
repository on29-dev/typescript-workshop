// // JavaScript
// function add(x, y) {
// 	return x + y;
// }

// TypeScript
function add(x:number, y:number): number {
	return x + y;
}
// add(1, "2") // 에러
const result = add(1, 2); // result에 마우스를 대면 타입이 정확히 number로 추론된다.

function buildUserInfo(name?: string, email?: string) {
	return { name, email }
}
buildUserInfo(); // 에러 -> 파라미터 뒤에 ?를 넣어 옵셔널한 파라미터값을 넣을 수 있고, 이 경우엔 에러 안남

// 기본값을 주게 되면 별도의 인자 타입을 정의하지 않아도 타입이 기본값의 타입으로 결정된다.
function buildUserInfo1(name = "=", email = "-") {
	return { name, email }
}

// 함수정의 하는 또다른 방법
const add2 = (a: number, b:number): number => a + b;


// 오버로드 시그니처? 인자별로 다른 리턴 타입을 가질수 있게 정의할 수 있다.
// 바디 없이 함수명과 매개변수 타입, 반환 타입만 정의한 것을 함수 시그니처라고 하고,
// 동일 이름으로 여러가지를 시그니처를 정의하는 것을 오버로드 시그니처라고 한다.
interface Storage { a: string; }
interface ColdStorage { b: string;}

// 오버로드 시그니처 목록
function store(type: "통조림"): Storage
function store(type: "아이스크림"): ColdStorage

// 구현체
function store(type: "통조림" | "아이스크림") {
	if (type === "통조림") {
		return { a: "통조림" }
	} else if (type === "아이스크림") {
		return { b: "아이스크림" }
	} else {
		throw new Error('unsupported type');
	}
}

const s = store("통조림");
s.a // 통조림일 때만 a 접근 가능
s.b // 통조림이면 b 접근 불가