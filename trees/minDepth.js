var minDepth = function (root) {
  if (!root) return 0; // if the tree is empty, depth is 0

  const leftDepth = minDepth(root.left);
  const rightDepth = minDepth(root.right);

  // if one of the children is missing, use the non-null side
  if (!root.left) return rightDepth + 1;
  if (!root.right) return leftDepth + 1;

  // if both children exist, take the smaller one
  return Math.min(leftDepth, rightDepth) + 1;
};
