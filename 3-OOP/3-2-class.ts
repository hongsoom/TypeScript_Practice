{
  /*
  1) class 생성 - 서로 관련있는 데이터나 함수를 한곳에 묶는 것, template 만드는 것
    -> 관련된 속성과 함수들을 묶어서 어떤 모양의 데이터가 될 것이라는고 정의하는 것
    -> 정의된 class를 이용해서 데이터를 넣어 object를 생성
    -> object 마다 새로 만들어져야하는 데이터가 있다면 멤버 변수로 만들기
    -> class level에서 함께 공유될 수 있는거라면 static를 이용하기(변수,함수가능)
  2) class안 멤버 변수 작성할 때, const let function 키워드 사용 x
  3) class안 멤버 변수에 접근할 때, this를 사용해야 함
  4) constructor() : 클래스를 가지고 object를 생성할 때 항상 호출되는 함수
  5) new 키워드 : class의 instance를 만든다!
  6) static 키워드 : class level - 클래스와 연결되어있기 때문에 object마다 생성되지 않음
                : 클래스 자체에 있기 때문에 this를 쓰지 않고 클래스 이름을 사용해야한다
  */

  type CoffeeCup = {
    shots: number; // 얼마나 많은 샷이 들어있는 커피인지
    hasMilk: boolean; // 우유가 들어있는 커피인지
  }

  class CoffeeMaker {
    static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    coffeeBeans: number = 0; // instance (object) level

    constructor(beans: number) {
      this.coffeeBeans = beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots: shots, // key와 value 이름이 동일하다면 생략 가능 shots,
        hasMilk: false,
      }
    }
  }

  const maker = new CoffeeMaker(32);
  console.log(maker); // CoffeeMaker { BEANS_GRAMM_PER_SHOT : 7, coffeeBeans : 32 }

  const maker1 = new CoffeeMaker(14);
  console.log(maker1) // CoffeeMaker { coffeeBeans : 14 }
}
