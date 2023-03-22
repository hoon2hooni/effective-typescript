//https://www.youtube.com/watch?v=dLPgQRbVquo&t=3s
//1 generic on the top level
{
  type MyGenericType<TData> = {
    data: TData;
  };

  type Example1 = MyGenericType<{ name: string }>;
}
//passing type argumment to functions
{
  const makeFetch = <TData>(url: string): Promise<TData> => {
    return fetch(url).then((res) => res.json());
  };
  makeFetch<{ name: string }>("/api/endpoint").then((res) => {
    console.log(res);
  });
}
// infering the types
{
  const addIdToObject = <TObj>(obj: TObj) => {
    return {
      ...obj,
      id: "123",
    };
  };
  const result = addIdToObject({ name: "hello" });
}

// constraints on type arguments
{
  type GetPromiseReturnType<T extends (...args: any) => any> = Awaited<
    ReturnType<T>
  >;

  type Result = GetPromiseReturnType<
    () => Promise<{ firstName: string; lastName: string }>
  >;
}

//
{
  const getKeyWithHightestValue = <TObj extends Record<string, number>>(
    obj: TObj
  ): {
    key: keyof TObj;
    value: number;
  } => {
    const keys = Object.keys(obj) as Array<keyof TObj>;

    let highestKey: keyof TObj = keys[0];
    let highestValue = obj[highestKey];

    for (const key of keys) {
      if (obj[key] > highestValue) {
        highestKey = key;
        highestValue = obj[key];
      }
    }
    return {
      key: highestKey,
      value: highestValue,
    };
  };

  const result = getKeyWithHightestValue({
    a: 1,
    b: 1,
    c: 3,
  });
}

//typed object keys
{
  const typedObjectKeys = <TObj extends {}>(obj: TObj) => {
    return Object.keys(obj) as Array<keyof TObj>;
  };
  const result = typedObjectKeys({
    name: "john",
    age: 30,
  });
}
//multiple type arguments
{
  const getValue = <TObj, TKey extends keyof TObj>(obj: TObj, key: TKey) => {
    if (key === "bad") {
      throw new Error("무야호");
    }
    return obj[key];
  };

  const result = getValue(
    {
      a: 1,
      b: "some-string",
    },
    "a"
  );
}
