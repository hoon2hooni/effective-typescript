{
  function rollDice1(sides: number): number {
    /*...*/
  } // Statement
  const rollDice2 = function (sides: number): number {
    /* ... */
  }; // Expression
  const rollDice3 = (sides: number): number => {
    /* ... */
  }; // Also expression

  type DiceRollFn = (sides: number) => number;
  const rollDice4: DiceRollFn = (sides) => 1;
  const responseP = fetch(" /quote?by=Mark+Twain");

  async function getQuote() {
    const response = await fetch("/quote?by=Mark+Twain");
    const quote = await response.json();
    return quote;
  }

  async function checkedFetch(input: RequestInfo, init?: RequestInit) {
    const response = await fetch(input, init);
    if (!response.ok) {
      throw new Error("Request failed: " + response.status);
    }
    return response;
  }

  const checkedFetchExpression: typeof fetch = async (input, init) => {
    const response = await fetch(input, init);
    if (!response.ok) {
      throw new Error("Request failed: " + response.status);
    }
    return response;
  };
}
