/* prototype
상속을 위해 쓰이는 아이
class를 이용해서 class를 선언하고 그 클래스를 extends로 상속해서 상속을 구현할수있음
자바스크립트는 prototype를 이용해서 상속을 구현할 수 있음
class에서 속성과 함수들을 정의한 것 처럼 반복적으로 쓰일 수 있도록
즉, 객체지향프로그래밍을 할 수 있는 한가지의 방식으로써, 행동들을 재 사용할 수 있고(상속) 기존의 있는 object를 재사용할 수 있음 이것들을 prototype으로 이용해서 함
코드를 재사용하기 위해서 만들어진 아이!
*/

/*
자바스크립트의 모든 object는 object라는 proto타입을 상속한다.
proto : Object 안에 보면은 기본적으로 쓸 수 있는 함수가 있음 ex) toString, isPrototypeOf, valueOf
proto : Array(ex) length, concat, every, pop, push)는 proto : Object를 가지고 있음
즉, array > Array > Object 상속 
결론, 자바스크립트의 모든 object들은 Object라는 proto를 가지고 있다.
*/

const x = {}
const y = {}
console.log(x) // {} proto : Object
console.log(y) // {} proto : Object
console.log(x.toString()) // 아무것도 가지지 않는데도 toString을 사용할 수 있음
console.log(x.__proto__ === y.__proto__) // true : x와 y는 동일한 object를 상속한다

const array = []
console.log(array) // [] proto : Array

/*
공통된 필드 : beans, makeCoffee() -> Instance member level
만들어진 object마다 들어가 있음.
하지만 makeCoffee()를 한번만 정의하고 싶다면 -> Prototype member level
CoffeeMachine.prototype.makeCoffee = (shots) => {
    console.log('making...☕')
}
prototype안에 정의되어 있음
결론) machine은 CoffMachine이라는 proto를 상속하고 있고 결국 CoffMachine이라는것은 proto : Object 상속
*/

function CoffeeMachine(beans) {
    this.beans = beans;
    this.makeCoffee = (shots) => {
        console.log('making...☕')
    } 
}

CoffeeMachine.prototype.makeCoffee = (shots) => {
    console.log('making...☕')
}
const machine1 = new CoffeeMachine(10)
const machine2 = new CoffeeMachine(20)
console.log(machine1) // CoffeeMachine {beans : 10} beans : 10 proto : Object 상속
console.log(machine2) // CoffeeMachine {beans : 20} beans : 20 proto : Object 상속

function LatteMachine(milk) {
    this.milk = milk
}
LatteMachine.prototype = Object.create(CoffeeMachine.prototype)

const latteMachine = new LatteMachine(123)
console.log(latteMachine)
latteMachine.makeCoffee();