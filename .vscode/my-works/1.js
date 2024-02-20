// Link of question 1

//hackerrank-challenge-pdfs.s3.amazonaws.com/22937-magic-square-forming-English?response-content-disposition=inline%3B%20filename%3Dmagic-square-forming-English.pdf&response-content-type=application%2Fpdf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAR6O7GJNX5DNFO3PV%2F20240123%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240123T221049Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=6c705952606a4d52ec53a97d2ef7e650dbe6555ba6f1148a43f3fb4aee5a0874
https: function formingMagicSquare(s) {
  // Write your code here
  const magicSquares = [
    [
      [8, 1, 6],
      [3, 5, 7],
      [4, 9, 2],
    ],
    [
      [6, 1, 8],
      [7, 5, 3],
      [2, 9, 4],
    ],
    [
      [4, 9, 2],
      [3, 5, 7],
      [8, 1, 6],
    ],
    [
      [2, 9, 4],
      [7, 5, 3],
      [6, 1, 8],
    ],
    [
      [8, 3, 4],
      [1, 5, 9],
      [6, 7, 2],
    ],
    [
      [4, 3, 8],
      [9, 5, 1],
      [2, 7, 6],
    ],
    [
      [6, 7, 2],
      [1, 5, 9],
      [8, 3, 4],
    ],
    [
      [2, 7, 6],
      [9, 5, 1],
      [4, 3, 8],
    ],
  ];

  let minCost = Number.MAX_SAFE_INTEGER;

  for (const magicSquare of magicSquares) {
    let cost = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        cost += Math.abs(s[i][j] - magicSquare[i][j]);
        console.log("s:" + s[i][j], "j:" + magicSquare[i][j]);
      }
    }
    console.log(minCost);
    minCost = Math.min(minCost, cost);
    console.log("minCost:" + minCost, "cost:" + cost);
  }
  return minCost;
}

const s = [
  [4, 8, 2],
  [4, 5, 7],
  [6, 1, 6],
];
console.log(formingMagicSquare(s));
