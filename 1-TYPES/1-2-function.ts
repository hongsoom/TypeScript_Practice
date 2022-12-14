{
    // JavaScript π©
    function jsAdd(num1, num2) {
        return num1 + num2;
    }

    // TypeScript β¨
    function add(num1: number, num2: number): number {
        return num1 + num2;
    }

    // JavaScript π©
    function jsFetchNum(id) {
        // code ...
        // code ...
        // code ...
        return new Promise((resolve, reject) => {
            resolve(100);
        })
    }

    // TypeScript β¨
    function fetchNum(id: string): Promise<number> {
        // code ...
        // code ...
        // code ...
        return new Promise((resolve, reject) => {
            resolve(100);
        })
    }

    // Optional parameter - κΌ­ μ λ¬νμ§ μμλ λλ μΈμκ° μμ κ²½μ° '?'λ₯Ό μμ±
    function printName(firstName: string, lasetName?: string) {
        console.log(firstName);
        console.log(lasetName); // μ λ¬νμ§ μμΌλ©΄ undefined
    }
    printName('Steve', 'Jobs');
    printName('Steve');
    printName('Steve', undefined);

    // Default parameter - μ λ¬νμ§ μμΌλ©΄ μ€μ ν΄λ default κ°μ΄ λ€μ΄κ°
    function printMessage(message: string = 'default message') {
        console.log(message)
    }
    printMessage()

    // Rest parameter - μΈμ κ°μ μ ν μμΌλ©° μΈμλ€μ λ°°μ΄ ννλ‘ λ°μμ¬ μ μμ
    function addNumbers(...numbers: number[]): number {
        return numbers.reduce((a, b) => a + b);
    }
    console.log(addNumbers(1, 2));
    console.log(addNumbers(1, 2, 3, 4));
    console.log(addNumbers(1, 2, 3, 4, 5, 0));

}