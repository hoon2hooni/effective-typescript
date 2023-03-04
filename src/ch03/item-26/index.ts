{
  // Inline form
  setLanguage("JavaScript");
  // Reference form
}
{
  let language = "JavaScript";
  setLanguage(language);
}

{
  function setLanguage(language: string) {
    /* ... */
  }
  setLanguage("JavaScript"); // OK
  let language = "JavaScript";
  setLanguage(language); // OK
}

{
  type Language = "JavaScript" | "TypeScript" | "Python";

  const setLanguage = (language: Language) => {
    /* ... */
  };

  setLanguage("JavaScript"); // OK
  // let language = "JavaScript";

  let language: Language = "JavaScript";
  setLanguage(language);
  //            ^?
}
/*
 * 변수
 */
{
  type Language = "JavaScript" | "TypeScript" | "Python";

  const setLanguage = (language: Language) => {
    /* ... */
  };

  const language = "JavaScript";
  setLanguage(language);

  /** tuple */
  {
    // Parameter is a (latitude, longitude) pair.
    const panTo = (where: [number, number]) => {
      /* ... */
    };

    // panTo([10, 20]); // OK
    const locError = [10, 20];
    const loc = [10, 20] as const;
    panTo(locError);
    panTo(loc);

    const locOk: [number, number] = [10, 20];
    panTo(locOk);
  }

  {
    const panTo = (where: readonly [number, number]) => {
      /* ... */
    };
    const loc = [10, 20] as const;
    panTo(loc);
  }
  /**
   * object
   */

  {
    type Language = "JavaScript" | "TypeScript" | "Python";
    type GovernedLanguage = {
      language: Language;
      organization: string;
    };

    const complain = (language: GovernedLanguage) => {
      /* ... */
    };

    complain({ language: "TypeScript", organization: "Microsoft" });

    const ts = {
      language: "TypeScript",
      organization: "Microsoft",
    };

    complain(ts);
    //solution

    const tsOk: GovernedLanguage = {
      language: "TypeScript",
      organization: "Microsoft",
    };

    const tsOk2 = {
      language: "TypeScript",
      organization: "Microsoft",
    } as const;
    complain(tsOk);
    complain(tsOk2);
  }
  /**
   * callback
   */

  {
    const callWithRandomNumbers = (fn: (n1: number, n2: number) => void) => {
      fn(Math.random(), Math.random());
    };

    const fn = (a, b) => {
      console.log(a + b);
    };

    const fnOk = (a: number, b: number) => {
      console.log(a + b);
    };
    callWithRandomNumbers(fn);
  }
}
