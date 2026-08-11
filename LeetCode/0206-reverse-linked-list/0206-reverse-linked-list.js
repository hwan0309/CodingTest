/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {

    //재귀 호출

    if(head === null || head.next === null){
        return head;
    }

    let reversedHead = reverseList(head.next);

    //방향 뒤집기  현재노드(head)의 다음노드 (head.next)가 다시 현재 노드(head)를 바라보게

    head.next.next = head;

    //현재노드 연결 끊기  현재노드는 역순 리스트의 마지막 노드가 되므로 next를 다시 null로 설정
    head.next = null;

    return reversedHead;
    
};