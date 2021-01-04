const {isPalindrome} = require('./09-is-list-palindrome');

describe('isPalindrome', () => {
    it('should return false for bad input', () => {
        expect(isPalindrome(null)).toEqual(false);
        expect(isPalindrome()).toEqual(false);
    });
    it('should return true for single node list', () => {
        const node1 = {val: 1, next: null};

        expect(isPalindrome(node1)).toEqual(true);
    });
    it('should return false for two node list with different node values', () => {
        const node1 = {val: 1, next: null};
        const node2 = {val: 2, next: null};
        node1.next = node2;

        expect(isPalindrome(node1)).toEqual(false);
    });
    it('should return true for two node list with identical node values', () => {
        const node1 = {val: 1, next: null};
        const node2 = {val: 1, next: null};
        node1.next = node2;

        expect(isPalindrome(node1)).toEqual(true);
    });
    it('should return true for odd numbered length list that contains a palindrome', () => {
        const node1 = {val: 1, next: null};
        const node2 = {val: 2, next: null};
        const node3 = {val: 1, next: null};
        node1.next = node2;
        node2.next = node3;

        expect(isPalindrome(node1)).toEqual(true);
    });
    it('should return false for odd numbered length list that does not contain a palindrome', () => {
        const node1 = {val: 1, next: null};
        const node2 = {val: 2, next: null};
        const node3 = {val: 3, next: null};
        node1.next = node2;
        node2.next = node3;

        expect(isPalindrome(node1)).toEqual(false);
    });
    it('should return true for even number length list that contains a palindrome', () => {
        const node1 = {val: 1, next: null};
        const node2 = {val: 2, next: null};
        const node3 = {val: 2, next: null};
        const node4 = {val: 1, next: null};
        node1.next = node2;
        node2.next = node3;
        node3.next = node4;

        expect(isPalindrome(node1)).toEqual(true);
    });
    it('should return false for even number length list that does not contain a palindrome', () => {
        const node1 = {val: 1, next: null};
        const node2 = {val: 2, next: null};
        const node3 = {val: 3, next: null};
        const node4 = {val: 1, next: null};
        node1.next = node2;
        node2.next = node3;
        node3.next = node4;

        expect(isPalindrome(node1)).toEqual(false);
    });
});
