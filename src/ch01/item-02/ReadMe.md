# Item 2: Know Which TypeScript Options You’re Using
## 타입스크립트 설정 이해하기


타입스크립트를 사용할때 제대로 사용하기 위해선 아래 2개는 켜주는게 좋다
"noImplicitAny": true,
"strictNullChecks": true,

```typescript
function add(a, b) {
  //Parameter 'a' implicitly has an 'any' type.
  return a + b;
}

```


```typescript
const x: number = null;
//Type 'null' is not assignable to type 'number'.
```

strictNullChecks의 경우 null과 undefined로 인해 생기는 오류들을 잡는데 매우 효과적이다

단 이미 javascript로 되어있는 프로젝트를 typescript로 migration할때
strictNullChecks사용은 조금 고려해보자.

strictNullChecks를 설정하기 위해선 noImplicitAny를 먼저 설정해야 함
You should certainly set noImplicitAny before you set strictNullChecks.

strict를 true로 할 경우
noImplicitThis
and strictFunctionTypes
들도 true가됨

### 정리
"undefined는 객체가 아닙니다"와 같은 런타임 오류를 방지하기 위해 strictNullChecks를 설정하는게 좋다.
