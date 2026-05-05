function ListNode(val, next = null){
    this.val=val;
    this.next=next
}

var rotateRight = function(head, k){
    if(!head || !head.next || k === 0) return head

    let length = 1;
    let tail = head;

    while(tail.next){
        tail=tail.next
        length++
    }

    tail.next=head

    k=k%length

    let setpsToNewTail = length - k - 1
    let newTail = head

    for(let i=0; i<setpsToNewTail; i++){
        newTail=newTail.next
    }

    let newHead = newTail.next
    newTail.next = null

    return newHead
}

// Helper: create linked list from array
function createList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;

    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }

    return dummy.next;
}

// Helper: print linked list
function printList(head) {
    let result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    console.log(result.join(" -> "));
}

// ===== TEST =====
let head = createList([1, 2, 3, 4, 5]);
let k = 2;

let rotated = rotateRight(head, k);
printList(rotated);