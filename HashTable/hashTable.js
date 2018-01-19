/* create the basic functionality of a hash table. 
 * We've created a naive hashing function for you to use. 
 * You can pass a string value to the function hash and it will 
 * return a hashed value you can use as a key for storage. 
 * Store items based on this hashed value in the this.collection 
 * object. Create these three methods: add, remove, and lookup. 
 * The first should accept a key value pair to add to the hash table.
 *  The second should remove a key-value pair when passed a key. 
 * The third should accept a key and return the associated value 
 * or null if the key is not present.
 * Be sure to write your code to account for collisions!
 */ 

 
var called = 0;
var hash = (string) => {
  called++;
  var hash = 0;
  for (var i = 0; i < string.length; i++) { hash += string.charCodeAt(i); }
  return hash;
};
var HashTable = function() {
  this.collection = {};

  this.add = (key, value) => {

        let hashKey = hash(key);
        if(this.collection[hashKey]) this.collection[hashKey].push({'key': key, 'value': value});
        else this.collection[hashKey] = [{'key': key, 'value': value}];
  }

  this.remove = (keyToRemove) => {

    let hashKey = hash(String(keyToRemove));
    if(!this.collection[hashKey]) return;
    if(this.collection[hashKey].length === 1) delete this.collection[hashKey];
    else this.collection[hashKey] = this.collection[hashKey]
                                        .filter((element) => { 
                                                                return element.key !== String(keyToRemove);
                                                              })
  }

  this.lookup = (keyToLook) => {

    let hashKey = hash(String(keyToLook));
    if(!this.collection[hashKey]) return null;
    if(this.collection[hashKey].length === 1) return this.collection[hashKey][0].value;
    else return this.collection[hashKey]
                    .filter((element) => { return element.key === String(keyToLook)})[0].value;

  }
};
