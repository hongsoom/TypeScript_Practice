{
    // Array
    const fruits: string[] = ['🍓', '🥭'];
    const num: number[] = [1, 3, 4];

    const scroes: Array<number> = [1, 3, 4];

    function printArray(fruits: readonly string[]) {
        /* readonly : 주어진 데이터를 함수 내부에서 변경을 할 수 없도록
            fruits: readonly string[] ⭕
            fruits: readonly Array<string> ❌
        */
    }

    const names: readonly string[] = ['1', '2'];

    /* Tuple - 서로 다른 타입을 함께 가질 수 있는 배열 
            항상 정해진 갯수의 요소를 가져야 하고 정해진 타입대로 순서대로 값을 넣어야함
    interface, type alias, class */
    const player: [string, number, boolean] = ['sumin', 27, true];

    let student: [string, number];
    student = ['name', 123];
    student[0] // name 💩
    student[1] // 123 💩

    const [name, age] = student; // 데이터 원본이 아니라 임의라서 💩
}