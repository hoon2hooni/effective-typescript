## Item 9: Prefer Type Declarations to Type Assertions

## 아이템 9 타입 단언보다는 타입 선언을 사용하기

타입스크립트에서 변수에 값을 할당하고 타입을 부여하는 방법은 두 가지 입니다.

```typescript
interface Person {
  name: string;
}

//변수에 타잆 선언(type declaration)
const alice: Person = { name: "Alice" };

//타입 단언(type assertion)
const bob = { name: "Bob" } as Person;
```

타입단언 보단 타입선언을!!

### 왜 타입단언 보다 타입선언을 해야하는가?

타입단언을 할경우 강제로 타입을 지정하기에 타입 체커에게 오류를 무시하라고 하는것임

```typescript
const hooni: Person = {
  name: "hooni",
  occupation: "developer",

  //Type '{ name: string; occupation: string; }' is not assignable to type 'Person'.
};
const nami = {
  name: "nami",
  occupation: "designer",
} as Person;
//no Error
```

### 단언이 유용할때

만약 타입스크립트보다 타입 정보를 더 잘 알고있는 확실한 상황에서는 타입 단언문을 사용하면 된다.


```typescript
document.querySelector("#myButton").addEventListener("click", (e) => {
  e.currentTarget; // Type is EventTarget
  const button = e.currentTarget as HTMLButtonElement;
  button; // Type is HTMLButtonElement
});


const body = document.body;
const elByUnknown = body as unknown as Person;

```
