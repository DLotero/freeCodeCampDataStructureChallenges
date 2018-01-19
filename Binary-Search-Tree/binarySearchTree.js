/* In our binary search tree, define two methods, findMin and findMax. 
 * These methods should return the minimum and maximum value 
 * held in the binary search tree
 */

var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));

function Node(value) {
    console.log('tree');
    this.value = value;
    this.left = null;
    this.right = null;
}

function BinarySearchTree() {
    console.log('lalalal')
    this.root = null;
    // change code below this line
    
    this.findMin = () => {

        if(!this.root) return null;

        let node = this.root;
        while(node.left !== null){
            node = node.left;
        }

        return node.value;
    }

    this.findMax = () => {

        if(!this.root) return null;
        
        let node = this.root;
        while(node.right !== null){
            node = node.right;
        }

        return node.value;

    }

    /* create a method to add new values to our binary search tree. 
     * The method should be called add and it should accept an integer
     * value to add to the tree. Take care to maintain the invariant 
     * of a binary search tree: the value in each left child should 
     * be less than or equal to the parent value, and the value in 
     * each right child should be greater than or equal to the 
     * parent value. Here, let's make it so our tree cannot hold 
     * duplicate values. If we try to add a value that already exists, 
     * the method should return null. Otherwise, if the addition is 
     * successful, undefined should be returned.
     */
    
     this.add = (toAdd) => {

        if(!this.root){
            this.root = new Node(toAdd);
            return undefined;
        }

        node = this.searchForNode(toAdd, this.root);

        if(node.value === toAdd) return null;
        else if(toAdd < node.value) node.left = new Node(toAdd);
        else node.right = new Node(toAdd);

        return undefined;
     }

     this.searchForNode = (value, node) => { /* checks if the node
                                              * passed as argumen has the
                                              * value if not, calls itself
                                              * again on right or left node
                                              */
        if(node.value === value) return node;
        if(value < node.value){
            return (node.left)? this.searchForNode(value, node.left): node;
        }else if(value > node.value){
            return (node.right)? this.searchForNode(value, node.right): node;
        } 
     }
    // change code above this line
}

/*let t = new BinarySearchTree();

t.add(10);
t.add(9);
t.add(11);*/
