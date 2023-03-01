## Item 23: Create Objects All at Once

## 아이템 23 한꺼번에 객체 생성하기

### 타입에러 1

```typescript
const pt = {};
pt.x = 3;
// Property 'x' does not exist on type '{}'
```

### 타입에러 2

```typescript
type Point = {
  x: number;
  y: number;
};
const pt: Point = {};
//Type '{}' is missing the following properties from type 'Point': x, y
```

### 해결책

```typescript
const pt = {
  x: 3,
  y: 4,
};
pt;
// const pt: {
//   x: number;
//   y: number;
// };
```

### 객체를 나눠서 만들어야 할 경우

**단언문 활용**

```typescript
type Point = {
  x: number;
  y: number;
};
const pt = {} as Point;
pt.x = 3;
pt.y = 4;
```

**선언 활용**

```typescript
const ptBetter: Point = {
  x: 3,
  y: 4,
};
```

### object합치는 방법

Object.assign은 에러발생
**spread로 해결**

```typescript
const pt = { x: 3, y: 4 };
const id = { name: "Pythagoras" };
const namedPoint = {};
Object.assign(namedPoint, pt, id);
namedPoint.name;

//spread로 해결
const namedPointWithoutError = { ...pt, ...id };
//
```

### spread활용시 type safe하는법

```typescript
type Point = {
  x: number;
  y: number;
};
const pt0 = {};
const pt1 = { ...pt0, x: 3 };
const pt: Point = { ...pt1, y: 4 }; // OK
```

선택적으로 특정 property 추가해주는 방법

**에러**

```typescript
const president:
  | { middle: string; first: string; last: string }
  | {
      first: string;
      last: string;
    } = { ...firstLast, ...(hasMiddle ? { middle: "S" } : {}) };
president.middle = "얍";
//에러발생 Property 'middle' does not exist on type '{ first: string; last: string; }'.
```

**addOptional 함수로 해결**

```typescript
const president:
  | { middle: string; first: string; last: string }
  | {
      first: string;
      last: string;
    } = { ...firstLast, ...(hasMiddle ? { middle: "S" } : {}) };
president.middle = "얍";
//에러발생 Property 'middle' does not exist on type '{ first: string; last: string; }'.
```
