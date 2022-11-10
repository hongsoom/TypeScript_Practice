{
    // function: login -> success, fail
    type SuccessState = {
        result: 'success';
        response: {
            body: string;
        };
    };

    type FailState = {
        result: 'fail';
        reason: string;
    };

    type LoginState = SuccessState | FailState

    function login3(): LoginState {
        return {
            result: 'success',
            response: {
                body: "logged in!",
            },
        }
    }

    // printLoginState(state: LoginState)
    // success -> body 🎉
    // fail -> reason 😥
    function printLoginState2(state: LoginState): void {
        if (state.result === 'success') {
            console.log(`🎉 ${state.response.body}`)
        } else {
            console.log(`😥 ${state.reason}`)
        }
    }
}