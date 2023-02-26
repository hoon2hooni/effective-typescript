{
  type Rocket = { [property: string]: string };

  const rocket: Rocket = {
    name: "Falcon 9",
    variant: "vl.0",
    thrust: "4,940 kN",
  }; // 정상

  /**
   * 단점 한가득..!
   */
  //특정 키가 필요하지 않습니다. {}도 유효한 Rocket 타입입니다.
  const rocketEmpty: Rocket = {};

  type Vec3D = Record<"x" | "y" | "z", number>;
  // const vec2d: Vec3D = {
  //   x: 1,
  // };

  interface Rocket2 {
    name: string;
    variant: string;
    thrust_kN: number;
  }
  const rocket2: Rocket2 = {
    name: "hello",
    thrust_kN: 1,
    variant: "muyaho",
  };
  function parseCSV(input: string): { [columnName: string]: string }[] {
    const lines = input.split("\n");
    const [header, ...rows] = lines;
    return rows.map((rowStr) => {
      const row: { [columnName: string]: string } = {};
      rowStr.split(",").forEach((cell, i) => {
        row[header[i]] = cell;
      });
      return row;
    });
  }

  interface ProductRow {
    productId: string;
    name: string;
    price: string;
  }
  const csvData = "123";
  const products = parseCSV(csvData) as unknown as ProductRow[];
  type ABC = { [k in "a" | "b" | "c"]: k extends "b" ? string : number };

  declare let csvData: string;
  const products = parseCSV(csvData) as unknown as ProductRow[];

  function safeParseCSV(
    input: string
  ): { [columnName: string]: string | undefined }[] {
    return parseCSV(input);
  }

  const rows = parseCSV(csvData);
  const prices: { [produt: string]: number } = {};
  for (const row of rows) {
    prices[row.productId] = Number(row.price);
  }
  const safeRows = safeParseCSV(csvData);
  for (const row of safeRows) {
    prices[row.productId] = Number(row.price);
    // ~~~~~~~~~~~~~ Type 'undefined' cannot be used as an index type
  }
}
