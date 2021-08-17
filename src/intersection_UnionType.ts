// intersection Type: 여러 타입을 하나의 합쳐진 타입으로 만드는 것
// `&`을 통해서 구현 가능
interface User {
    name: string;
}
interface Action {
    do(): void;
}

function createUserAction(u:User, a: Action): User & Action {
    return { ...u, ...a };
}

const u = createUserAction({name: 'on29'}, { do() {} })
// u 라는 변수에는 User와 Action이 합쳐진 타입이 들어감(do, name 모두 사용 가능)
// userAction 등을 따로 구현할 필요없이 기존 타입을 그대로 활용 가능

// UnionType: 타입을 둘 중 하나로 지정하고 싶을 때
// `|`(OR 연산자)을 통해 구현 가능
function compare(x: string | number, y:string | number) {
    // 타입 가드는 필요에 따라 추가 가능
    if(typeof x === 'number' && typeof y === 'number') {
        return x === y ? 0 : x > y ? 1 : -1;
    }
    if(typeof x === 'string' && typeof y === 'string') {
        return x.localeCompare(y);
    }
    throw Error('not supported type');
}
const v = compare("a", "b");
const x = compare("a", 1); // 현재 상태로는 런타임 에러
