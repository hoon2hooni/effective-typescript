{
  let id = "12-34-56";
  id = 123456;
  //Type 'number' is not assignable to type 'string'.

  let _id: string | number = "12-34-56";
  _id = 123456; // OK
  fetchProduct(id);
}
