// x의 타입을 파라미터로 받을 수 있도록 하는 것이 제네릭(타입변수 라고 하기도 함)
// 함수명 뒤에 <>를 통해 구현
function createPromise<T>(x: T, timeout: number) {
    return new Promise<T>((resolve, reject) => {
        setTimeout(()=>{
            resolve(x);
        }, timeout);
    });
}

createPromise(10, 100)
    .then(v => console.log(v));

// 타입파라미터는 여러개를 만들 수 있다.(타입은 대문자로 쓰는 것이 관례)
function createTuple2<T1, T2>(v: T1, v2: T2): [T1, T2] {
    return [v, v2];
}
function createTuple3<T, U, D>(v: T, v2: U, v3: D): [T, U, D] {
    return [v, v2, v3];
}
const t1 = createTuple2("user1", 1000);

// 잘 이해가 안 감