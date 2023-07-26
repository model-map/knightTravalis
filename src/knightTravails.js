const Node = (x, y, parent) => {
  return { x, y, parent };
};
function getPath(node) {
  let path = [];
  while (node.parent !== null) {
    path.push([node.x, node.y]);
    node = node.parent;
  }
  path.push([node.x, node.y]);
  path.reverse();
  let str = "";
  path.forEach((point) => (str += JSON.stringify(point) + "->"));
  return str.slice(0, -2);
}
// Defines a node's x, y coordinates and who the parent is for backtracking
function knightTravails(source, destination) {
  //X and Y are destination's x,y-coordinates
  //x and y are current position's x,y-coordinates

  let X = destination[0];
  let Y = destination[1];
  let root = Node(source[0], source[1], null);
  let queue = [root];
  let visited = new Set();
  while (queue.length) {
    let next = [];
    while (queue.length) {
      let currentNode = queue.shift();
      let x = currentNode.x;
      let y = currentNode.y;
      if (x === X && y === Y) {
        return getPath(currentNode);
      } else {
        const dir = [
          [-2, -1],
          [-2, 1],
          [-1, -2],
          [-1, 2],
          [1, -2],
          [1, 2],
          [2, -1],
          [2, 1],
        ];
        for (let d of dir) {
          let newX = x + d[0];
          let newY = y + d[1];
          const node = Node(newX, newY, currentNode);
          if (
            !visited.has(node) &&
            newX >= 0 &&
            newY >= 0 &&
            newX <= 7 &&
            newY <= 7
          ) {
            visited.add(node);
            next.push(node);
          }
        }
      }
    }
    queue = next;
  }
}

let source = [5, 3];
let destination = [0, 0];

console.log(knightTravails(source, destination));

//-----------------------------------------------------------------------------------
// function knightTravails(source, destination) {
//   let x = destination[0];
//   let y = destination[1];
//   let visited = new Set();
//   const dir = [
//     [-2, -1],
//     [-2, 1],
//     [-1, -2],
//     [-1, 2],
//     [1, -2],
//     [1, 2],
//     [2, -1],
//     [2, 1],
//   ];
//   let queue = [source];
//   let steps = 0;
//   while (queue.length) {
//     let next = [];
//     while (queue.length) {
//       let current = queue.shift();
//       let currentX = current[0];
//       let currentY = current[1];
//       if (currentX === x && currentY === y) {
//         return steps;
//       } else {
//         for (let d of dir) {
//           let newX = currentX + d[0];
//           let newY = currentY + d[1];
//           if (!visited.has(newX + "," + newY)) {
//             visited.add(newX + "," + newY);
//             next.push([newX, newY]);
//           }
//         }
//       }
//     }
//     steps++;
//     queue = next;
//   }
// }

// console.log(knightTravails([5, 3], [1, 2]));

//-----------------------------------------------------------------------------------

// const _ = require("lodash");

// function getLegalMoves([x, y]) {
//   if ((x < 0) | (x > 7) | (y < 0) | (y > 7)) {
//     alert("ENTER LEGAL MOVE");
//   }
//   let coordinates = [
//     [-2, -1],
//     [-2, 1],
//     [-1, -2],
//     [-1, 2],
//     [0, 0],
//     [1, -2],
//     [1, 2],
//     [2, -1],
//     [2, 1],
//   ];
//   let legalMoves = [];
//   coordinates.forEach((item) => {
//     let move = [];
//     let newX = item[0] + x;
//     let newY = item[1] + y;
//     if ((newX < 0) | (newX > 7) | (newY < 0) | (newY > 7)) return;
//     move.push(newX);
//     move.push(newY);
//     legalMoves.push(move);
//   });
//   return legalMoves;
// }

// const Node = (x, y, left = null, right = null) => {
//   let sum = x + y;
//   return { x, y, sum, left, right };
// };

// function buildTree(arr) {
//   if (arr.length == 0) return null;
//   if (arr.length == 1) {
//     let node = Node(arr[0][0], arr[0][1]);
//     return node;
//   } else {
//     let mid = Math.floor((arr.length - 1) / 2);
//     let node = Node(arr[mid][0], arr[mid][1]);
//     node.left = buildTree(arr.slice(0, mid));
//     node.right = buildTree(arr.slice(mid + 1));
//     return node;
//   }
// }

// const prettyPrint = (node, prefix = "", isLeft = true) => {
//   if (node == null) {
//     return;
//   }
//   if (node.right != null) {
//     prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
//   }
//   console.log(`${prefix}${isLeft ? "└── " : "┌── "}(${node.x},${node.y})`);
//   if (node.left != null) {
//     prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
//   }
// };

// function getStack(root, [a, b], path) {
//   let min = Infinity;
//   let min_node = null;
//   let stack = [];
//   push(root);

//   function push(node) {
//     stack.push(node);
//     if (node.left != null) {
//       push(node.left);
//     }
//     if (node.right != null) {
//       push(node.right);
//     }
//     // let pop = stack.pop();
//     // let moves = getLegalMoves([pop.x, pop.y]);
//     // let root = buildTree(moves);
//     // prettyPrint(root);

//     // console.log(node.x, node.y);
//   }
//   function pop() {
//     let node = stack.pop();
//     let check = [node.x, node.y];
//     console.log("PATH: ", path);
//     if (path.some((p) => _.isEqual(p, check))) {
//       return;
//     } else {
//       let distance = (((a - node.x) ** 2 + (b - node.y) ** 2) ** 0.5).toFixed(
//         2
//       );
//       if (min != distance && (distance == 0 || distance == 2.24)) {
//         min = distance;
//         min_node = node;
//       } else if (min != 0 && min != 2.24 && min > distance) {
//         min = distance;
//         min_node = node;
//       }
//     }
//   }
//   // console.log(min_node);
//   // console.log(stack);
//   return { min, min_node };
// }

// function getPath(source, destination, path = []) {
//   path.push(source);
//   let moves = getLegalMoves(source);
//   let root = buildTree(moves);
//   // prettyPrint(root);
//   let stack = getStack(root, destination, path);
//   let min = stack.min;
//   let newSource = [stack.min_node.x, stack.min_node.y];
//   console.log("SOURCEL ", source);
//   console.log("NEWSOURCE: ", newSource);
//   while (min != 0 && min != 2.24) {
//     // console.log("PATH0 :", path);
//     getPath(newSource, destination, path);
//   }
//   path.push(destination);
//   return path;
// }

// let moves = getLegalMoves([5, 3]);
// let root = buildTree(moves);
// getStack(root, [0, 0]);
// prettyPrint(root);
