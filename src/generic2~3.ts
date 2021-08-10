// generic 3. 제네릭은 인터페이스에서도 사용 가능
interface DB<T> {
    add(v: T): void;
    get(): T;
}

class D<T> implements DB<T> { // 'DB<T>' 제네릭 형식에 1 형식 인수가 필요합니다.ts(2314)
    add(v: T): void {
        throw new Error("Method not implemented.");
    }
    get(): T {
        throw new Error("Method not implemented.");
    }
}

// 타입 파라미터의 타입의 범위를 특정 타입의 하위 타입으로 고정할 수 있다.
interface JSONSerialier {
    serailize(): string;
}


// generic 2. 제네릭은 클래스 정의에서도 사용 가능
// <>를 통해 generic 3.에서 정의한 인터페이스 적용
// 타입 범위를 JSONSerialier를 extends 한 타입으로 고정 => 고정된 타입의 기능을 활용하도록 코드 작성 가능
class LocalDB<T extends JSONSerialier> implements DB<T> {
    constructor(private localStorageKey: string) {
    }
    // add(v: User) { // 1. 인자를 하나의 고정된 타입만 받는게 아니라 타입 자체를 파라미터로 받아 여러 타입의 인자를 받고 싶음
    add(v: T) { // 2. 제네릭 활용
        // localStorage.setItem(this.localStorageKey, JSON.stringify(v))
        localStorage.setItem(this.localStorageKey, v.serailize())
    }
    get(): T {
        const v = localStorage.getItem(this.localStorageKey);
        return (v) ? JSON.parse(v) : null;
    }
}

// interface User { name: string }

// const userDb = new LocalDB<User>('user'); // 3. <User>를 통해 userDb는 User타입만을 받게 된다.

// // userDb.add( "hello" ); // 4. 'string' 형식의 인수는 'User' 형식의 매개 변수에 할당될 수 없습니다.ts(2345)
// userDb.add({ name: 'on29' });
// const user1_A = userDb.get();
// user1_A.name;

// // 5. 타입을 파라미터화하여 하나의 클래스가 여러 타입을 지원할 수 있도록 설정할 수 있다.

// 조건부타입을 제네릭에서 활용할 수 있음
interface Veigtable {
    v: string;
}
interface Meat {
    m: string;
}
interface Cart2<T> {
    getItem(): T extends Veigtable ? Veigtable : Meat
}
const cart1: Cart2<Veigtable> = {
    getItem() {
        // return { m: '' } // <Meat> 이나 <string> 등 Veigtable이 아닌 경우
        return { v: '' }
    }
}
cart1.getItem()
// 제네릭을 사용하면 함수나 클래스, 인터페이스 등에서 하나의 타입 뿐 아니라 여러 타입에 대해 처리할 수 있게 해준다.
// 하나의 기능이 여러 타입을 대응할 수 있고 동시에 각각의 타입을 유지할 수 있게 해준다.(typeSafe한 코드 작성 가능)