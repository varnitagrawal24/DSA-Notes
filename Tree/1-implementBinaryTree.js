class TreeNode{
    constructor(val){
        this.data = val;
        this.left = this.right = null;
    }
}

export class BinaryTree{
    constructor(data){
        this.root = new TreeNode(data);
    }

    // methods
    insert(data){
        if(this.root === null){
            this.root = new TreeNode(data);
            return;
        }
        const tempQueue = [];
        tempQueue.push(this.root);

        while(tempQueue.length){
            const tempNode = tempQueue.shift();
            if(tempNode.left === null){
                tempNode.left = new TreeNode(data);
                break;
            } else {
                tempQueue.push(tempNode.left);
            }
            if(tempNode.right === null){
                tempNode.right = new TreeNode(data);
                break;
            } else {
                tempQueue.push(tempNode.right);
            }
        }
    }

    inorder(){
        let result = [];
        function getInorder(root){
            if(root !== null){
                getInorder(root.left);
                result.push(root.data);
                getInorder(root.right);
            }
        }
        getInorder(this.root);
        return result;
    }

    preorder(){
        let result = [];
        function getPreorder(root){
            if(root !== null){
                result.push(root.data);
                getPreorder(root.left);
                getPreorder(root.right);
            }
        }
        getPreorder(this.root);
        return result;
    }

    postorder(){
        let result = [];
        function getPostorder(root){
            if(root !== null){
                getPostorder(root.left);
                getPostorder(root.right);
                result.push(root.data);
            }
        }
        getPostorder(this.root);
        return result;
    }

    height(){
        function getHeight(root){
            if(root === null) return 0;

            return Math.max(getHeight(root.left), getHeight(root.right))+1;
        }
        const result = getHeight(this.root);
        return result;
    }

    kthNodes(k){
        //Time Complexity: O(n) where n is number of nodes in the given binary tree.
        // Space Complexity : O(height of the binary tree).
        
        const resultNodes = [];
        function getKthNodes(root, tempK){
            if(root === null) return;
            if(tempK === 0) resultNodes.push(root.data);
            else {
                getKthNodes(root.left, tempK - 1);
                getKthNodes(root.right, tempK - 1);
            }
        };
        getKthNodes(this.root, k);
        return resultNodes.filter(Boolean);
    };
}