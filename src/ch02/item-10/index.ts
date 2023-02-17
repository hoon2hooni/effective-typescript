{
  const originalCharAt = String.prototype.charAt;
  String.prototype.charAt = function (pos) {
    console.log(this, typeof this, pos);
    return originalCharAt.call(this, pos);
  };
  console.log("primitive".charAt(3));

  function isGreeting(phrase: String) {
    return ["hello", "good day"].includes(phrase);
  }
  //Translation: I was expecting string, but you passed String
  const s: String = "primitive";
  const n: Number = 12;
  const b: Boolean = true;

  function getStringLen(foo: String) {
    return foo.length;
  }
  //타입에러를 발생할까요?
  getStringLen("hello");
  getStringLen(new String("hello"));
}
