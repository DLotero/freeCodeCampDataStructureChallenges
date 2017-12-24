/* Write an add method that assigns the first node you push to the linked list to the head; 
 * after that, whenever adding a node, every node should be referenced by the previous node's 
 * next property.
 * Note: Your list's length should increase by one every time an element is added to the linked list.
 * */

function LinkedList(){
    let length = 0;
    let head =null;

    let Node = function(element){
        this.element = element
        this.next =null;
    }

    this.head = function(){
        return head;
    }

    this.size = function(){
        return length;
    }

    this.add = function(element){
        if(length == 0){
             head = new Node(element);
        }
        else{
            let node = head;
            while(node.next != null){
                node = node.next;
            }

            node.next = new Node(element);
        }

        length++;
    }

    /* Write a remove method that takes an element and removes it from the linked list.*/

    this.remove = function(toRemove){
        let curr = head;
        let prev = head;
        
        while(curr !== null){
            if(curr.element === toRemove){
                if(curr === head){
                    head = curr.next;
                }else{
                    prev.next = curr.next;
                }
                break;
            }

            prev = curr;
            curr = curr.next;
        }
        length--;
    }

    /* Write an isEmpty method that checks if the linked list is empty, 
     * an indexOf method that returns the index of a given element, and 
     * an elementAt that returns an element at a given index.
     */

    this.isEmpty = function(){
        return (length === 0 && head === null);
    }
   
    this.indexOf = function(element){
        let idx = 0;
        let node = head;
   
        while(node !== null){
            if(node.element === element) return idx;
            
            node=node.next;
            idx ++;
        }

        return -1;
    }

    this.elementAt = function(index){
        let node = head;
        while(node !== null){
            if(index === 0) return node.element;
            
            node = node.next;
            index--;
        }
    }

    /* Write a removeAt(index) method that removes and returns a node at a given index. 
     * The method should return null if the given index is either negative, or greater 
     * than or equal to the length of the linked list.
     * Note: Remember to keep count of the currentIndex.
     */
    
     this.removeAt = function(index){
        if(index >= length || index < 0 ) return null;

        let currIdx = index;
        let prev = head;
        let curr = head;

        while(curr !== null){

            if(currIdx === 0){
                if(head === curr){
                    head = curr.next;
                }else{
                    prev = curr.next;
                } 
                length--;
                return curr.element;
            }else{

                prev = curr;
                curr = curr.next;
                currIdx--;
            }
        }
     }

     /* Create an addAt(index,element) method that adds an element at a given index. 
      * Return false if an element was unable to be added.
      * Note: Remember to check if the given index is a negative or is longer than the
      * length of the linked list
      */

      this.addAt = function(index,element){

        if(index >=length || index < 0) return false;
        let currentIndex = 0;
        let node = head;

        while(node !== null){

            if(currentIndex === index){                
                let newNode = new Node(element);
                newNode.next = node.next;
                node.next = newNode;
                length ++;
                return;
            }

            currentIndex++;
            node = node.next
        }        
      }

}





