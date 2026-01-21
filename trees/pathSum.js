/*
Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

A leaf is a node with no children.
*/

var hasPathSum = function (root, targetSum) {
  // This checks if the current node exists. If the tree (or subtree) is empty, there is no path, so return false.
  if (!root) return false;

  // This subtracts the current node’s value from the remaining sum we still need to match.
  targetSum -= root.val;

  // If this is a leaf, we check whether the remaining sum is exactly 0. If yes, this path is valid.
  if (!root.left && !root.right) {
    return targetSum === 0;
  }

  // If either the left or right subtree has a valid root-to-leaf path that matches the remaining sum, return true.
  return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
};
