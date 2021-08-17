// 타입 별칭(Type Alias)
// 1. 정의한 타입을 조합해 새로운 타입을 정의
// 2. 이전에 있던 타입의 이름을 바꿈
// 3. 리터럴 문자열 타입을 이용한 타입을 만듦

interface User {
  name: string;
}

interface Action {
  do(): void;
}

// 타입별칭 정의
type UserAction = User & Action;
function createUserAction(): UserAction {
  return {
    do(){},
    name: ''
  }
}

type StringOrNumber = string | number;

// 타입 별칭은 제네릭도 사용 가능
type Arr<T> = T[];
type P<T> = Promise<T>;

// 별칭으로 만든 타입은 implements가 가능(인터페이스가 아님에도)
type User2 = {
  name: string;
  login(): boolean;
}

class UserImpl implements User2 {
  login(): boolean {
    throw new Error("Method not implemented.");
  }
  name: string; 
}

type UserState = "PENDING" | "APPROVE" | "REJECTED";

function checkUser(user: User2): UserState {
  if (user.login()) {
    return "APPROVE";
  } else {
    return "REJECTED";
  }
}