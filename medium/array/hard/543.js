var diameterOfBinaryTree = function (root) {
  let length = 0;

  const depth = (node) => {
    if (node === null) return 0;
    let left = depth(node.left);
    let right = depth(node.right);

    length = Math.max(length, left + right);

    return Math.max(left, right) + 1;
  };

  depth(root);
  return length;
};
