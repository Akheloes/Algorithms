class Node {

	constructor(data) {
		this.data = data; 
		this.next = null; 
	}

}

// Overall TODO: 1) deleting dangling nodes
class SinglyLinkedList {
	
	constructor() {
		this.head = null; 
		this.tail = null; 
		this.size = 0; 
	} 

	/* Make the newly added node the head */
	addToHead(node) {
		if(!(node instanceof Node)){
			throw "Input is not a node"; 
		} else {
			//if SLL is void
			if(!this.head) {
				this.head = node; 
				this.tail = node; 
			} else {
				//if SLL is not void
				var tmp = this.head; 
				this.head = node; 
				this.head.next = tmp; 
			}
			this.size++; 
		}
		
	}//TO-DO: 1) Cannot add the same node two times, 2) a version of this function which adds data directly, 3) handle case when node has no data ?

	/* Make the newly added node the tail */
	addToTail(node) {
		this.tail.next = node; 
		this.tail = this.tail.next; 

		this.size++; 
	}

	/* Remove element */
	removeNodeByData(data) {
		if(!this.head) {
			/*Heidegger*/
		} else {
			var cursor = this.head; 
			if(cursor === this.head && cursor.data === data) {//special treatment of head
				this.head = this.head.next; 
			} else {
				while(cursor && cursor.next) {
					if(cursor.next === this.tail && cursor.next.data === data) {//special treatment of tail
						cursor.next = null; 
						this.tail = cursor; 
					} else {
						if(cursor.next.data === data) {
							cursor.next = cursor.next.next; 
						} else {
							cursor = cursor.next;
						} 
					}
				}
			}
			this.size--; 
		}
	}//TODO: 1) non existing element; 2)...

	/* Print content of list */
	printList() {
		var cursor = this.head; 
		var printable = ""; 
		while(cursor) {
			printable += cursor.data;
			if(!cursor.next) {
				break;
			} else {
				cursor = cursor.next;
				printable += " -> "; 
			} 
		}

		console.log(printable); 
	}

	//some complementary methods
	/* returns the head node, cloned */
	peekHead() {
		if(!this.head) {
			return null; 
		} else {
			var peek = new Node(this.head.data); 
			peek.next = this.head.next; 
			return peek; 
		}
	}

	/* return the tail node, cloned */
	peekTail() {
		if(!this.head){
			return null; 
		} else {
			var peek = new Node(this.tail.data); 
			return peek; 
		}
	}

	/* removes the head */
	removeHead(){
		if(!this.head){
			/*Heidegger */
		} else {
			this.removeNodeByData(this.head.data);
		}
	}

	/* removes the tail */
	removeTail() {
		if(!this.head){
			/*Heidegger*/
		} else {
			this.removeNodeByData(this.tail.data); 
		}
	}

	/* removes all nodes, freeing-up entirely the linked list */
	clear() {
		//one can simply nullify the head, O(1)
		//this.head = null; 

		//one could run through all nodes, nullyfing them all, O(size)
		while(this.head) {
			var tmp = this.head; 
			this.head = this.head.next; 
			delete tmp.data; 
			tmp = null; //"delete tmp" will not work, since tmp is a declared variable and not a property. 
		}
	}

}
