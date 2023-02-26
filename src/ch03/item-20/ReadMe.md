## Item 20: Use Different Variables for Different Types

## 아이템 20 다른 타입에는 다른 변수 사용하기

자바스크립트에서는 한 변수를 다른 목적을 가지는 다른 타입으로 재사용해도 됩니다.

```javascript
let id = "12-34-56";
fetchProduct(id); // Expects a string
id = 123456;
fetchProductBySerialNumber(id); // Expects a number
```

```typescript
let id = "12-34-56";
id = 123456;
//Type 'number' is not assignable to type 'string'.
```

```typescript
let _id: string | number = "12-34-56";
_id = 123456; // OK
```

유니온 타입으로 코드가 동작하기는 하겠지만 더 많은 문제가 생길 수 있습니다.
id를 사용할 때마다 값이 어떤 타입인지 확인해야함.
**유니온 타입**은 string이나 number같은 **간단한타입에 비해 다루기 더 어렵습니다.**

## 다른 타입에는 별도의 변수를 사용하자

- 서로 관련이 없는 두 개의 값을 분리합니다(id와 serial).
- 변수명을 더 구체적으로 지을 수 있습니다.
- 타입 추론 향상 시키며,타입 구문이 불필요해집니다.
- 타입이 좀 더 간결해집니다(string | number 대신 간단한 타입인 string과 number를 사용).
- let 대신 const로 변수를 선언하게 됩니다. (const로 할 경우 코드 간결 + 타입 추론에 더 좋음)


“shadowed”와 혼동해선 안됨!

```typescript
const id = "12-34-56";
fetchProduct(id);
{
  const id = 123456; // OK fetchProductBySerialNumber(id); // OK
}
```


여기서 두 id는 이름이 같지만 서로 관계x
그러므로 각기 다른 타입으로 사용되어도 문제없습니다.

동일한 변수명에 타입이 다르다면, 
타입스크립트 코드는 잘 동작 하더라도 
동료에게 혼란을 줄 수 있습니다.


## 요약
- 변수의 값은 바뀔 수 있지만 타입은 일반적으로 바뀌지 않습니다.
- 혼란을 막기 위해 타입 이 다른 값을 다룰 때 에는 변수를 재사용히지 않도록합니다.

