{
  function cacheLast<T extends Function>(fn: T): T {
    let lastArgs: any[] | null = null;
    let lastResult: any;
    return function (...args: any[]) {
      // ~~~~~~~~~~~~~~~~~~~~~~~~~~
      //          Type '(...args: any[]) => any' is not assignable to type 'T'
      if (!lastArgs || !shallowEqual(lastArgs, args)) {
        lastResult = fn(...args);
        lastArgs = args;
      }
      return lastResult;
    } as unknown as T;
  }
  function shallowObjectEqual<T extends object>(a: T, b: T): boolean {
    for (const [k, aVal] of Object.entries(a)) {
      if (!(k in b) || aVal !== b[k]) {
        // ~~~~ Element implicitly has an 'any' type
        return false;
      }
    }
    //      because type '{}' has no index signature
    return Object.keys(a).length === Object.keys(b).length;
  }
  { 
    function shallowObjectEqual<T extends object>(a: T, b: T): boolean {
      for (const [k, aVal] of Object.entries(a)) {
        if (!(k in b) || aVal !== (b as any)[k]) {
          return false;
        }
      }
      return Object.keys(a).length === Object.keys(b).length;
    }
  }
}
