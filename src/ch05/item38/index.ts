function processBar(b: Bar) {
  /* ... */
}
{
  const f = () => {
    const x = expressionReturningFoo();
    processBar(x as any);
    // ~ Argument of type 'Foo' is not assignable to // parameter of type 'Bar'
  };

  const f1 = () => {
    const x: any = expressionReturningFoo();
    processBar(x);
    return x;
  };
  function g() {
    const foo = f1();
    foo.fooMethod(); // Type is any foo.fooMethod(); // This call is unchecked!
  }

  const config: Config = {
    a: 1,
    b: 2,
    c: {
      key: value as any,
      // ~~~ Property ... missing in type 'Bar' but required in type 'Foo'
    },
  } 
}
