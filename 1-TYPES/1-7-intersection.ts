{
    // Intersection Types : and & 다양한 타입들을 하나로 묶어서 선언할 수 있음

    type Student = {
        name: string;
        score: number;
    }

    type Worker = {
        empolyeeId: number;
        work: () => void;
    }

    function interWork(person: Student & Worker) {
        console.log(person.name, person.empolyeeId, person.work());
    }

    interWork({
        name: 'sumin',
        score: 1,
        empolyeeId: 123,
        work: () => { }
    })
}
