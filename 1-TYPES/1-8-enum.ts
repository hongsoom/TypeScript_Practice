{
    /* Enum - 여러가지 관련된 상수 값들을 한곳에 모아서 정의할 수 있게 도와주는 타입
            - 자바스크립트에서는 존재 x, 타입스크립트에서 자체적으로 제공
    */

    // JavaScript
    const MAX_NUM = 6;
    const MAX_STUDENTS_PER_CLASS = 10;
    const MONDAY = 0;
    const TUESSDAY = 1;
    const WEDNESDAY = 2;
    const DAYS_ENUM = Object.freeze({ "MONDAY": 0, "TUESSDAY": 1, "WEDNESDAY": 2 });
    const datOfToday = DAYS_ENUM.MONDAY; // 0

    // TypeScript
    type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday'
    enum Days {
        Monday, // 0 -> 0이 아닌 1로 하고 싶으면 Monday = 1 
        Tuesday, // 1
        Wednesday, // 2
        Thursday, // 3
        Friday, // 4
        Satarday, // 5
        Sunday // 6
    }
    // 문자열도 가능 Monday = 'monday' 그렇지만 다음 Tuesday, Wednesday들은 어떤 문자열이 올지 모르기 때문에 수동적으로 전부 다 적어야함

    let day: Days = Days.Satarday;
    day = Days.Tuesday;
    day = 1; // 문제점 💩 할당이 가능

    let daysOfweek: DaysOfWeek = 'Monday';
    daysOfweek = 'Wednesday'; // 다른건 할당이 안됨 무조건 선언한 Monday, Tuesday, Wednesday  

    /* Enum는 충분히 Union으로 대체가 가능해서 Enum를 쓰지 않고 Union으로 사용해서 타입을 보장하자!
        Enum를 쓸 수 밖에 없는 경우 : 안드로이드, ios
    */
}