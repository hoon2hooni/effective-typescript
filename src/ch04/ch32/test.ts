{
  type Param1 = string | number;
  type Param2 = string;

  type Func<T> = (p: T) => void;
  type Func2 = () => void;
  let a: Func<string | number> = (p) => {};
  a = (p) => {}; // this is valid
  a = () => {};
  a = b;

  a = b;
  //Type 'Func<string>' is not assignable to type 'Func<string | number>'

  type Logger<T> = (param: T) => void;

  let logNumber: Logger<number> = (param) => {
    console.log(param); // number
  };

  let log: Logger<string | number> = (param) => {
    console.log(param); // string | number
  };
  let b: Func<string> = (p) => {}; // okay
  b = (p: string | number) => {}; // Type 'number' is not assignable to type 'string'
}

{
  type Func<T> = (p: T) => void;
  let a: Func<string | number> = (p) => {};
  let b: Func<string> = (p) => {};

  b = a;
  let onClick: (e: string) => void = (e) => {};
  onClick = () => {};

  let aa: () => string = () => "123";
  let bb: () => string | number = () => 3;

  // aa = bb //(x)
  // bb = aa //(ㅇ)

  let aaa: (p: string | number) => string = (p) => "1";
  let bbb: (p: string) => void = (p) => {};
  let ccc: (p: string) => string | number = (p) => 3;

  // aaa = bbb  (x)
  // bbb = ccc;
  ccc = aaa; // (ㅇ)

  // <div onClick={() =>{}} />
}
export {};
