enum StarbucksGrade {
	WELCOME,
	GREEN,
	GOLD
}
function getDiscount(v: StarbucksGrade): number {
	switch (v) {
		case StarbucksGrade.WELCOME: return 0;
		case StarbucksGrade.GREEN: return 5;
		case StarbucksGrade.GOLD: return 10;
	}
}
console.log(getDiscount(StarbucksGrade.GREEN)); // 5
console.log(StarbucksGrade.GREEN);  // 1 => 이것은 StarbucksGrade에 할당된 값을 리턴한 것이다.
console.log(StarbucksGrade); // { '0': 'WELCOME', '1': 'GREEN', '2': 'GOLD', WELCOME: 0, GREEN: 1, GOLD: 2 }

// 이 값들은 직접 입력해서 변경할 수도 있다.
enum StarBucksGrade1 {
	WELCOME = 0,
	DDDD = 3, // 중간에 값이 껴들어가도 코드에 문제가 발생하지 않는다.
	GREEN = 1,
	GOLD = 2,
}

// TypeScript 2.4부터 문자열도 할당 가능하다.
enum StarBucksGrade2 {
	WELCOME = "WELCOME",
	GREEN = "GREEN",
	GOLD = "GOLD",
}
