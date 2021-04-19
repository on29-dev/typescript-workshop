var score1 = 0; // 함수 단위 스코프
let score2 = 200; // 블록 단위 스코프
const defaultScore = 0;

function outer() {
    // var 설명부
    /*
    if (true) {
        var score = 0; // if 블록 안에 있지만 outer 함수 내부에서 어디서든 접근 가능(for도 마찬가지)
    }
    for (var i = 0; i < 3; i++){ // for 블록 안에 있지만 outer 함수 내부에서 어디서든 접근 가능
        setTimeout(function() {
            console.log(i); // 0 3 3 3
        }, 100)
    }
    console.log(score);
    */

    // let 설명부
    /*
    if (true){
        let score: number; // type 지정 어노테이션
        score = 30;
        // score = "30";
    }
    for (let i = 0; i < 3; i++){ // for 블록 안에 있지만 outer 함수 내부에서 어디서든 접근 가능
        setTimeout(function() {
            console.log(i); // 0, 1, 2
        }, 100)
    }
    */

    // const 설명부
    if (true) {
        const score: number = 100; // const는 재할당이 불가능하므로 구태여 type 어노테이션을 지정할 필요가 없다.(할당된 값으로 타입 추론 가능)
        // score = 30;
    }
    // console.log(score) // let과 마찬가지로 블록 단위 스코프를 가짐
}

outer();
