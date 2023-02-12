# 아이템 1: 타입스크립트와 자바스크립트 관계 이해하기

타입스크립트는 자바스크립트의 상위 집합(superset)이다.



모든 자바스크립트는 타입스크립트 입니다. (ㅇ)
모든 타입스크립트가 자바스크립트 입니다. (x)

```javascript

let city = 'new your city';
console.log(city.toUppercase())
//TypeError: city.toUppercase is not a function
```


```TypeScript

let city = 'new york city'
console.log(city.toUppercase())
// ~~~~~~~~~~~ Property 'toUppercase' does not exist on type
 // 'string'. Did you mean 'toUpperCase'?


```