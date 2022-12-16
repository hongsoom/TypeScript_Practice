{
  /* composition
  상속의 문제점) 자식 클래스에서 수정된 함수가 있을 경우, 그 아래 상속받은 또다른 자식 클래스에 영향을 미칠 수 있음
          새로운 기능을 도입하려 할 때, 상속 구조가 어려움
          타입스크립트에선 한 가지 이상의 부모 클래스를 상속 할 수 없음
          (class SweetCaffeLatteMachine extends SweetCoffeeMaker,CaffeLatteMachine) X

    각각의 class에서는 필요한 것을 매번 구현하는게 아니라
    각각의 기능별로 class를 따로 만들어둠으로써 필요한 곳에서 가져다 쓰는 = composition
    -> 코드의 재사용을 높여준다.

    but 이것도 단점이 있음!
    너무 타이트하게 커플링 되어 있어서 업데이트 되거나 다른거를 대체하고 싶어도 관련된 모든 것이 수정이 된다.
    그래서 확장이 가능하고 유연한 것을 사용해야 한다. (interface)
    */

  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface milkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  // 싸구려 우유 거품기
  class CheapMilkSteamer implements milkFrother {
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

  // 고급 우유 거품기
  class FancyMilkSteamer implements milkFrother {
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

  // 차가운 우유 거품기
  class ColdMilkSteamer implements milkFrother {
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

  // 사탕 설탕 제조기
  class CandySugarMixer implements SugarProvider {
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

  // 설탕 제조기
  class SugarMixer implements SugarProvider {
    private getSuger() {
      console.log('Getting some sugar from jar');
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
    constructor(beans: number, public readonly serialNumber: string, private milkFrother: milkFrother) {
      super(beans);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.milkFrother.makeMilk(coffee);
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    constructor(beans: number, private sugar: SugarProvider) {
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
      private sugar: SugarProvider,
      private milk: milkFrother,
    ) {
      super(beans);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      const suagrAdded = this.sugar.addSugar(coffee);
      return this.milk.makeMilk(suagrAdded);
    }
  }

  // Milk
  const CheapMilkMaker = new CheapMilkSteamer();
  const fanyMilkMaker = new FancyMilkSteamer();
  const ColdMilkMaker = new ColdMilkSteamer();

  // Sugar
  const candySugar = new CandySugarMixer();
  const sugar = new SugarMixer();

  const sweetCandyMachine = new SweetCoffeeMaker(12, candySugar);
  const sweetMachine = new SweetCoffeeMaker(12, sugar);

  const lattMachine = new CaffeLatteMachine(12, 'SS', CheapMilkMaker);
  const coldLattMachine = new CaffeLatteMachine(12, 'SS', ColdMilkMaker);

  const sweetLatteMachine = new SweetCaffeLatteMachine(
    12,
    candySugar,
    CheapMilkMaker
  );
}

{
  /*
  필요한 것만 조립해서 설정!
  상속의 관계가 너무 깊을 때 사용하면 좋지만 무조건 상속 보다 좋은건 아님!
  */
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface milkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  // 싸구려 우유 거품기
  class CheapMilkSteamer implements milkFrother {
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

  // 고급 우유 거품기
  class FancyMilkSteamer implements milkFrother {
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

  // 차가운 우유 거품기
  class ColdMilkSteamer implements milkFrother {
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

  // 우유 없음
  class NoMlik implements milkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  // 사탕 설탕 제조기
  class CandySugarMixer implements SugarProvider {
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

  // 설탕 제조기
  class SugarMixer implements SugarProvider {
    private getSuger() {
      console.log('Getting some sugar from jar');
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

  // 설탕 없음
  class NoSugar implements SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    constructor(coffeeBeans: number, private milk: milkFrother, private sugar: SugarProvider) {
      this.coffeeBeans = coffeeBeans;
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
      const coffee = this.extract(shots);
      const suagrAdded = this.sugar.addSugar(coffee);
      return this.milk.makeMilk(suagrAdded);
    }
  }

  // Milk
  const CheapMilkMaker = new CheapMilkSteamer();
  const fanyMilkMaker = new FancyMilkSteamer();
  const ColdMilkMaker = new ColdMilkSteamer();
  const noMlik = new NoMlik();

  // Sugar
  const candySugar = new CandySugarMixer();
  const sugar = new SugarMixer();
  const noSugar = new NoSugar();

  const sweetCandyMachine = new CoffeeMachine(12, noMlik, candySugar);
  const sweetMachine = new CoffeeMachine(12, noMlik, sugar);

  const lattMachine = new CoffeeMachine(12, CheapMilkMaker, noSugar);
  const coldLattMachine = new CoffeeMachine(12, ColdMilkMaker, noSugar);

  const sweetLatteMachine = new CoffeeMachine(
    12,
    CheapMilkMaker,
    candySugar
  );
}
