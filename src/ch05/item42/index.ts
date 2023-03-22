{
  function parseYAML(yaml: string): any {
    // ...
  }
  interface Book {
    name: string;
    author: string;
  }
  const book = parseYAML(`
      name: Wuthering Heights
      author: Emily Brontë
    `);

  alert(book.title); // No error,
  function safeParseYAML(yaml: string): unknown {
    return parseYAML(yaml);
  }

  {
    const book = safeParseYAML(` name: Villette
author: Charlotte Brontë
`) as Book;
  }

  {
    interface Feature {
      id?: string | number;
      geometry: Geometry;
      properties: unknown;
    }
    function processValue(val: unknown) {
      if (val instanceof Date) {
        val;
        //^?
      }
      if (isBook(val)) {
        val;
        //^?
      }
    }
    function isBook(val: unknown): val is Book {
      return (
        typeof val === "object" &&
        val !== null &&
        "name" in val &&
        "author" in val
      );
    }
    {
      function safeParseYAML<T>(yaml: string): T {
        return parseYAML(yaml);
      }
    }
  }
}
