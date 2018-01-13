/* MAPS */

/* Create a Map object provided here as a wrapper around a JavaScript object.
 * Create the following methods and operations on the Map object:
 * add accepts a key, value pair to add to the map
 * remove accepts a key and removes the associated key, value pair
 * get accepts a key and returns the stored value
 * has returns a boolean for the presence or absence of an item
 * values returns an array of all the values in the map
 * size returns the number of items in the map
 * clear empties the map
 */ 

var Map = function() {
    this.collection = {};
    
    this.add = function(key, value){
        this.collection[key] = value;
    }

    this.remove = function(keyToRemove){
        if(this.collection[keyToRemove] !== undefined){
            let newObj = {}
            let keys = Object.keys(this.collection);

            keys.forEach(key => {
                if(key !== String(keyToRemove)) newObj[key] = this.collection[key];
            });

            this.collection = newObj;
        }

        /* this can be done as delete this.collecion[keyToRemove]
         * but what's the fun in that
         */

    }

    this.get = function(key){
        return this.collection[key];
    }

    this.has = function(key){
        return (this.collection[key]) ? true:false;
    }
    
    this.values = function(){
        let keys = Object.keys(this.collection);
        return keys.map(key => this.collection[key]);
    }

    this.size = function(){
        return Object.keys(this.collection).length;
    }

    this.clear = function(){
        this.collection = {}
    }
};
