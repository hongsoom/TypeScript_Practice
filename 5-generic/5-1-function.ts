{
    /*
    안좋은점 : type별로 똑같은 함수를 만들어야 하는점 (arg: number, arg: string ...)
    1) any type으로 만들기? -> 타입이 보장이 안됨
    2) 제네릭 -> 어떤 타입이든지 받을 수 있고 코드를 쓸 때 타입이 결정되기 때문에 타입 보장 됨
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
}