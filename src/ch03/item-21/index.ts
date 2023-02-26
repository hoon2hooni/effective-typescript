{
  interface Vector3 {
    x: number;
    y: number;
    z: number;
  }
  function getComponent(vector: Vector3, axis: "x" | "y" | "z") {
    return vector[axis];
  }

  let x = "x";
  //  ^?
  let vec = { x: 10, y: 20, z: 30 };
  getComponent(vec, x);

  const mixed = ["x", 1];
  //    ^?
  let x = "x";
  x = /x|y|z/;
  //Type 'RegExp' is not assignable to type 'string'.
  x = ["x", "y", "z"];
  //Type 'string[]' is not assignable to type 'string'.

  const v = { x: 1 };
  v.x = 3;
  v.x = "3";
  //Type 'string' is not assignable to type 'number'.
  v.y = 4;
  //Property 'y' does not exist on type '{ x: number; }'.
  v.name = "Pythagoras ";
  //Property 'name' does not exist on type '{ x: number; }'.

  /**
   * 타입 강도 올리기
   */

  const _v: { x: 1 | 3 | 5 } = { x: 1 };
  _v.x = 10;
  //     ^?

  const v1 = { x: 1, y: 2 };
  //    ^?

  const v2 = { x: 1 as const, y: 2 };
  //    ^?

  const b = v2.x;
  //    ^?

  const v3 = { x: 1, y: 2 } as const;
  //    ^?

}
