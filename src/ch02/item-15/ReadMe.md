# Item 15: Use Index Signatures for Dynamic Data
## 아이템 15 동적 데이터에 인덱스 시그니저 사용하기


type Rocket = { [property: string]: string };
//특정 키가 필요하지 않습니다. {}도 유효한 Rocket 타입입니다.
const rocketEmpty: Rocket = {};


인덱스 시그니처를 활용하면 유연하게 매핑을 표현할 수 있음

유연한 만큼 단점도 많음
1. 자동완성 기능 동작하지 않음
2. 
