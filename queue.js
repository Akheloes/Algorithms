/**
A first draft of a queue implementation in JS.
 */

module.exports.Node = class {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

module.exports.Queue = class {
    constructor() {
        this.last = null;
    }

    enqueue(node) {
        if(!this.last) {
            this.last = node;
        } else {
            let tmp = this.last;
            this.last = node;
            node.next = tmp;
        }
    }

    dequeue(data) {
        if(!this.last) {
            console.log('Void queue.');
        } else {
            if(this.last.data == data) {
                this.last = this.last.next;
                return;
            }
            let cursor = this.last;
            while(cursor) {
                if(cursor.next && cursor.next.data == data) {
                    cursor.next = cursor.next.next;
                    return;
                }
                cursor = cursor.next;
            }
        }
    }

    contains(data) {
        if(!this.last) {
            return false;
        } else {
            let cursor = this.last;
            while(cursor) {
                if(cursor.data == data) {
                    return true;
                }
                cursor = cursor.next;
            }
            return false;
        }
    }

    remove(data) {
        if(!this.contains(data)) {
            return false;
        } else {
            if(this.last.data == data) {
                this.last = this.last.next;
            } else {
                let cursor = this.last;
                while(cursor) {
                    if(cursor.next != null && cursor.next.data == data) {
                        cursor.next = cursor.next.next;
                    }
                    cursor = cursor.next;
                }
            }
            return true;
        }
    }

    printQueue() {
        if(!this.last) {
            console.log('Void queue.');
        } else {
            let stringifiedQueue = "";
            let cursor = this.last;
            while(cursor) {
                stringifiedQueue += cursor.data;
                if(cursor.next != null) {
                    stringifiedQueue += ' -> ';
                }
                cursor = cursor.next;
            }
            console.log(stringifiedQueue);
        }
    }
}

