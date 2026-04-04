// binary tree inorder traversal

//inorder-> left root right




var inorderTraversal = function(root) {
    let result = []

    function dfs(node) {
        if (!node) return;
        dfs(node.left);
        result.push(node.val);
        dfs(node.right);
    }

    dfs(root);

    return result
}


function TreeNode(val, left=null, right=null){
    this.val=val;
    this.left=left;
    this.right=right;
}


let root = new TreeNode(1);
root.right= new TreeNode(2);
root.right.left= new TreeNode(3);


console.log(inorderTraversal(root));
