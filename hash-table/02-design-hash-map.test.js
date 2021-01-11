const {MyHashMap} =  require('./02-design-hash-map');

describe('MyHashMap', () => {
    describe('add', () => {
        it('should add to correct bucket', () => {
            const hashMap = new MyHashMap();
            hashMap.put(0, 1);
            hashMap.put(MyHashMap.bucketCount, 2);
            
            expect(hashMap.getBucket(0)[0]).toEqual(1);
            expect(hashMap.getBucket(MyHashMap.bucketCount)[MyHashMap.bucketCount]).toEqual(2);
        });
        it('should add value only once to each bucket', () => {
            const hashMap = new MyHashMap();
            hashMap.put(0, 1);
            hashMap.put(0, 2);
            expect(hashMap.getBucket(0).length).toEqual(1);
        });
    });
    describe('contains', () => {
        it('should work!', () => {
            const hasSet = new MyHashMap();
            hasSet.put(0, 0);
            expect(hasSet.get(0)).toEqual(0);
        });
    });
    describe('remove', () => {
        it('should work!', () => {
            const hashMap = new MyHashMap();
            hashMap.put(0, 1);
            hashMap.remove(0);

            expect(hashMap.get(0)).toEqual(-1);            
        });
    });
});
