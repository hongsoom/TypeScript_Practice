{
    /*
    안좋은점 : type별로 똑같은 함수를 만들어야 하는점 (arg: number, arg: string ...)
   
    1) any type으로 만들기? 
    -> 어떤 타입이든 받을 수 있다는 점에서 'generics'과 같지만 
    함수를 반환하는데 있어 'any'는 받았던 인수들의 타입을 활용하지 못한다
    즉, 타입이 보장이 안됨

    2) 제네릭 
    -> 어떤 타입이든 받을 수 있다는 점에서 'any'와 같지만
    해당 정보를 잃지 않고 타입에 대한 정보를 다른 쪽으로 전달할 수 있다는 점이 다르다
    그리고 코드를 쓸 때 타입이 결정되기 때문에 타입 보장 됨
    */

    function checkNotNull(arg: number | null): number {
        if (arg == null) {
            throw new Error('not valid number!')
        }
        return arg;
    }
    const result = checkNotNull(123);
    console.log(result); // 123
    checkNotNull(null); // not valid number!

    function checkAnyNull(arg: any | null): any {
        if (arg == null) {
            throw new Error('not valid number!')
        }
        return arg;
    }

    const result1 = checkAnyNull(123);
    console.log(result1); // 123
    checkAnyNull(null); // not valid number!

    function checkGenericNull<GENERIC>(arg: GENERIC | null): GENERIC {
        if (arg == null) {
            throw new Error('not valid number!')
        }
        return arg;
    }

    const number = checkGenericNull(123); // 코딩하는 이 시점에 숫자타입으로 결정됨
    const boal: boolean = checkGenericNull(true);

    function checkTNull<T>(arg: T | null): T {
        if (arg == null) {
            throw new Error('not valid number!')
        }
        return arg;
    }

    /* 필요한 타입별로 다 쓰는 번거러움!! -> 제녀릭 필요
    type SuperPrint = {
        (a: number[]):void
        (a: boolean[]):void
        (a: string[]):void
        (a: (number|boolean|string)[]):void
    }
    */

    type SuperPrint = {
        <TypePlaceholder>(a: TypePlaceholder[]): TypePlaceholder
    }

    /* 더 간단하게 쓰는 방법
    type SuperPrint = {
        <T>(a: T[]): T
    }
    */

    const superPrint: SuperPrint = (a) => a[0]

    const a = superPrint([1, 2, 3, 4])
    const b = superPrint([true, false, true])
    const c = superPrint(["a", "b", "c"])
    const d = superPrint([1, 2, true, false, "hello"])
}