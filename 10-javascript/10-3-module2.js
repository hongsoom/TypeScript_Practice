/*
모듈화를 하지 않으면 모든 것은 글로벌 스코프
그래서 동일한 이름을 사용하면(이름 충돌) 어떤 함수가 호출되었는지 전혀 알 수 없음
그리고 두 번 선언하는 문제가 발생 어떤걸 먼저 호출해야하는지 알 수 없음

즉, 모듈화를 해야한다! type="module"
결론) 모듈화를 이용하면 파일간에 중복으로 발생할 수 있는 이름 충돌을 방지 할 수 있고
서로 코드들을 분리함으로써 모듈성을 높여지고 모듈간의 재사용성도 높아짐 
*/
import * as calculator from "./10-3-module1.js";
console.log(calculator.add(1, 2)); // 3 ->  type="module"를 작성하는 순간 error 발생 but, export default를 하면 사용 가능
calculator.print();

