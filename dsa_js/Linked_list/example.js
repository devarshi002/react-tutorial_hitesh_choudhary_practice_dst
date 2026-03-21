class Node {
    constructor(value) {
        this.value=value
        this.next=null
    }
}


class LinkedList {
    constructor() {
        this.head=null;
    }

    append(value){
        let newNode = new Node(value)

        if(this.head === null) {
            this.head=newNode
            return;
        }

        let current = this.head

        while(current.next!==null){
            current=current.next
        }
        current.next=newNode
    }

    //inserting node

    insertAtBeginning(value) {
        let newNode = new Node(value)
        newNode.next=this.head
        this.head=newNode
    }

    //delete node from start

    deleteFromBeginning() {
        if(this.head===null) return;
        this.head=this.head.next

    }

    //delete node from end

    deleteFromEnd() {
        if(this.head === null) return;

        if(this.head.next===null) {
            this.head=null
            return
        }

        let current = this.head
        while(current.next.next !== null) {
            current=current.next
        }
        current.next=null
    }

    //check value if present
    search(value) {
        let current = this.head

        while(current!==null) {
            if(current.value===value){
                return true
            }
            current=current.next
        }
        return false
    }


    //find middle ele
    findmiddle() {
        let slow = this.head
        let fast = this.head

        while(fast !== null && fast.next !==null) {
            slow=slow.next
            fast=fast.next.next
        }
        return slow.value
    }

    //delete cylce
    hasCycle() {
        let slow = this.head
        let fast = this.head

        while (fast !==null && fast.next !==null) {
            slow=slow.next;
            fast=fast.next.next

            if(slow===fast) {
                return true
            }
        }
        return false
    }

    //insert at position

    insertAatPosition(value, pos) {
        let newNode = new Node(value)

        if(pos===0) {
            newNode.next=this.head
            this.head=newNode
            return
        }
        let current = this.head
        let index=0

        while (index < pos -1) {
            current = current.next;
            index++
        }

        newNode.next=current.next
        current.next=newNode
    }

    //delete by value

    deleteByValue(value) {
        if(this.head===null) return

        if(this.head.value===value){
            this.head=this.head.next
            return
        }
        let current=this.head
        
        while(current.next!==null) {
            if(current.next.value===value){
                current.next=current.next.next
                return
            }
            current=current.next
        }
    }


    print() {
        let current = this.head;
        while (current!==null) {
            console.log(current.value);
            current=current.next
            
        }
    }
}


let list = new LinkedList();


list.insertAtBeginning(1)
list.insertAtBeginning(2)
list.insertAtBeginning(3)

console.log(list.search(20));
console.log(list.search(2));

list.print()

console.log("===========================");


list.deleteFromBeginning()

list.print()

console.log("===========================");

list.deleteFromEnd()

list.print()