//maximum depth of binary tree

var maxDepth = function(root) {
    if(root=== null) return 0;

    let left = maxDepth(root.left);
    let right = maxDepth(root.right);

    return Math.max(left, right) +1;
}


function treeNode (val, left=null, right=null){
    this.val=val
    this.left=left
    this.right=right
}

let root = new treeNode(3)
root.left = new treeNode(9)
root.right = new treeNode(20)
root.right.left = new treeNode(15)
root.right.right= new treeNode(7)

console.log(maxDepth(root));
