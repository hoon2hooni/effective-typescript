## Item 5: Limit Use of the any Type

![image](https://user-images.githubusercontent.com/70311004/218365079-2534ee91-789a-4ffe-8b08-d72324c0dfc2.png)
<br/>

지금은 달콤해보이지만...아주 큰 독이된다!!!

### any 타입 지양하기!! (중요)

```typescript
let age: number;
age = "12";
//Type 'string' is not assignable to type 'number'.
age = "12" as any; // OK
```

**any 타입에는 타입 안정성이 없습니다.**

**any Lets You Break Contracts(any는 함수 시그니처를 무시합니다)**

```typescript
function calculateAge(birthDate: Date): number {
  // ...
  return birthDate.getTime(); // OK
}
let birthDate: any = "1990-01-19";
//  ^?
calculateAge(birthDate);
//에러 발생
```

자바스크립트는 종종 암시적으로 타입이 변환됩니다.

**There Are No Language Services for any Types**
ide의 장점을 활용할 수 없게 됩니다.

<img width="621" alt="image" src="https://user-images.githubusercontent.com/70311004/218362948-1e808864-e91b-408a-98e0-bad7b63cfcf8.png">

<img width="348" alt="image" src="https://user-images.githubusercontent.com/70311004/218363173-79fa16f7-a092-42b4-a841-f42b9dc08f74.png">

<img width="466" alt="image" src="https://user-images.githubusercontent.com/70311004/218363243-84d9e0cf-049c-4b12-ba3a-79b2e63b92dc.png">

<img width="354" alt="image" src="https://user-images.githubusercontent.com/70311004/218363292-ae330260-c02a-40ae-b1a1-4b5d379187cf.png">

rename symbol

<img width="294" alt="image" src="https://user-images.githubusercontent.com/70311004/218363361-f8f5bfa7-f468-4d17-b499-6c7645d41d50.png">

타입스크립트의 모토는 확장가능한 자바스크립트입니다.
타입을 지정됨으로써, ide의 혜택을 받는 부분을 any를 사용하면
모든 혜택이 사라집니다.

**any Types Mask Bugs When You Refactor Code**
**any 타입은 코드 리팩터링 때 버그를 감춥니다..**

**any Hides Your Type Design**

any를 사용함으로써 타입 설계가 불분명해짐
이는 동료가 코드를 검토해야 할 때 코드부터 재구성하고...아주 오래걸릴듯
지금 타입 정하기 힘들다고 any를 사용하는것은
미래의 나, 그리고 동료에게....큰 나비효과를 불러올 것이다.

**any Undermines Confidence in the Type System**

타입 체크는 내 실수를 잡아내고 타입 시스템의 신뢰도가 향상한다.

만약 ...타입체크는 통과했으나 런타임에서 에러가 발생한다면
신뢰도에 큰 타격을 줄것이다.

이것은 동료들에게 타입스크립트를 사용하는게 ..좋은것인가? 라는 의구심을 줄 것이다.

타입스크립트의 목적은 개발을 더 쉽게 해주는 것인데 만약 중간에 끼어있는 any로 인해 예상치 못한 에러를 마주하게 된다면, 그냥 자바스크립트로 개발하는것보다 작업이 어려워 질 수 있습니다.

이는 다시 ...이 변수는 어떤 타입이다 라고 머릿속으로 외워가면서 개발을 해야하게 됩니다.

물론 어떤 경우에는 any를 꼭 사용해야만 하는 경우도 있습니다.
ch05에 해당 상황 그리고 any를 피할수 있는 방법등에 배워봅시다.
