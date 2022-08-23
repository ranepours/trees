class TreeNode{
    constructor(val, children=[]){
        this.val = val;
        this.children = children;
    }
}

class Tree{
    constructor(root=null){
        this.root=root;
    }

    sumValues(){
        if(!this.root) return 0;
        let sum = this.root.val;

        function adder(node){
            for(let child of node.children){
                sum += child.val;
                if(child.children.length > 0) return adder(child);
            }
        } adder(this.root);
        return sum;
    }

    countEvens(){
        if(!this.root) return 0;
        // if root.val % 2 = RETURN 1 ELSE RETURN 0
        let count;
        if(this.root.val % 2 === 0){
            count = 1;
        } count = 0;

        function evens(node){
            for(let child of node.children){
                if(child.val % 2 === 0) count ++;
                if(child.children.length > 0) return evens(child);
            }
        } evens(this.root);
        return count;
    }

    numGreater(lowerBound){
        if(!this.root) return 0;
        let count;
        if(this.root.val > lowerBound){
            count = 1;
        } count = 0;

        function counter(node){
            for(let child of node.children){
                if (child.val > lowerBound) count++;
                if(child.children.length > 0) counter(child);
            }
        }
        counter(this.root);
        return count;
    }

}

class BinaryTreeNode{
    constructor(val,left=null,right=null){
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
class BinaryTree{
    constructor(root=null){
        this.root=root;
    }
    minDepth(){
        if (!this.root) return 0;
        function helper(node){
            if(node.left === null && node.right === null) 1;
            if(node.left === null) helper(node.right)+1;
            if(node.right === null) helper(node.left)+1;

            return(Math.min(helper(node.left), helper(node.right)) +1
            );
        }
        return helper(this.root);
    }
    maxDepth(){
        if(!this.root) return 0;

        function helper(node){
            if (node.left === null && node.right === null) 1;
            if (node.left === null) helper(node.right) +1;
            if (node.right === null) helper(node.left) +1;

            return (Math.max(helper(node.left), helper(node.right)) +1
            );
        } return helper(this.root);
    }

    maxSum(){
        let res = 0;

        function helper(node){
            if(node === null) return 0;

            const left = helper(node.left);
            const right = helper(node.right);
            res = Math.max(res, node.val + left + right);

            return Math.max(0, left + node.val, right + node.val);
        } helper(this.root);
        return res;
    }

    nextLarger(lowerBound){
        if(!this.root) return null;

        let queue = [this.root];
        let closest = null;

        while(queue.length){
            let currNode = que.shift();
            let currVal = currNode.val;
            let higher = currVal > lowerBound;
            let reassign = currVal < closest || closest === null;

            if(higher && reassign) closest = currVal;

            if(currNode.left) queue.push(currNode.left);
            if(currNode.right) queue.push(currNode.right);
        } return closest;
    }
}