function myAdd(a, b) {
  return a + b;
}
myAdd(10, null);

const x: number = null;

const el = document.getElementById("id");
el.textContent;
//^?
//'el' is possibly 'null'.

if (el) {
  el.textContent = "Hello World";
  //^?
}

el!.textContent;
//^?
//Non-null expression
