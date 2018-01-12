/* SETS */

/* For this exercise, create a function that will add a value to 
 * our set collection as long as the value does not already exist 
 * in the set. 
 * The function should return true if the value is successfully added 
 * and false otherwise.
 */


function Set() {
    // the var collection will hold our set
    console.log('set');
    var collection = [];
    // this method will check for the presence of an element and return true or false
    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    };
    // this method will return all the values in the set
    this.values = function() {
        return collection;
    };
    // change code below this line

    this.add = function(element){

        if(!this.has(element)) {
            collection.push(element);
            return true
        } 

        return false;
    }

    /*
     * create a delete function for our set. The function should be named 
     * this.remove. This function should accept a value and check if it 
     * exists in the set. If it does, remove that value from the set, 
     * and return true. Otherwise, return false.
     */
    
     this.remove = function(element){
         if(this.has(element)){
            let index = collection.indexOf(element);
            collection.splice(index,1);
            return true;
        }

        return false;
     }

     /* create a size function for our Set. This function should be named
      * this.size and it should return the size of the collection.
      */
      
      this.size = function(){
          return collection.length;
      }

      /* create a method on our Set data structure called union. 
       * This method should take another Set as an argument and 
       * return the union of the two sets, excluding any duplicate values.
       */
      
       this.union = function(otherSet){
           let union = new Set();
           
           otherSet.values().forEach(element => union.add(element));

           this.values().forEach(element => union.add(element));

           return union;

       }

    // change code above this line
}

let a = new Set()
a.add(1)
a.add(2)
a.add(3)
let b = new Set()
b.add(1)
b.add(4)
b.add(2)
b.add(5)
b.union(a)