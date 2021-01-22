/**
 * Initialize your data structure here.
 */
var TwoSum = function() {
    this.evenOddMap = new Map();
    this.evenOddMap.set(1, new Set())
    this.evenOddMap.set(2, new Set());
    this.duplicatedNumbers = new Set();
    this.previouslyFoundNumbers = new Set();
    this.hasPositiveNegativePair = false;
    this.hasZero = false;
};

/**
 * Add the number to an internal data structure.. 
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function(number) {
    let set = this.evenOddMap.get(number % 2 === 0 ? 2 : 1);

    if (set.has(number)) {
        this.duplicatedNumbers.add(number);
    } else {
        set.add(number);

        if (!this.hasZero && number === 0) this.hasZero = true;

        //check if inverse exists in set
        if (!this.hasPositiveNegativePair && number !== 0) {
            if (set.has(number * -1)) this.hasPositiveNegativePair = true;
        }

    }
};

/**
 * Find if there exists any pair of numbers which sum is equal to the value. 
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function(value) {
    // check edge cases that don't require iterating across many values:
    // value is even and a duplicated number exists adding up to it
    // value is 0 and a positive negative pair has been added
    // 0 exists in stream
    if (value === 0) return this.hasPositiveNegativePair || this.duplicatedNumbers.has(0);
    if (this.previouslyFoundNumbers.has(value)) return true;
    if (value !== 0 && value % 2 === 0 && this.duplicatedNumbers.has(value/2)) return true;
    if (this.hasZero) {
        if (value % 2 === 0) {
            if (this.evenOddMap.get(2).has(value)) return true;
        }
        else {
            if (this.evenOddMap.get(1).has(value)) return true;
        }
    }

    const evenSet = this.evenOddMap.get(2);
    const evenVals = [];
    evenSet.forEach(v => evenVals.push(v));
    const oddSet = this.evenOddMap.get(1);
    let found = false;

    if (value % 2 === 1) {
        for (let i = 0; i < evenSet.size; i++) {
            let evenVal = evenVals[i];
            if (evenVal*2 !== value && oddSet.has(value - evenVal)) {
                found = true;
                break;
            }
        }
        if (found) {
            this.previouslyFoundNumbers.add(value);
            return true;
        }
    }
    else {
        let oddVals = [];
        oddSet.forEach(v => oddVals.push(v));
        for (let i = 0; i < evenSet.size; i++) {
            let evenVal = evenVals[i];
            if (evenVal*2 !== value && oddSet.has(value - evenVal) ||
                evenSet.has(value - evenVal)) {
                found = true;
                break;
            }
        };
        if (found) {
            this.previouslyFoundNumbers.add(value);
            return true;
        }
        for (let i = 0; i < oddSet.size; i++) {
            let oddVal = oddVals[i];
            if (oddVal*2 !== value && oddSet.has(value - oddVal) ||
                evenSet.has(value - oddVal)) {
                found = true;    
                break;
            }
        };
        if (found) {
            this.previouslyFoundNumbers.add(value);
            return true;
        }
    }

    return false;
};

/** 
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */

 module.exports = {TwoSum};
