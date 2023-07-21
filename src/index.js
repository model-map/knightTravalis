import "./style.css";

function getLegalMoves(x, y) {
  let coordinates = [
    [-2, -1],
    [-2, 1],
    [-1, -2],
    [-1, 2],
    [0, 0],
    [1, -2],
    [1, 2],
    [2, -1],
    [2, 1],
  ];
  let legalMoves = [];
  coordinates.forEach((item) => {
    let move = [];
    move.push(item[0] + x);
    move.push(item[1] + y);
    legalMoves.push(move);
  });
  return legalMoves;
}

console.log(getLegalMoves(5, 3));
