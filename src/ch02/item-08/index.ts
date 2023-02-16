{
  interface Person {
    first: string;
    last: string;
  }
  // const p: Person = { first: "Jane", last: "Jacobs" };
  // // ---------------------------- Values
  // // ------- Type

  class Cylinder {
    radius = 1;
    height = 1;
  }
  function calculateVolume(shape: unknown) {
    if (shape instanceof Cylinder) {
      shape;
      //^?
      shape.radius;
      //^?
    }
  }

  function email(p: Person, subject: string, body: string) {
    //     ----- -
    //
    // ...
  }

  const p: Person = { first: "Jane", last: "Jacobs" };
  // ---------------------------- Values
  // ------- Type

  type T1 = typeof p;
  //   ^?
  type T2 = typeof email;
  //   ^?

  const v1 = typeof p;
  console.log(v1); // "object"

  const v2 = typeof email;
  console.log(v2); // "function"

  type T = typeof Cylinder;
  //   ^?

  const v = typeof Cylinder;
  console.log(v); // "function"

  //다음 코드는 타입 에러를 발생시킬까요?
  // const first: Person.first = p.first;
  const first: Person["first"] = p.first;

  //아래 코드는 올바른 코드일까요?
  // function email({
  //   person: Person,
  //   subject: string,
  //   body: string,
  // })
  // {
  //   /* ... */
  // }

  function email({
    person,
    subject,
    body,
  }: {
    person: Person;
    subject: string;
    body: string;
  }) {
    /* ... */
  }
}
