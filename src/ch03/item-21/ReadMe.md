## Item 21: Understand Type Widening

## 아이템 21 타입 넓히기

```typescript
interface Vector3 {
  x: number;
  y: number;
  z: number;
}
function getComponent(vector: Vector3, axis: "x" | "y" | "z") {
  return vector[axis];
}

let x = "x";
//  ^?
let vec = { x: 10, y: 20, z: 30 };
getComponent(vec, x);
//Argument of type 'string' is not assignable to parameter of type '"x" | "y" | "z"'.
```

왜 위 코드는 에러를 발생할까?
타입스크립트는 x를 string으로 추론함
반면에 getComponent의경우 더 구체적인 타입으로 명시가 되어있음
여기서 타입 넓히기(widening)이 작용한것이다.
그리고 이것이 에러를 발생시켰다.

```typescript
const mixed = ["x", 1];
//(string|number)[]
```

```javascript
let x = "x";
x = /x|y|z/;
x = ["x", "y", "z"];
```

위 코드 자바스크르립트에서는 가능
타입스크립트에서는 불가능

```typescript
const v = { x: 1 };
v.x = 3;
v.x = "3";
//Type 'string' is not assignable to type 'number'.
v.y = 4;
//Property 'y' does not exist on type '{ x: number; }'.
v.name = "Pythagoras ";
//Property 'name' does not exist on type '{ x: number; }'.
```

위 v의경우
가장 구체적 인 경우라면 {readonly x: 1}임

가장 추상적
{{[key: string]: number}

자세한 내용 아이템23

### 타입 추론의 강도를 직접 제어하는 방법

1. 명시적 타입구문 제공

```typescript
const v: {x: 1|3|5} = { x: 1,
}; // Type is { x: 1 | 3 | 5; }
`
```

2. 타입 체커에 추가적인 문맥(additional context)제공 (아이템 26)
3. 타입 단언문 (type assertion)사용

```typescript
const v1 = { x: 1, y: 2 };
// const v1: {
//     x: number;
//     y: number;
// }

const v2 = { x: 1 as const, y: 2 };
//  const v2: {
//   x: 1;
//   y: number;
// }

const v3 = { x: 1, y: 2 } as const;
//  const v3: {
//     readonly x: 1;
//     readonly y: 2;
// }
```

## 요약
- 타입스크립트가 타입을 추론하는 방법을 이해해야함(widening)
- 타입 추론의 강도를 직접 제어할 수 있는 방법에 익숙해야함


