interface TV {
    // 하나의 타입을 정의하는 것
    // 행위를 기술해야 함(메소드 정의) - 그 행위가 구체적으로 무엇이어야 하는지는 정의하지 않아도 됨(메소드 바디 정의 필요없음)
    turnOn(): boolean; // 반드시 반환해야 하며, 반환값이 boolean이어야 함
    turnOff(): void; // 반환값이 없어도 상관없음
}

const myTV: TV = {
    turnOn() {
        return true;
    },
    turnOff() {

    }
}

function tryTurnOn(tv:TV) {
    tv.turnOn();
}
tryTurnOn(myTV);

interface Cell {
    // 행위가 없고 속성(데이터)만을 담고 있을 수도 있다.
    row: number;
    col: number;
    piece?: Piece;
}
// interface SignUp {
//     email: string;
//     id: string;
//     password: string;
// }

// function ajaxSignup (data: SignUp) {

// }
// ajaxSignup({
//     email: "", id: "", password:""
// })

interface Piece {
    move(from: Cell, to: Cell): boolean;
}
function createBoard() {
    const cells: Cell[] = [];
    for (let row = 0; row < 4; row++){
        for (let col = 0; col < 3; col++){
            cells.push({ row, col })
            // piece는 없을 수도 있다(처음부터 말이 없을 수도 있으니까) => 이럴떄 인터페이스의 속성에 ? 를 달아서 해결가능})
        }
    }
    return cells;
}

const board = createBoard();
board[0].piece = {
    // 타입스크립트(타입기반)상 board는 반드시 move를 해야 한다.
    move(from: Cell, to: Cell) {
        return true;
    }
}

// 타입스크립트 인터페이스는 개발환경에서만 유효(실제 자바스크립트에서 타입이나 인터페이스 체크하지 않기 때문에)
// 견고한 타입을 가지고 코드 작성 가능(신뢰성 향상)