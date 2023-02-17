{
  interface Person {
    name: string;
  }

  const alice: Person = {};
  //You haven't passed all the required properties to Person - {} is missing the name property

  const bob = {} as Person;
  //no Error

  const hooni: Person = {
    name: "hooni",
    occupation: "developer",

    //Type '{ name: string; occupation: string; }' is not assignable to type 'Person'.
  };

  interface Person {
    name: string;
  }
  //타입에러를 발생할까요?
  const nami = {
    name: "nami",
    occupation: "designer",
  } as Person;
  //no Error

  const people = ["alice ", "bob", "jan"].map((name) => ({ name }));

  const peopleAsAssertion = ["alice ", "bob", "jan"].map(
    (name) => ({ name } as Person)
  );
  const peopleAsAssertionRuntimeError = ["alice ", "bob", "jan"].map(
    (name) => ({} as Person)
  );

  const peopleWithTypeDeclaration = ["alice ", "bob", "jan"].map((name) => {
    const person: Person = { name };
    return person;
  });

  const peopleWithTypeDeclarationBetter = ["alice ", "bob", "jan"].map(
    (name): Person => ({ name })
  );

  document.querySelector("#myButton").addEventListener("click", (e) => {
    e.currentTarget;
    //^?
    const button = e.currentTarget as HTMLButtonElement;
    //      ^?
    button; // Type is HTMLButtonElement
  });

  document.querySelector("#myButton")!.addEventListener("click", (e) => {
    e.currentTarget;
    //^?
    const button = e.currentTarget as HTMLButtonElement;
    //      ^?
    button; // Type is HTMLButtonElement
  });

  const body = document.body;
  const el = body as Person;
  //You can't use 'as' to convert HTMLElement into a Person - they don't share enough in common.

  const elByUnknown = body as unknown as Person;
  //       ^?
}


