/* We've provided a Node object and started our DoublyLinkedList. 
 * Let's add two methods to our doubly linked list called add and remove. 
 * The add method should add the given element to the list while the remove 
 * method should remove all occurrences of a given element in the list.
 * Be careful to handle any possible edge cases when writing these methods, 
 * such as deletions for the first or last element. Also, removing any item 
 * on an empty list should return null.
 */ 


 
var Node = function(data, prev) {
    this.data = data;
    this.prev = prev;
    this.next = null;
  };
  
var DoublyLinkedList = function() {
    console.log('reverse');          
    this.head = null;
    this.tail = null;
    // change code below this line

    this.add = function(element){
        if(this.head === null){
            this.head = new Node(element, null);
        }else{
            let node = this.head;
            while(node.next !== null){
                node = node.next
            }

            node.next = new Node(element, node);
            this.tail = node.next;

        }
    }

    this.remove = function(element){
        let node = this.head;

        if(node === null) return null;

        while(node.next !== null){
            if(node.data === element){
                if(node.prev) node.prev.next = (node.prev.next === null)?null:node.next;
                else this.head = node.next;
                node.next.prev = (node.next.prev === null)?null:node.prev;
            }
            node = node.next;
        }

        if(node.data === element){
            node.prev.next = null;
            this.tail = node.prev;
        }         
    }

    /* Reverse a Doubly Linked List
     * Let's create one more method for our doubly linked list called reverse which reverses 
     * the list in place. Once the method is executed the head should point to the previous tail
     * and the tail should point to the previous head. Now, if we traverse the list from head 
     * to tail we should meet the nodes in a reverse order compared to the original list. Trying 
     * to reverse an empty list should return null.
     */
     
     this.reverse = function(){
     }

    // change code above this line
  };

