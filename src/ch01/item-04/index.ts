interface Vector2D {
  x: number;
  y: number;
}

interface NamedVector {
  name: string;
  x: number;
  y: number;
}
function calculateLength(v: Vector2D) {
  return Math.sqrt(v.x * v.x + v.y * v.y);
  //               ^?
}

const v: NamedVector = { name: "v", x: 3, y: 4 };
calculateLength(v);
calculateLength({ x: 3, y: 4, name: "v" });

interface Vector3D {
  x: number;
  y: number;
  z: number;
}

function calculateLengthL1(v: Vector3D) {
  let length = 0;
  for (const axis of Object.keys(v)) {
    const coord = v[axis];
    //       ^?
    length += coord;
  }
  return length;
}

function calculateLengthL1(v: Vector3D) {
  return Math.abs(v.x) + Math.abs(v.y) + Math.abs(v.z);
}

class C {
  foo: string;
  constructor(foo: string) {
    this.foo = foo;
  }
}
const c = new C("instance of C");
const d: C = { foo: "object literal" };


interface Author {
  first: string;
  last: string;
}

interface DB {
  runQuery:(sql: string) => any[]
}


function getAuthors(database: PostgresDB): Author[] {
  const authorRows = database.runQuery(`SELECT FIRST, LAST FROM AUTHORS`);
  return authorRows.map((row) => ({ first: row[0], last: row[1] }));
}

function getAuthors(database: PostgresDB): Author[] {
  const authorRows = database.runQuery(`SELECT FIRST, LAST FROM AUTHORS`);
  return authorRows.map((row) => ({ first: row[0], last: row[1] }));
}