{
    // Array
    const fruits: string[] = ['π', 'π₯­'];
    const num: number[] = [1, 3, 4];

    const scroes: Array<number> = [1, 3, 4];

    function printArray(fruits: readonly string[]) {
        /* readonly : μ£Όμ΄μ§ λ°μ΄ν°λ₯Ό ν¨μ λ΄λΆμμ λ³κ²½μ ν  μ μλλ‘
            fruits: readonly string[] β­
            fruits: readonly Array<string> β
        */
    }

    // Tuple - μλ‘ λ€λ₯Έ νμμ ν¨κ» κ°μ§ μ μλ λ°°μ΄ 
    // interface, type alias, class
    let student: [string, number];
    student = ['name', 123];
    student[0] // name π©
    student[1] // 123 π©

    const [name, age] = student; // λ°μ΄ν° μλ³Έμ΄ μλλΌ μμλΌμ π©
}