var RandomizedSet = function() {
    this.storage = {}
    this.nums = []
};

RandomizedSet.prototype.insert = function(val) {
    if(this.storage[val] !== undefined) return false
    this.nums.push(val)
    this.storage[val] = this.nums.length - 1
    return true
};

RandomizedSet.prototype.remove = function(val) {
    if(this.storage[val] === undefined) return false
    let len = this.nums.length - 1;
    let index = this.storage[val];
    this.storage[this.nums[len]] = this.storage[val];
    [this.nums[index], this.nums[len]] = [this.nums[len], this.nums[index]];
    this.nums.pop()
    return delete this.storage[val]
};

RandomizedSet.prototype.getRandom = function() {
    return this.nums[Math.floor(this.nums.length * Math.random())]
};

 module.exports = {RandomizedSet};
