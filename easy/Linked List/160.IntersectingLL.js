var getIntersectionNode = function(headA, headB) {
    if (headA === null || headB === null) return null;
  
    let nodeA = headA;
    let nodeB = headB;
  
    while(nodeA !== nodeB) {
    
        nodeA = nodeA === null ? headB : nodeA.next;
        nodeB = nodeB === null ? headA : nodeB.next;
    
    
          
    }
 
    
    return nodeA;
};


/*
        curA = headA
        curB = headB
        while curA != curB:
            curA = curA.next if curA else headB
            curB = curB.next if curB else headA
        return curA
   - If the two linked lists have no intersection at all, return null.
   - The linked lists must retain their original structure after the function returns.
   - You may assume there are no cycles anywhere in the entire linked structure.
   - Each value on each linked list is in the range [1, 10^9].
   - Your code should preferably run in O(n) time and use only O(1) memory.
*/
