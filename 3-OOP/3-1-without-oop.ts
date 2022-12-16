{
  type CoffeeCup = {
    shots: number; // 얼마나 많은 샷이 들어있는 커피인지
    hasMilk: boolean; // 우유가 들어있는 커피인지
  }

  const BEANS_GRAMM_PER_SHOT: number = 7; // 한 샷당 커피콩이 얼마나 들어가는지(중량)
  let coffeeBeans: number = 0; // 현재 커피콩이 얼마나 있는지

  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
      throw new Error('Not enough coffee beans!');
    }
    coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT;
    return {
      shots: shots, // key와 value 이름이 동일하다면 생략 가능 shots,
      hasMilk: false,
    }
  }

  coffeeBeans += 3 * BEANS_GRAMM_PER_SHOT;
  const coffee = makeCoffee(2);
  console.log(coffee);
}