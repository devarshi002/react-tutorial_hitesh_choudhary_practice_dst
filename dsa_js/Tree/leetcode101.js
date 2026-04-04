//symmetric tree or not


var isSymmetric = function(root){
    function isMirror(l, r) {
        if(l===null && r=== null) return true;

        if(l=== null || r=== null) return false;

        if(l.val !== r.val) return false;


        return isMirror(l.left, r.right) && isMirror(l.right, r.left)
    }

    return isMirror(root.left, root.right)
}


function treeNode(val, left=null, right=null){
    this.val=val;
    this.left=left;
    this.right=right
}


let root = new treeNode(1)
root.left = new treeNode(2)
root.left.left = new treeNode(3)
root.left.right = new treeNode(4)

root.right = new treeNode(2);
root.right.left = new treeNode(4);
root.right.right = new treeNode(3);


console.log(isSymmetric(root));
