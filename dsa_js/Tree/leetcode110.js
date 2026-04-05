//check balanced tree

function treeNode(val, left=null, right=null) {
    this.val=val;
    this.left=left;
    this.right=right;
}

var isBalance  = function(root) {
    if(root===null) return true;

    let leftHeight = height(root.left);
    let rightHeight = height(root.right);

    if(Math.abs(leftHeight - rightHeight )>1){
        return false;
    }

    return isBalance(root.left) && isBalance(root.right)
}

function height(node) {
    if(!node) return 0;
    
    return Math.max(height(node.left), height(node.right)) +1;
}

let root = new treeNode(1);
root.left = new treeNode(2);
root.right = new treeNode(3);

console.log(isBalance(root));
