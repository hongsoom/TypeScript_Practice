{
    /* Union Types - OR 모든 가능한 케이스 중에 발생할 수 있는 딱 하나의 타입만 담고 싶을 때
                   - TypeScript에서 활용도가 굉장히 높은 타입
    */
    type Direction = "left" | 'right' | 'up' | 'down';
    function move(direction: Direction) {
        console.log(direction)
    }
    move('left')

    type TilseSize = 8 | 16 | 32;
    const title: TilseSize = 16;

    // function: login -> success, fail
    type SuccessState = {
        response: {
            body: string;
        };
    };

    type FailState = {
        reason: string;
    };

    type LoginState = SuccessState | FailState

    function login(): SuccessState | FailState {
        return {
            response: {
                body: "logged in!",
            },
        }
    }

    function login1(): LoginState {
        return {
            response: {
                body: "logged in!",
            },
        }
    }

    /*     function login2(id: string, password: string): Promise<LoginState> {
            return {
                response: {
                    body: "logged in!",
                },
            }
        } */

    // printLoginState(state: LoginState)
    // success -> body 🎉
    // fail -> reason 😥
    function printLoginState(state: LoginState): void {
        if ('response' in state) {
            console.log(`🎉 ${state.response.body}`)
        } else {
            console.log(`😥 ${state.reason}`)
        }
    }


}