
## ① 기본 타입</a>

- <a href="./1-TYPES/1-1-basic.ts"> `기본 타입 정리`

  - number
  - string
  - booean
  - undefined
  - null
  - unknown
  - any
  - void
  - never
  - object

- <a href="./1-TYPES/1-2-function.ts"> `JS -> TS` `함수 타입`

  - spread
  - default
  - optinal

- <a href="./1-TYPES/1-3-array.ts"> `Array and Tuple`
  
  - Array -> readonly
  - Tuple -> interface, type alias, class

- <a href="./1-TYPES/1-4-alias.ts"> `Type Alias`
  
  - Type Aliases
  - String Literal Types

- <a href="./1-TYPES/1-5-union.ts"> `Union`
  
  OR |

- <a href="./1-TYPES/1-6-discriminated.ts"> `Discriminated Union`
  
- <a href="./1-TYPES/1-7-intersection.ts"> `Intersection`
  
   and &

- <a href="./1-TYPES/1-8-enum.ts"> `Enum`

- <a href="./1-TYPES/1-9-inference.ts"> `Type Inference`

- <a href="./1-TYPES/1-10-assertion.ts"> `Type Assertion`
  
  !

## ② 객체지향</a>

- <a href="./3-OOP/3-1-without-oop.ts"> `절차지향 프로그래밍`

- <a href="./3-OOP/3-2-class.ts"> `객체지향 프로그래밍`

  - class 생성 : template
  - let, const, function 키워드 X
  - this
  - constructor()
  - new 키워드 : instance
  - static 키워드 : class level

- <a href="./3-OOP/3-3-encapsulation.ts"> `캡슐화`

  - public
  - private
  - protected

- <a href="./3-OOP/3-4-abstraction.ts"> `추상화`

  - private : 외부에서 호출을 못하게
  - interface

- <a href="./3-OOP/3-5-inheritance.ts"> `상속`

  - extends 키워드
  - 오버라이팅
  - super 키워드
  - constructor()

- <a href="./3-OOP/3-6-polymorphism.ts"> `다향성`

  - 한가지의 class, interface

- <a href="./3-OOP/3-7-composition.ts"> `composition`

  - 상속의 문제점
  - interface

- <a href="./3-OOP/3-8-abstract.ts"> `abstract`

  - abstract 키워드
  - protected

## ③ 제너릭</a>


## 타입 스크립트를 쓰는 이유
자바스크립트에선 필요한 argument는 두 개인데 하나만 보내도 실행이 되고 심지어 객체 안에 존재하지 않는 함수를 호출할 수 있다. 하지만 코드가 실행이 되고 나서야 에러 메세지를 볼 수있게 되는데 이것은 최악의 타이밍이다. (`런타임 에러`)

**코드를 실행하기도 전에 에러를 잡아내고 싶기 때문에 타입스크립트를 사용!**

## 타입 스크립트란?
1. Strongly typed programming

2. 작성한 코드가 컴파일 시 javascript로 변환된다.

3. 에러가 발생되면 컴파일 자체가 되지 않는다.

4. 타입 추론 and 타입 지정(명시적 지정)
```JSX
// 타입스크립트는 타입을 쓰지 않아도 a가 string이라는 것을 인지
let a = "hello"
a = "bye"
a = 1 // 에러
```

```JSX
// Type Checker가 타입을 확인
let b : bollean = false
```

