# Item 13: Know the Differences Between type and interface

## 아이템 13 타입과 인터페이스의 차이점 알기

타입스크립트에서 named type을 정의하는 방법 두가지

```typescript
//1. type
type TState = { name: string; capital: string };

//2. interface

interface IState {
  name: string;
  capital: string;
}
```

interface 유니온타입(|) 같은 복잡한타입을 확장 하지는 못한다는 것 입니다. 복잡한 타입을 확장하고 싶다면 type과 &률 사용해야 합니다.

유니온 타입은 있지만 유니온 인터페이스라는 개념은 없습니다.

```typescript
type AorB = "a" | "b";
```

```typescript
type NamedVariable = (Input I Output) & { name: string };
```

위 타입은 인터페이스로 표현 불가

```typescript
interface Tuple {
  0: number;
  1: number;
  length: 2;
}
type TTuple = [number, number];
const t: Tuple = [10, 20];
const t2: TTuple = [10, 20];
```

## 인터페이스만 가능한 declaration merging

```typescript
interface IState {
  name: string;
  capital: string;
}
interface IState {
  population: number;
}
const muyaho: IState = {
  name: "muyaho",
  capital: "Cheyenne",
  population: 500_000,
}; // OK
```

프로젝트에서 어떤 문법을 사용할지 결정할 때 한 가지 일관된 스타일을 확립하고,보강기법이 필요한지 고려해야합니다.
