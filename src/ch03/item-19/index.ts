{
  let x = 12;
  //  ^?

  const beforePerson: {
    name: string;
    born: {
      where: string;
      when: string;
    };
    died: {
      where: string;
      when: string;
    };
  } = {
    name: "Sojourner Truth",
    born: {
      where: "Swartekill, NY",
      when: "c.1797",
    },
    died: {
      where: "Battle Creek, MI",
      when: "Nov. 26, 1883",
    },
  };

  const afterPerson = {
    name: "Sojourner Truth",
    born: {
      where: "Swartekill, NY",
      when: "c.1797",
    },
    died: {
      where: "Battle Creek, MI",
      when: "Nov. 26, 1883",
    },
  };

  function square(nums: number[]) {
    return nums.map((x) => x * x);
  }
  const squares = square([1, 2, 3, 4]);
  //    ^?

  const axis1: string = "x";
  //     ^?
  const axis2 = "y";
  //     ^?

  interface Product {
    id: string;
    name: string;
    price: number;
  }

  function beforeLogProduct(product: Product) {
    const id: string = product.id;
    const name: string = product.name;
    const price: number = product.price;
    console.log(id, name, price);
  }

  function afterLogProduct(product: Product) {
    const { id, name, price } = product;
    console.log(id, name, price);
  }

  function logProduct(product: Product) {
    const { id, name, price }: { id: string; name: string; price: number } =
      product;
    console.log(id, name, price);
  }
  /**
   * 타입 명시적으로 사용하는 시츄에이션
   *
   */
  const elmo: Product = {
    name: "Tickle Me Elmo",
    id: "048188 627152",
    price: 28.99,
  };

  const furby = { name: "Furby", id: 630509430963, price: 35 };
  logProduct(furby);

  //Argument of type '{ name: string; id: number; price: number; }' is not assignable to parameter of type 'Product'.

  const cache: { [ticker: string]: number } = {};
  function getQuote(ticker: string) {
    if (ticker in cache) {
      return cache[ticker];
    }
    return fetch(`https://quotes.example.com/?q=${ticker}`)
      .then((response) => response.json())
      .then((quote) => {
        cache[ticker] = quote;
        return quote;
      });
  }

  getQuote("MSFT").then(considerBuying);
  //^?

  const _cache: { [ticker: string]: number } = {};
  function getQuote(ticker: string): Promise<number> {
    if (ticker in cache) {
      return _cache[ticker];
      // ~~~~~~~~~~~~~ Type 'number' is not assignable to 'Promise<number>'
    }
    // ...
  }
  interface Vector2D {
    x: number;
    y: number;
  }

  function myNewAdd(a: Vector2D, b: Vector2D):Vector2D {
    return { x: a.x + b.x, y: a.y + b.y };
  }
  myNewAdd()
  //^?
}
