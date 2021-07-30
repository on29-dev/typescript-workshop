interface Person {
    name: string;
    say(message: string): void;
}

interface Programmer {
    writeCode(requirement: string): string;
}

// Korean은 Person을 상속받는다(implements)
// ,를 통해 다중 인터페이스 구현 가능 (Person, Programmer)
class KoreanProgrammer implements Person, Programmer {
    constructor(public name: string){}

    say(message: string): void {
        console.log(message);
    }

    writeCode(requirement: string): string {
        console.log(requirement);
        return requirement + '.....';
    }

    loveKimchi() {
        console.log('love~ kimchi~');
    }
}

const on29 = new KoreanProgrammer('on29')

// abstract class 추상클래스
// 추상클래스란 클래스가 완성되지 않은 클래스를 의미
// 상속을 받아서 인스턴스 생성 가능
abstract class Korean implements Person {
    public abstract jumin: number; // 자식(하위) 클래스에서 정의해서 쓰라는 뜻
    
    constructor(public name: string) {

    }
    
    say(msg: string) {
        console.log(msg);
    }
    abstract loveKimchi(): void; // 자식(하위) 클래스에서 정의해서 쓰라는 뜻

}

class KoreanProgrammer1 extends Korean implements Programmer {
    constructor(public name: string, public jumin: number){
        super(name); // 자식클래스에서는 부모클래스의 생성자를 호출해야 함
    }

    say(message: string): void {
        console.log(message);
    }

    writeCode(requirement: string): string {
        console.log(requirement);
        return requirement + '.....';
    }

    loveKimchi(): void {
        console.log('love~ kimchi~');
    }

}

const on30 = new KoreanProgrammer1('on29', 111);

// const on31 = new Korean('on29'); // 추상클래스의 인스턴스는 만들 수 없고, 반드시 자식클래스에서 상속받아서 구현한 뒤에 그 자식 클래스의 인스턴스를 생성해야 함