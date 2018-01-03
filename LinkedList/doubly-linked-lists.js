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
    this.head = null;
    this.tail = null;
    // change code below this line

    this.add = function(element){
        console.log('add')
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
        console.log('remove')

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
    // change code above this line
  };
  

  let ll = new DoublyLinkedList()
  
  ll.add(1)
  ll.add(2)
  ll.add(3)
  ll.add(4)
  ll.add(1)
