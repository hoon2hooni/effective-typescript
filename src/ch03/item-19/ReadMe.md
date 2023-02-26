## Item 19: Avoid Cluttering Your Code with Inferable Types

## 아이템 19 주론 가능한 타입을 사용해 장황한 코드 방지하기

```typescript
//before
let x: number = 12;

//after

let x = 12;
```

TypeScript, a variable’s type is generally determined when it is first introduced.
타입스크립트의 경우 처음 선언될때 타입이 결저오딤

이상적인 타입스크립트 코드는 **함수/메서드 시그니처 에 타입 구문을 포함**하지만
**함수 내에서 생성된 지역 변수에는 타입 구문을 넣지 않습니다.**
**타입 구문을 생략하여 방해되는 것들을 최소화하고 코드를 읽는 사람이 구현 로직에 집중**할 수 있게 하는 것이 좋습니다.

## 반환타입 명시

```typescript
const _cache: { [ticker: string]: number } = {};
function getQuote(ticker: string): Promise<number> {
  if (ticker in cache) {
    return _cache[ticker];
    // ~~~~~~~~~~~~~ Type 'number' is not assignable to 'Promise<number>'
  }
  // ...
}
```

1. 반환 타입을 명시하면 함수에 대해 더욱 명확하게 알 수 있음
2. 명명된 타입(Named Type)을 사용하기 위함


### 요약
1. 추론 가능하면 type annotation을 작성하는 것은 최대한 지양하자
2. 이상적인 경우 함수/메서드 선언시 타입이 있지만, 함수 내의 지역변수에느 타입구문이 없습니다.
3. 추론될 수 있는 경우라도 객체 리터럴과 함수 반환시에는 타입 명시를 고려해야함 (내부 구현시 오류 방지 type driven develop)