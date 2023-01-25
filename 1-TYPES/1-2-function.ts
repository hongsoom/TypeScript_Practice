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

    type Player = {
        name: string,
        age?: number
    }

    function playerMaker(name: string): Player {
        return {
            name
        }
    }

    const playerMaker1 = (name: string): Player => ({ name })

    const sumin = playerMaker("sumin")
    sumin.age = 12

    // Optional parameter - 꼭 전달하지 않아도 되는 인자가 있을 경우 '?'를 작성
    function printName(firstName: string, lasetName?: string) {
        console.log(firstName);
        console.log(lasetName); // 전달하지 않으면 undefined
    }
    printName('Steve', 'Jobs');
    printName('Steve');
    printName('Steve', undefined);

    const player: {
        name: string,
        age?: number // 선택 (player가 age를 가지고 있거나 가지고 있지 않거나)
    } = {
        name: "sumin"
    }

    if (player.age && player.age < 10) {
        // player.age &&가 없으면 에러! 선택적이기 때문에(optional parameter)
    }

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
