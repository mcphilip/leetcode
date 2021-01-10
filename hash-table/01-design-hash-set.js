/**
 * Initialize your data structure here.
 */
var MyHashSet = function() {
    this.buckets = [];
    for (let i = 0; i < MyHashSet.bucketCount; i++) {
        this.buckets[i] = [];
    }
};

MyHashSet.bucketCount = 1000;

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    if (!this.contains(key)) {
        const bucket = this.getBucket(key);
        bucket.push(key);
    }
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    let bucket = this.getBucket(key);
    for (let i = 0; i < bucket.length; i++) {
        if (bucket[i] === key) {
            bucket[i] = null;
            break;
        }
    }
};

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    const bucket = this.getBucket(key);

    for (let i = 0; i < bucket.length; i++) {
        if (bucket[i] === key) return true;
    }

    return false;
};

MyHashSet.prototype.hash = function(key) {
    return key % MyHashSet.bucketCount;
};

MyHashSet.prototype.getBucket = function(key) {
    return this.buckets[this.hash(key)]
};

MyHashSet.prototype.getBucketByIndex = function(index) {
    return this.buckets[index];
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

 module.exports = {MyHashSet};
