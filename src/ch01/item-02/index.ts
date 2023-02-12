function add(a, b) {
  return a + b;
}
add(10, null);

const x: number = null;

const el = document.getElementById("id")
el.textContent
//^?
//'el' is possibly 'null'.

if (el) {
  el.textContent ="Hello World"
//^?
}

el!.textContent
//^?
//Non-null expression




