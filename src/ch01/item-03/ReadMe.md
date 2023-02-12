# Item 3: Understand That Code Generation Is Independent of Types

## 코드 생성과 타입이 관계없음을 이해하기

tsc는 크게 2가지를 합니다.

1. 최신 자바스크립트/javascript를 예전 자바스크립트로 변경합니다. (transpiling)
2. 내 코드에 에러가 있는지 확인합니다.

위 2개의 행동으 완전히 **독립적**입니다.

| 즉 내가 작성한 type관련된 코드들은 자바스크립트로 변환될때 어떤 영향도 주지 않습니다.

### Aha moment

타입스크리븥가 할 수 있는일과 할 수 없는일을 짐작할 수 있습니다.

타입 체크와 컴파일이 동시에 이루어지는 C나 자바와 달리 타입스크립트는 문제가 될 부분을
알려는 주지만 **빌드를 막지는 않는다.**

tsconfig.json에 noEmitOnError를 설정하면 오류가 있을때 빌드를 하지 않습니다.

```typescript
function calculateArea(shape: Shape) {
  if (shape instanceof Rectangle) {
    //'Rectangle' only refers to a type, but is being used as a value here.
    //Translation: I was expecting A as a type declaration but it is being used as a value here.
    return shape.width * shape.height;
    //Property 'height' does not exist on type 'Shape'.
  } else {
    return shape.width * shape.width;
  }
}
```

위 같은 경우 Rectangle은 타입이기 때문에 런타임 시점에 아무런 역할을 할 수 없음!!
타임 구문은 그냥 제거 되어버린다 생각하면 됨

```typescript
function calculateArea(shape: Shape) {
  if ("height" in shape) {
    return shape.width * shape.height;
    //                    ^? shape: Rectangle
  } else {
    return shape.width * shape.width;
  }
}
```

```typescript
interface Square {
  kind: "square";
  width: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
  if (shape.kind === "rectangle") {
    return shape.width * shape.height;
    //                      ^? shape: Rectangle
  } else {
    return shape.width * shape.width;
    //                     ^? shape: Square
  }
}
```

- 태그 방식으로 해결

### 런타임 타입은 선언된 타입과 다를 수있습니다.

```typescript
function setLightSwitch(value: boolean) {
  switch (value) {
    case true:
      turnLightOn();
      break;
    case false:
      turnLightOff();
      break;
    default:
      console.log(`I'm afraid I can't do that.`);
  }
}
```

해당 boolean으로 선언된 타입은 런타임시에 제거됩니다.
유저의 부주의로 "ON"이란 갑싱 들어가 실행될 수 있습니다.

```typescript
interface LightApiResponse {
  lightSwitchValue: boolean;
}
async function setLight() {
  const response = await fetch("/light");
  const result: LightApiResponse = await response.json();
  //      ^? result: LightApiResponse
  setLightSwitch(result.lightSwitchValue);
  //                      ^? LightApiResponse.lightSwitchValue :boolean
}

``;
```

배포된 API가 변겨왿어 lightSwitchValue가 문자열이 된다면..?
타입스크립트에서는 런타임 타입과 선언된 타입이 맞지 않을 수 있습니다.

### 주의
선언된 타입이 언제든지 달라질 수 있다는 것을 명심!


### 타입스크립트 타입은 런타임 성능에 영향을 주지 않습니다.
but
1. 빌드 타임에는 영향을 줌
2. native javascript보다 overhead가 있을수 있음
   1. generator라는 것을 사용한 코드가 있을때 es5로 변경할 경우 해당 코드를 구현하기 위해 helper코드가 emit될때 추가됨




