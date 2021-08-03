// 제네릭은 클래스 정의에서도 사용 가능
class LocalDB<T> {
    constructor(private localStorageKey: string) {
    }
    // add(v: User) { // 1. 인자를 하나의 고정된 타입만 받는게 아니라 타입 자체를 파라미터로 받아 여러 타입의 인자를 받고 싶음
    add(v: T) { // 2. 제네릭 활용
        localStorage.setItem(this.localStorageKey, JSON.stringify(v))
    }
    get(): T {
        const v = localStorage.getItem(this.localStorageKey);
        return (v) ? JSON.parse(v) : null;
    }
}

interface User { name: string }

const userDb = new LocalDB<User>('user'); // 3. <User>를 통해 userDb는 User타입만을 받게 된다.

// userDb.add( "hello" ); // 4. 'string' 형식의 인수는 'User' 형식의 매개 변수에 할당될 수 없습니다.ts(2345)
userDb.add({ name: 'on29' });
const user1_A = userDb.get();
user1_A.name;

// 5. 타입을 파라미터화하여 하나의 클래스가 여러 타입을 지원할 수 있도록 설정할 수 있다.