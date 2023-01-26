{
    interface Either<L, R> {
        left: () => L;
        right: () => R;
    }

    class SimpleEither<L, R> implements Either<L, R> {
        constructor(private leftValue: L, private rightValue: R) { }
        left(): L {
            return this.leftValue;
        }

        right(): R {
            return this.rightValue;
        }
    }
    const either: Either<number, number> = new SimpleEither(4, 5);
    either.left() // 4
    either.right() // 5

    const best = new SimpleEither({ name: 'sumin' }, 'hello');

    /* 추상클래스는 다른 클래스가 상속받을 수 있는 클래스
        그리고 직접 새로운 인스턴스를 만들 수 없음
        예를 들면, const sumin = new User("sumin", "hong", "수민")는 불가능
        
        추상메소드는 추상 클래스를 상속받는 모든 것들이 구현을 해야하는 메소드
        
        private : 프로퍼티가 private면, 클래스를 상속하였을지라도 접근 불가능
                당연히 밖에서 접근할 수 없고, 다른 자식 클래스에서도 접근 불가능
        protected : 클래스 밖에서 접근 불가능하지만 상속을 하면은 접근 가능
    */

    abstract class User {
        constructor(
            private firstName: string,
            public lastName: string,
            protected nickname: string
        ) { }
        abstract getNickNmae(): void
        getFullName() {
            return `${this.firstName} ${this.lastName}`
        }
    }

    class Player extends User {
        getNickNmae(): void {
            console.log(this.nickname)
        }
    }

    const sumin = new Player("sumin", "hong", "수민")
    sumin.getFullName()

}