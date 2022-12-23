/*
자바스크립트의 this
누가 부르냐(호출)에 따라 this가 달라짐
호출한 문맥에 따라 this가 동적으로 변경됨

다른 프로그래밍 언어에서의 this
만들어진 객체 그 자신
*/

console.log(this); // Window

function simpleFunc() {
    console.log(this); // Window
}
simpleFunc();

class Counter {
    count = 0;
    increase = function () {
        console.log(this); 
    }
}
const counter = new Counter();
counter.increase(); // Counter -> class를 가르킴

const caller = counter.increase;
caller(); // undefined

class Bob{}
const bob = new Bob();
bob.run = counter.increase;
bob.run(); // Bob