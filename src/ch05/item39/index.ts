{
  function getLengthBad(array: any) {
    // Don't do this! return array.length;
    return array.length;
  }
  getLengthBad(/123/);
}
{
  function getLength(array: any[]) {
    return array.length;
    //              ^?
  }
  getLength(/123/);
  //         Argument of type 'RegExp' is not assignable to parameter of type 'any[]'.
}

// function
{
  type Fn0 = () => any; // 파라미터 없는 어떤 함수든 ok
  type FN1 = (arg: any) => any; //파라미터 1개 어떤함수든 ok
  type FnN = (...args: any[]) => any; //

  const numArgsBad = (...args: any) => args.length; //
  //      ^?
  const numArgsGood = (...args: any[]) => args.length;
  //       ^?

  const a: Fn0 = () => 3;
}
