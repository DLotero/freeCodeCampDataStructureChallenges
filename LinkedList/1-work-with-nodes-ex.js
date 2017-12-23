/*
> we've created two nodes, Kitten and Puppy, and we've manually connected the Kitten node to the Puppy node.
Create a Cat and Dog node and manually add them to the line.
*/

var Node = function(element){
    this.element = element; 
    this.next = null; 
};
var Kitten = new Node("Kitten");
var Puppy = new Node("Puppy");

Kitten.next = Puppy;
// only add code below this line

[Dog, Cat] = [new Node('Dog'), new Node('Cat')];

Cat.next = Dog;
Puppy.next = Cat;

// test your code
console.log(Kitten.next);