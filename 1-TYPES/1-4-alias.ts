{
    // Type Aliases - 새로운 타입을 내가 정의할 수 있다
    type Text = string;
    type Num = number;
    const name: Text = 'sumin';
    const address: Text = 'korea';

    type Student = {
        name: string;
        age: number;
    };
    const student: Student = {
        name: 'sumin',
        age: 12,
        // 정의한 데이터를 꼭 써줘야함 안그러면 오류 
    };

    // String Literal Types - 타입을 문자열로 정의
    type Name = "name";
    let suminName: Name;
    suminName = 'name'; // 어떠한 문자열을 넣어서는 안됨 정의된 'name'만 가능

    type JSON = 'json';
    const json: JSON = 'json';

    type Boal = true;
    const isCat: Boal = true;

}