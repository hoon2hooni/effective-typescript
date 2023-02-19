{
  type TState = { name: string; capital: string };
  interface IState {
    name: string;
    capital: string;
  }

  const wyoming: TState = {
    name: "Wyoming",
    capital: "Cheyenne",
    population: 500_000,
  };

  // index signature 둘다 ok
  type TDict = { [key: string]: string };
  interface IDict {
    [key: string]: string;
  }

  const dictT: TDict = {
    a: "a",
  };

  const dictI: IDict = {
    a: "a",
  };

  // Function type 둘다 ok
  // type TFn = (x: number) => string;
  interface IFn {
    (x: number): string;
  }

  //다음 코드는 타입 에러를 발생할가요?
  type TFn = { (x: number): string };
  const toStrT: TFn = (x) => "" + x;

  const toStrI: IFn = (x) => "" + x;

  // Function type with properties 둘다 ok
  type TFnWithProperties = { (x: number): number; prop: string };
  interface IFnWithProperties {
    (x: number): number;
    prop: string;
  }
  //generic
  type TPair<T> = { first: T; second: T };
  interface IPair<T> {
    first: T;
    second: T;
  }

  //타입 확장 둘다 ok
  type TStateWithPop = IState & { population: number };
  interface IStateWithPop extends TState {
    population: number;
  }

  //implements 둘다 ok
  class StateT implements TState {
    name: string = "";
    capital: string = "";
  }
  class StateI implements IState {
    name: string = "";
    capital: string = "";
  }

  //유니온 타입은 있지만 유니온 인터페이스라는 개념은 없습니다.
  type AorB = "a" | "b";

  // type Input = {
  //   /* ... */
  //   hello: string;
  // };
  // type Output = {
  //   /* ... */
  //   world: string;
  // };
  interface VariableMap {
    [name: string]: Input | Output;
  }

  const a: VariableMap = {
    hello: { hello: "hello" },
    world: { world: "world" },
  };

  type Input = {
    hello: string;
  };
  type Output = {
    world: string;
  };
  type NamedVariable = (Input | Output) & { name: string };

  //타입에러를 발생할까요?
  const namedVariable: NamedVariable = {
    hello: "hello",
  };

  interface Tuple {
    0: number;
    1: number;
    length: 2;
  }
  type TTuple = [number, number];
  const t: Tuple = [10, 20];
  const t2: TTuple = [10, 20];

  //^?

  //인터페이스만 가능한 declaration merging

  interface IState {
    name: string;
    capital: string;
  }
  interface IState {
    population: number;
  }
  const muyaho: IState = {
    name: "muyaho",
    capital: "Cheyenne",
    population: 500_000,
  }; // OK
}
