declare let hasMiddle: boolean;
{
  {
    //error 1
    const pt = {};
    pt.x = 3;
    // Property 'x' does not exist on type '{}'
  }

  {
    //error 2
    type Point = {
      x: number;
      y: number;
    };
    const pt: Point = {};
    //Type '{}' is missing the following properties from type 'Point': x, y
  }
  {
    //correct 1
    const pt = {
      x: 3,
      y: 4,
    };
    pt;
    //^?
  }
  {
    //객체를 제각각 나눠서 만들어야 할 경우
    type Point = {
      x: number;
      y: number;
    };
    const pt = {} as Point;
    pt.x = 3;
    pt.y = 4;

    const ptBetter: Point = {
      x: 3,
      y: 4,
    };
  }

  {
    //작은 object로 큰 object만드는 방법 Object.assign의 에러..
    const pt = { x: 3, y: 4 };
    const id = { name: "Pythagoras" };
    const namedPoint = {};
    Object.assign(namedPoint, pt, id);
    namedPoint.name;

    //spread로 해결
    const namedPointWithoutError = { ...pt, ...id };
    //      ^?
  }

  {
    //만들때 type safe하는 방법
    type Point = {
      x: number;
      y: number;
    };
    const pt0 = {};
    const pt1 = { ...pt0, x: 3 };
    const pt: Point = { ...pt1, y: 4 }; // OK
  }

  {
    const firstLast = { first: "Harry", last: "Truman" };
    const president = { ...firstLast, ...(hasMiddle ? { middle: "S" } : {}) };
  }
  const firstLast = { first: "Harry", last: "Truman" };
  const president = { ...firstLast, ...(hasMiddle ? { middle: "S" } : {}) };
  {
    const president:
      | { middle: string; first: string; last: string }
      | {
          first: string;
          last: string;
        } = { ...firstLast, ...(hasMiddle ? { middle: "S" } : {}) };
    president.middle = "얍";
    //에러발생 Property 'middle' does not exist on type '{ first: string; last: string; }'.
  }
  {
    const firstLast = { first: "Harry", last: "Truman" };
    function addOptional<T extends object, U extends object>(
      a: T,
      b: U | null
    ): T & Partial<U> {
      return { ...a, ...b };
    }
    const rightPresident = addOptional(
      firstLast,
      hasMiddle ? { middle: "S" } : null
    );

    rightPresident.middle = "123";
  }
}
