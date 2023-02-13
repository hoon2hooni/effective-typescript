## Item 4: Get Comfortable with Structural Typing

### 구조적 타이핑에 익숙해지기

덕타이핑: 객체가 어떤 타입에 부합하는 변수와 메서드를 가질 겨웅 객체르 ㄹ해당 타입에 속하는 것으로 간주

```typescript
function calculateLengthL1(v: Vector3D) {
  let length = 0;
  for (const axis of Object.keys(v)) {
    const coord = v[axis];
    //     const coord: any
    length += coord;
  }
  return length;
}
```

coord가 any가 나오는 이유는 바로 아래코드처럼 작성할 수 있습니다.

```typescript
const vec3D = { x: 3, y: 4, z: 1, address: "123 Broadway" };
calculateLengthL1(vec3D);
//NaN
```

```typescript
function calculateLengthL1(v: Vector3D) {
  return Math.abs(v.x) + Math.abs(v.y) + Math.abs(v.z);
}
```

## 구조적 타이핑이 유리할때

### test코드작성

**before**

```TypeScript
function getAuthors(database: PostgresDB): Author[] {
  const authorRows = database.runQuery(`SELECT FIRST, LAST FROM AUTHORS`);
  return authorRows.map((row) => ({ first: row[0], last: row[1] }));
}
```

**after**

```TypeScript
interface DB {
  runQuery:(sql: string) => any[]
}


function getAuthors(database:DB): Author[] {
  const authorRows = database.runQuery(`SELECT FIRST, LAST FROM AUTHORS`);
  return authorRows.map((row) => ({ first: row[0], last: row[1] }));
}
```
