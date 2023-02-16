type AB12 = "A" | "B" | 12;
const ab = Math.random() < 0.5 ? "A" : "B";

const ab12: AB12 = ab;

interface Person {
  name: string;
}
interface Lifespan {
  birth: Date;
  death?: Date;
}
type PersonSpan = Person | Lifespan;
type PersonSpanKeys = keyof PersonSpan;
//    ^?
//해당 타입은?

type A = keyof Person | keyof Lifespan;
//   ^?

interface Person {
  name: string;
}
const hooni = { name: "hooni", age: 12 };

//타입에러를 발생할까요?
const person: Person = hooni;

function getKey<K extends string>(val: any, key: K) {
  // ...
}

getKey({}, "x");
getKey({}, Math.random() < 0.5 ? "a" : "b");
getKey({}, 12);

const list = [1];
const tuple: [number, number] = list;
