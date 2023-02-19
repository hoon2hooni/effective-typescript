# Item 12: Apply Types to Entire Function Expressions When Possible

## 아이템 12 함수 표현식에 타입 적용하기

```typescript
function rollDice1(sides: number): number {
  /*...*/
} // Statement(문장)
const rollDice2 = function (sides: number): number {
  /* ... */
}; // Expression(표현식)
const rollDice3 = (sides: number): number => {
  /* ... */
}; // Also expression(표현식)
```

함수 타입으로 선언하여 **함수 표현식**에 재사용할 수 있기에
타입스크립트에서는 **함수 표현식**을 사용하는 것이 좋습니다.

```typescript
type DiceRollFn = (sides: number) => number;
```

### 문장으로 했을때
```typescript
function add(a: number, b: number) {
  return a + b;
}
function sub(a: number, b: number) {
  return a - b;
}
function mul(a: number, b: number) {
  return a * b;
}
function div(a: number, b: number) {
  return a / b;
}
```

### 표현식으로 했을때 재사용가능한 예시
```typescript
type BinaryFn = (a: number, b: number) => number;
const add: BinaryFn = (a, b) => a + b;
const sub: BinaryFn = (a, b) => a - b;
const mul: BinaryFn = (a, b) => a * b;
const div: BinaryFn = (a, b) => a / b;
```
