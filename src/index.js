import "./style.css";

function getLegalMoves(x, y) {
  if ((x < 0) | (x > 7) | (y < 0) | (y > 7)) {
    alert("ENTER LEGAL MOVE");
  }
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
    let newX = item[0] + x;
    let newY = item[1] + y;
    if ((newX < 0) | (newX > 7) | (newY < 0) | (newY > 7)) return;
    move.push(newX);
    move.push(newY);
    legalMoves.push(move);
  });
  return legalMoves;
}

const Node = (x, y, left = null, right = null) => {
  let sum = x + y;
  return { x, y, sum, left, right };
};

function buildTree(arr) {
  if (arr.length == 0) return null;
  if (arr.length == 1) {
    let node = Node(arr[0][0], arr[0][1]);
    return node;
  } else {
    let mid = Math.floor((arr.length - 1) / 2);
    let node = Node(arr[mid][0], arr[mid][1]);
    node.left = buildTree(arr.slice(0, mid));
    node.right = buildTree(arr.slice(mid + 1));
    return node;
  }
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node == null) {
    return;
  }
  if (node.right != null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}(${node.x},${node.y})`);
  if (node.left != null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

let moves = getLegalMoves(0, 0);
let root = buildTree(moves);
prettyPrint(root);
