{
    /** 
     * JavaScript
     * Primitive : number, string, boolean, bigint, symbol, null, undefined
     * Object : function, array.....
    */

    // number
    const num: number = 1;
    const num1: number = -6;
    const num2: number = 0.5;

    // string
    const str: string = 'hello';

    //bolean
    const boal: boolean = false;
    const boal1: boolean = true;

    // undefined - 값이 있는지 없는지 아무것도 결정되지 않은 상태 💩
    let name: undefined; // undefined만 값 할당
    let age: number | undefined; // number 또는 undefined
    age = undefined;
    age = 1;
    function find(): number | undefined {
        return
        // return 값으로 number 또는 undefined
    }

    // null - 여기엔 텅텅 비어있다고 나타냄 💩
    let person: null; // null만 값 할당
    let person2: string | null;  // string 또는 undefined

    /* unknown vs any
    모든 타입을 허용하지만 any는 TypeScript에서 타입 검사를 느슨하게 하므로 개발 당시에는 문제가 없으나 애플리케이션 또는 웹 페이지 개발 후 예기치 못한 문제가 발생할 가능성이 매우 높고
    unknown는 any 타입과는 다르게 프로퍼티 또는 연산을 하는 경우 컴파일러가 체크합니다. 그러므로 문제 되는 코드를 미리 예방할 수 있다.
    */

    // unknown - 어떤 종류의 데이터가 담길지 알 수 없는 = 다양한 데이터가 담길 수 있음 💩
    let notSure: unknown = 0;
    notSure = 'he';
    notSure = true;

    let a: unknown; // 미리 알지 못할 때 사용 

    // a를 이용하고 싶으면 먼저 확인부터! typeof
    if (typeof a === 'number') {
        let b = a + 1
    }

    // any - 어떤 것도 담을 수 있는 💩
    let anything: any = 0;
    anything = 'hello';

    // void - 아무것도 return 하지 않을 경우, 생략 가능
    function print(): void {
        console.log('hello');
        return;
    }
    let unsable: void // 💩 이렇게 선언하는 경우는 거의 없음. 값은 undefined만

    // never - 아무것도 return 하지 않을 경우 (에러, 반복문) 
    function throwError(message: string): never {
        // message -> server (log)
        throw new Error(message)
        while (true) {

        }
    }
    let neverEnding: never; // 💩

    // object - 원시타입을 제외한 모든 오브젝트 타입을 전달할 수 있음 💩
    let obj: object;
    function acceptSomeObject(obj: object) {

    }
    acceptSomeObject({ name: 'sumin' });
    acceptSomeObject({ animal: 'cat' });

    let obj1: object = [1, 2]

}