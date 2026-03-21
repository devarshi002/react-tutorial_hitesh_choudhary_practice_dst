function reverseList(head) {
    let prev = null
    let current = head

    while( current !== null) {
        let next = current.next //store next

        current.next=prev
        prev=current
        current=next
    }

    return prev
}


