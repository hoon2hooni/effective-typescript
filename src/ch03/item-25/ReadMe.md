## 아이템 25 비동기 코드에는 콜백 대신 async 함수 사용하기

## Item 25: Use async Functions Instead of Callbacks for Asynchronous Code

```typescript
fetchURL(url1, function (response1) {
  fetchURL(url2, function (response2) {
    fetchURL(url3, function (response3) {
      console.log(1);
    });
    console.log(2);
  });
  console.log(3);
});
console.log(4);
```

```typescript
function timeout(millis: number): Promise<never> {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("timeout"), millis);
  });
}

async function fetchWithTimeout1(url: string, ms: number) {
  return Promise.race([fetch(url), timeout(ms)]);
}

async function fetchWithTimeout2(url: string, ms: number) {
  return Promise.race([fetch(url), timeout(ms)]);
}
```

`Promise<Response | never>`
의 경우 공집합과의 유니온이기에 `Promise<Response>`로 추론됩니다.

일반적으로는 프로미스를 생성하기보다는 async/await를 사용하자.

2가지 이유
1. 더 간결하고 직관적인 코드
2. async함수는 항상 프로미스를 반환하도록 강제


async 함수에서 프로미스를 반환하면 또 다른 프로미스로 래핑되지 않습니다! 
반환 타입은 Promise<Promise<T>>가 아닌 Promise<T>가 됩니다. 
타입스크립트를 사용하면 타입 정보가 명확히 드러나기 때문에 비동기 코드의 개념을 잡는데 도움이 됩니다.


