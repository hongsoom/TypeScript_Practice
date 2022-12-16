{
  /* composition
  상속의 문제점) 자식 클래스에서 수정된 함수가 있을 경우, 그 아래 상속받은 또다른 자식 클래스에 영향을 미칠 수 있음
          새로운 기능을 도입하려 할 때, 상속 구조가 어려움
          타입스크립트에선 한 가지 이상의 부모 클래스를 상속 할 수 없음
          (class SweetCaffeLatteMachine extends SweetCoffeeMaker,CaffeLatteMachine) X

    각각의 class에서는 필요한 것을 매번 구현하는게 아니라
    각각의 기능별로 class를 따로 만들어둠으로써 필요한 곳에서 가져다 쓰는 = composition
    -> 코드의 재사용을 높여준다.

    but 이것도 단점이 있음! -> 다른 클래스를 사용할 수 없음(제약이 생김)
   */

  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  // 싸구려 우유 거품기
  class CheapMilkSteamer {
    private steamMilk(): void {
      console.log('Steaming some milk... 🥛');
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      }
    }
  }

  // 설탕 제조기
  class AutomaticSugarMixer {
    private getSuger() {
      console.log('Getting some sugar from candy🍭');
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSuger();
      return {
        ...cup,
        hasSugar: sugar,
      }
    }
  }

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log('cleaning the machine...🧼');
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log('heating up... 🔥');
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots... ☕️`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string, private milkFrother: CheapMilkSteamer) {
      super(beans);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.milkFrother.makeMilk(coffee);
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    constructor(beans: number, private sugar: AutomaticSugarMixer) {
      super(beans);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.sugar.addSugar(coffee);
    }
  }

  class SweetCaffeLatteMachine extends CoffeeMachine {
    constructor(
      private beans: number,
      private sugar: AutomaticSugarMixer,
      private milk: CheapMilkSteamer,
    ) {
      super(beans);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      const suagrAdded = this.sugar.addSugar(coffee);
      return this.milk.makeMilk(suagrAdded);
    }
  }
}
