var kthGrammar = function(N, K) {
    if (N === 1) return 0;

    let head = {val: 0, next: null};

    for (let i = 1; i < N; i++) {
        expandList(head, K);
    }

    if (K === 1) return head.val;

    for (let i = 2; i <= K; i++) {
        head = head.next;
    }

    return head.val;
};

const expandList = function(head, K) {
    let originalHead = head;
    let nextNode;
    let count = 1;
    while (originalHead && count <= K) {
        nextNode = originalHead.next;
        if (originalHead.val === 0) {
            originalHead.next = {val: 1, next: nextNode};
        }
        else {
            originalHead.next = {val: 0, next: nextNode};
        }

        originalHead = originalHead.next.next;
        count += 2;
    }

    return count;
};

module.exports = {expandList, kthGrammar};
