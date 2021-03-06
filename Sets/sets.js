/* SETS */

/* For this exercise, create a function that will add a value to 
 * our set collection as long as the value does not already exist 
 * in the set. 
 * The function should return true if the value is successfully added 
 * and false otherwise.
 */


function Set() {
    // the var collection will hold our set
    var collection = [];
    // this method will check for the presence of an element and return true or false
    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    };
    // this method will return all the values in the set
    this.values = function() {
        return collection;
    };

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

       /* create a method on our Set data structure called intersection.
        * An intersection of sets represents all values that are common to two or more sets. 
        * This method should take another Set as an argument and return the intersection of 
        * the two sets.
        */

        this.intersection = function(otherSet){

            return otherSet.values().map( element => {
                if(this.has(element)) return element;
            }).filter((el) => el !== null && el !== undefined)
        }

        /* create a method called difference. 
         * A difference of sets should compare two sets and return the 
         * items present in the first set that are absent in the second.
         * This method should take another Set as an argument and return 
         * the difference of the two sets.
         */ 

    this.difference = function(otherSet){
        return this.values().map((value) => ((!otherSet.has(value)) ? value : null ))
                                .filter((element) =>  (element !== null && element !== undefined));
    }

    /* create a method on our Set data structure called subset. 
     * This will compare the first set, against the second and 
     * if the first set is fully contained within the Second then it will return true.
     */
    
     this.subset = function(otherSet){

        let inThis = this.values().map(value => (otherSet.has(value)) ? value : null)
                                      .filter(element => (element !== null && element !== undefined));
        
        return inThis.length === this.size();

     }

     /* ass an array and a value to the checkSet() function. 
      * Your function should create an ES6 set from the array argument. 
      * Find if the set contains the value argument. Find the size of the set. 
      * And return those two values in an array.*/
    
      function checkSet(arrToBeSet, checkValue){

        let set = new Set(arrToBeSet);
        return [set.has(checkValue), set.size]
     
     }

}
