let city = "New York City";
city.toUppercase();
//^?

const states = [
  { name: "Alabama", capital: "Montgomery" },
  { name: "Alaska", capital: "Juneau" },
  { name: "Arizona", capital: "Phoenix" },
  // ...
];
for (const state of states) {
  console.log(state.capital);
  //            ^?
}

interface State {
  name: string;
  capital: string;
}
/**
 * 타입에러
 */
const states: State[] = [
  { name: "Alabama", capitol: "Montgomery" },
  { name: "Alaska", capitol: "Juneau" },
];

/**
 * 타입에러 x
 */
const states: State[] = [
  { name: "Alabama", capital: "Montgomery" },
  { name: "Alaska", capital: "Juneau" },
];

const x = 2 + "3";
//    ^?

const y = "2" + 3;
//    ^?

/**
 * 위 코드는 실제로 javascript에서 실행이 됩니다.
 * 하지만 typescript의 타입 체커는 문제점을 표시합니다.
 * 그저 갓..
 */
const a = null + 7;
//The value 'null' cannot be used here.

const b = [] + 12;
//Operator '+' cannot be applied to types 'never[]' and 'number'.

alert("Hello", "TypeScript");
//Expected 0-1 arguments, but got 2.

// const names = ["Alice", "Bob"];
// console.log(names[2].toUpperCase());
//에러 발생 x
//TypeError: Cannot read property 'toUpperCase' of undefined


/**
 * https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html
 */
const names = ["Alice", "Bob"] as const;
console.log(names[2].toUpperCase());
//as const 사용하면 타입 에러 잡을수 있음! (tip)