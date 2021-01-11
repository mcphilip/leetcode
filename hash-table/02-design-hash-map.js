/**
 * Initialize your data structure here.
 */
var MyHashMap = function() {
    this.buckets = [];
    for (let i = 0; i < MyHashMap.bucketCount; i++) {
        this.buckets[i] = [];
    }
};

MyHashMap.bucketCount = 1000;

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    let bucket = this.getBucket(key);
    bucket[key] = value;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    let bucket = this.getBucket(key);
    bucket[key] = null;
};

/**
 * Returns -1 if the map does not contain the element
 * @param {number} key
 * @return {boolean}
 */
MyHashMap.prototype.get = function(key) {
    const bucket = this.getBucket(key);

    const val = bucket[key];

    if ( !val && val !== 0) {
        return -1;
    }
    return val;
};

MyHashMap.prototype.hash = function(key) {
    return key % MyHashMap.bucketCount;
};

MyHashMap.prototype.getBucket = function(key) {
    return this.buckets[this.hash(key)]
};

 module.exports = {MyHashMap};
