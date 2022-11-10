{
    /* Type Inference - 추론
                      - 예제들은 간단하고 한눈에 봐도 아는 것이라 생략이 가능하지만 타입을 정확하게 명시(특히 함수는 더)
    */
    let text = 'hello'; // 따로 타입을 명시하지 않아도 에러 x 선언과 동시에 값을 문자열로 할당했기 때문에 타입스크립트에서 자동으로 타입 유추
    function print(message) { // 암묵적으로 any -> 어떤 값도 전달 받을 수 있음! 하지만 좋지 않으니 분명한 타입을 적어주자
        console.log(message);
    }
    print('hello');
    print(1);

    function print1(message: string) {
        console.log(message);
    }

    function print2(message = 'hello') { // defalut 기본값 string
        console.log(message);
    }

    function add(x: number, y: number) { // :number 생략
        return x + y;
    }

    const result = add(1, 2); // :number 생략

    function add1(x: number, y: number): number { // :number 생략
        return x + y;
    }

    const result1: number = add(1, 2); // :number 생략

}