const {RandomizedSet} = require('./24 -randomized-set');

describe('RandomizedSet', () => {
    it('should handle leetcode example #1', () => {
        const randomizedSet = new RandomizedSet();
        expect(randomizedSet.insert(1)).toEqual(true); // Inserts 1 to the set. Returns true as 1 was inserted successfully.
        expect(randomizedSet.remove(0)).toEqual(false); // Returns false as 2 does not exist in the set.
        expect(randomizedSet.insert(0)).toEqual(true); // Inserts 2 to the set, returns true. Set now contains [1,2].
        let r = randomizedSet.getRandom();
        expect(true).toEqual(r === 1 || r === 0); // getRandom() should return either 1 or 2 randomly.
        expect(randomizedSet.remove(1)).toEqual(true); // Removes 1 from the set, returns true. Set now contains [2].
        expect(randomizedSet.insert(0)).toEqual(false); // 2 was already in the set, so return false.
        expect(randomizedSet.getRandom()).toEqual(0); // Since 2 is the only number in the set, getRandom() will always return 2.
    });
    it('should handle failed leetcode example #1', () => {
        // ["RandomizedSet","insert","insert","remove","insert","remove","getRandom"]
        // [[],[0],[1],[0],[2],[1],[]]
        const r = new RandomizedSet();
        expect(r.insert(0)).toEqual(true);
        expect(r.insert(1)).toEqual(true);
        expect(r.remove(0)).toEqual(true);
        expect(r.insert(2)).toEqual(true);
        expect(r.remove(1)).toEqual(true);
        expect(r.getRandom()).toEqual(2);
    })
});
