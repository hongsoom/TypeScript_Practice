{
    /*  Call Signatures : 함수의 매개변수와 반환 값의 타입을 모두 type으로 미리 선언하는 것
    Alias와 다른 점 - alias is like : type Name = string VS 함수의 인수, 반환 값 타입 
    */

    type Add = (a: number, b: number) => number

    const add: Add = (a, b) => a + b;

    // 오버로딩 : 함수가 서로 다른 여러 개의 Call Signatures를 가지고 있을 때 발생

    // 파라미터의 데이터 타입이 다른 경우
    type Add1 = {
        (a: number, b: number): number
        (a: number, b: string): number
    }

    const add1: Add1 = (a, b) => a + b // 에러
    const add1_: Add1 = (a, b) => {
        if (typeof b === "string") return a
        return a + b
    }

    /* 예제) Next.js - Router = string or object
    Router.push({
        path: "/home",
        state: 1
    })

    Router.push("/home")
    */

    type Config = {
        path: string,
        state: object
    }

    type Push = {
        (path: string): void
        (config: Config): void
    }

    const push: Push = (config) => {
        if (typeof config === "string") { console.log(config) }
        else {
            console.log(config.path, config.state)
        }
    }

    // 파라미터의 개수가 다를 때 ( c는 옵션 )
    type Add2 = {
        (a: number, b: number): number
        (a: number, b: number, c: number): number
    }

    const add2: Add2 = (a, b, c?: number) => {
        if (c) return a + b + c
        return a + b
    }
}