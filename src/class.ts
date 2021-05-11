// // JavaScript 코드
// class CartJS {
// 	constructor(user) {
// 		this.user = user;
// 		this.store = {};
// 	}
// 	put(id, project) {
// 		this.store[id] = product;
// 	}
// 	get(id) {
// 		return this.store[id];
// 	}
// }
// const cartJohnJS = new CartJS({ name: 'john' });
// const cartJayJS = new CartJS({ name: 'jay' });

// TypeScript의 class
interface User {
    name: string;
}
interface Product {
    id: string;
    price: number;
}
class Cart {
    // 접근제한자: private, public, protected (기본값 public)
    // protected user: User; // 인스턴스 레벨에서 접근 불가, Cart 클래스 상속시 하위 클래스에서는 접근 가능
    // private store: object; // 인스턴스 레벨(외부)에서 접근 불가
	
    constructor(public user: User, private store: object = {}) {
        // 생성자의 매개변수에 접근제한자를 같이 쓰면 속성을 정의 및 접근제한, 기본값 할당 등을 한번에 처리 가능
		// this.user = user;
		// this.store = {};
	}
	
    public put(id: string, product: Product) {
		this.store[id] = product;
	}
	get(id: string) {
		return this.store[id];
	}
}

class PromotionCart extends Cart {
    addPromotion(){
        this.user
    }
}

const cart2 = new PromotionCart({ name: 'john' });
const cartJohn = new Cart({ name: 'john' });
const cartJay = new Cart({ name: 'jay' });