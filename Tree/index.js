import { BinaryTree } from "./1-implementBinaryTree.js";

const bt = new BinaryTree(10);

const rightSubTree = new BinaryTree(30);
rightSubTree.insert(40);
rightSubTree.insert(50);

bt.insert(20);
bt.root.right = rightSubTree.root;

const printInorder = bt.inorder();
console.log('Inorder->', printInorder);

const printPreorder = bt.preorder();
console.log('Preorder->', printPreorder);

const printPostorder = bt.postorder();
console.log('Postorder->', printPostorder);

const heightOfTree = bt.height();
console.log('Height of a tree->',heightOfTree);