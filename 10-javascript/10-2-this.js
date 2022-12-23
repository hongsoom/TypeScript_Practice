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