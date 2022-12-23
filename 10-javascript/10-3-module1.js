/*
default : add라는 함수를 쓸 때 어떤 이름을 쓰던 나는 상관을 안한다!
또는 한 파일 안에는 default를 두 번 쓸 수 없음 한 번만 사용 가능
default가 아닌 그냥 export를 사용한다면 다른 모듈에서 부를 때 {} 안에 적어야함
ex) { print }
근데 print이름을 쓰고 싶지 않으면 {print as printMessage}라고 적으면 됨
*/
export default function add(a, b) {
    return a + b;
}

export const number = 10;
export function print() {
    console.log('print');
}