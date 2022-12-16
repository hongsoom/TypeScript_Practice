{
  {
    /*
    문제점) 제약사항이 없기 때문에 외부에서 object 상태를 유효하지 않는 상태로 만들 수 있음
    encapsulation을 사용해서 외부에서 보이는, 설정해서는 안되는 것들을 가리기!(은닉)
    public : 기본
    private : 외부에서 보이지 않음
    protected : 외부에서 접근할 수 없지만 상속받은 자식 클래스에서만 접근이 가능
    */

    type CoffeeCup = {
      shots: number;
      hasMilk: boolean;
    }

    class CoffeeMaker {
      private static BEANS_GRAMM_PER_SHOT: number = 7;
      private coffeeBeans: number = 0;

      /* static를 붙여서 object를 만들 수 있는 함수 = makeMachine()
        constructor를 사용해서 object를 만들 수 없게 하는 것
        -> constructor에 private를 붙여 항상 static 메소드를 이용할 수 있도록 권장
      */
      private constructor(beans: number) {
        this.coffeeBeans = beans;
      }

      static makeMachine(coffeeBeans: number): CoffeeMaker {
        return new CoffeeMaker(coffeeBeans);
      }

      fillCoffeeBeans(beans: number) {
        if (beans < 0) {
          throw new Error('value for beans should be greater than 0')
        }
        this.coffeeBeans += beans;
      }

      makeCoffee(shots: number): CoffeeCup {
        if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
          throw new Error('Not enough coffee beans!');
        }
        this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
        return {
          shots,
          hasMilk: false,
        }
      }
    }

    const maker = CoffeeMaker.makeMachine(32);
    maker.fillCoffeeBeans(32);
  }

}
