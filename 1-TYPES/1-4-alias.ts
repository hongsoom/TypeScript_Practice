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

    // 똑같은 내용을 반복하지 않게 Alias(별칭)타입 생성
    type Player = {
        name: string,
        age?: number
    }

    const sumin: Player = {
        name: "sumin"
    }

    const nico: Player = {
        name: "nico",
        age: 12
    }

    // 정리
    type Age = number;
    type Name = string;

    type Player1 = {
        name: Name,
        age?: Age
    }

    const sumin1: Player1 = {
        name: "sumin"
    }

    const nico2: Player1 = {
        name: "nico",
        age: 12
    }

    // String Literal Types - 타입을 문자열로 정의
    type Name1 = "name";
    let suminName: Name1;
    suminName = 'name'; // 어떠한 문자열을 넣어서는 안됨 정의된 'name'만 가능

    type JSON = 'json';
    const json: JSON = 'json';

    type Boal = true;
    const isCat: Boal = true;

}