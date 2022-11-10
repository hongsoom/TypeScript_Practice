{
    // Type Assertions ! - 어떤 타입을 return 하는지 분명히 알 경우 (100% 장담) 💩
    function isStrFunc(): any {
        return 'hello';
    }
    const result = isStrFunc(); // hello

    // result의 문자열의 길이를 알고싶지만 알지 못한다 any type이기 때문에! 즉, result.length ❌
    (result as string).length;
    (<string>result).length;

    const wrong: any = 5;
    console.log((wrong as Array<number>).push(1)); // 😱

    function findNumbers(): number[] | undefined {
        return undefined;
    }
    const numbers = findNumbers();
    numbers!.push(2) // numbers.push(2) 😱 undefined도 될 수 있기 때문에 그래서 '!'는 진짜로 장담할 때 사용
}