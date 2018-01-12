/* STACKS */

/*Modify the given array and treat it like a stack using the JavaScript 
 * methods push and pop. Remove the top element "PSY44" from the stack. 
 * Then add "CS50" to be the new top element of the stack.
 */ 

var homeworkStack = ["BIO12","HIS80","MAT122","PSY44"];
// Only change code below this line

homeworkStack.pop();
homeworkStack.push('CS50');

/* CREATE A STACK CLASS */

/*Write a push method that pushes an element to the top of the stack,
 * a pop method that removes the element on the top of the stack,
 * a peek method that looks at the first element in the stack, 
 * an isEmpty method that checks if the stack is empty, 
 * and a clear method that removes all elements from the stack.
 * Normally stacks don't have this, but we've added a print helper method 
 * that console logs the collection
 */

 
function Stack() { 
    collection = [];
    this.print = function() {
        console.log(collection);
    };
    // Only change code below this line

    this.push = function(element){
        let index = collection.length;
        collection[index] = element;
    }

    this.pop = function(){
        let popped = [];
        let length = collection.length;
        let removed = collection[length -1];
        for(let i= 0; i< length - 1; i++){
            popped[i] = collection[i]
        }

        collection = popped;
        return removed;
    }
    
    this.peek = function(){
        return collection[0]
    }

    this.isEmpty = function(){
        return collection.length === 0
    }

    this.clear = function(){
        collection = [];
    }
    // Only change code above this line
}

let s = new Stack();

s.push(1);
s.push(2);
s.push(3);
s.print();
s.pop();
s.print();

