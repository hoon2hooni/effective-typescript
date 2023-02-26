// function arraySum(arr: number[]) {
//   let sum = 0,
//     num;
//   while ((num = arr.pop()) !== undefined) {
//     sum += num;
//   }
//   return sum;
// }

function arraySum(arr: readonly number[]) {
  let sum = 0,
    num;
  while ((num = arr.pop()) !== undefined) {
    //'readonly number[]'
    sum += num;
  }
  return sum;
}
function printTriangles(n: number) {
  const nums = [];
  for (let i = 0; i < n; i++) {
    nums.push(i);
    console.log(arraySum(nums));
  }
}

const text =
  "I am already far north of London, and as I walk in the streets of Petersburgh, I feel a cold northern breeze play upon my cheeks, which braces my nerves and fills me with delight.";

function parseTaggedText(lines: string[]): string[][] {
  const paragraphs: string[][] = [];
  const currPara: readonly string[] = [];
  const addParagraph = () => {
    if (currPara.length) {
      paragraphs.push(currPara);
      currPara.length = 0; // Clear the lines }
    }
  };
  for (const line of lines) {
    if (!line) {
      addParagraph();
    } else {
      currPara.push(line);
    }
  }
  addParagraph();
  return paragraphs;
}
