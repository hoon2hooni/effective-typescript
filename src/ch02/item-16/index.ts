const xs = [1, 2, 3]
const x1 = xs["1"];


const keys = Object.keys(xs);

for (const key of keys) {
  key; // Type is string
  const x = xs[key]; // Type is number
}


xs.forEach((x, i) => {
  i;
//^?
});