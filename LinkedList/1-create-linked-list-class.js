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

}