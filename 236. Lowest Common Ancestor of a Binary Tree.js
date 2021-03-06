/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (root === null)  {
        return null;
    }

    if (root === p || root === q) {
        return root;
    }


    var left = lowestCommonAncestor(root.left, p, q);
    var right = lowestCommonAncestor(root.right, p, q);
    if (left && right) {
        return root;
    }
    else if (left) {
        return left;
    }
    else {
        return right;
    }


};

// if p,q on the same child tree return LCA(root.left,p,q) or LCA(root.right,p,q)
// if p === root or q === root return root
// if p,q on diffrent child tree return root
// if p,q is not in the tree return null


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (root === null || root === p || root === q) return root;
    var left = lowestCommonAncestor(root.left, p, q);
    var right = lowestCommonAncestor(root.right, p, q);
    if (left !== null && right !==null) return root;
    return (left)? left : right;
    // if p in right && q in right, root = root.right
    // if p in right && q in left, root = root.left
    // if only p return p, if only q return q
    // if p, q are on different subtree return root
    // root === p || root === q return root;


};
