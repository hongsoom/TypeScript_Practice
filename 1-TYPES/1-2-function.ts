{
    // JavaScript 💩
    function jsAdd(num1, num2) {
        return num1 + num2;
    }

    // TypeScript ✨
    function add(num1: number, num2: number): number {
        return num1 + num2;
    }

    // JavaScript 💩
    function jsFetchNum(id) {
        // code ...
        // code ...
        // code ...
        return new Promise((resolve, reject) => {
            resolve(100);
        })
    }

    // TypeScript ✨
    function fetchNum(id: string): Promise<number> {
        // code ...
        // code ...
        // code ...
        return new Promise((resolve, reject) => {
            resolve(100);
        })
    }

    // Optional parameter - 꼭 전달하지 않아도 되는 인자가 있을 경우 '?'를 작성
    function printName(firstName: string, lasetName?: string) {
        console.log(firstName);
        console.log(lasetName); // 전달하지 않으면 undefined
    }
    printName('Steve', 'Jobs');
    printName('Steve');
    printName('Steve', undefined);

    // Default parameter - 전달하지 않으면 설정해둔 default 값이 들어감
    function printMessage(message: string = 'default message') {
        console.log(message)
    }
    printMessage()

    // Rest parameter - 인자 개수 제한 없으며 인자들을 배열 형태로 받아올 수 있음
    function addNumbers(...numbers: number[]): number {
        return numbers.reduce((a, b) => a + b);
    }
    console.log(addNumbers(1, 2));
    console.log(addNumbers(1, 2, 3, 4));
    console.log(addNumbers(1, 2, 3, 4, 5, 0));

}