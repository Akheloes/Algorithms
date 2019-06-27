/**
 * A first draft of an implematation of the stack datastructure. 
 */
 class Stackable {
     
    constructor(data){
        this.data = data; 
    }

 }

 /**
  * We will back our Stack DS on an array. 
  */
 class Stack {

    constructor() {
        this.cursor = 0; 
        this.storage = new Array(); 
    }

    push(stackable) {
        this.storage[this.cursor++] = stackable; 
    }

    /**
     * TODO: 
     *  - poping in a empty stack (exception)
     *  - 
     */
    pop() {
        if(this.storage.length !== 0) {
            var poped = this.storage[this.storage.length-1];
            this.cursor--; 
            this.storage.length--;  
            //delete this.storage[this.storage.length-1]; 
            return poped; 
        } else {
            throw Error("Cannot pop empty stack !"); 
        }
    }

    peek() {
        if(this.storage.length !== 0) {
            return this.storage[this.storage.length - 1]; 
        }
    }

    clear() {
        if(this.storage.length !== 0) {
            this.storage = new Array(); 
        }
    }

 }

 module.exports.stack =  new Stack(); 

 function setUpUnitarytest() {
     window.s = new Stack(); 
     s.push("0"); 
     s.push("1"); 
 }