const {MyHashSet} =  require('./01-design-hash-set');

describe('MyHashSet', () => {
    describe('add', () => {
        it('should add to correct bucket', () => {
            const hashSet = new MyHashSet();
            hashSet.add(0);
            hashSet.add(MyHashSet.bucketCount + 1);
            
            expect(hashSet.getBucket(0)[0]).toEqual(0);
            expect(hashSet.getBucket(1)[0]).toEqual(MyHashSet.bucketCount+1);
        });
        it('should add value only once to each bucket', () => {
            const hashSet = new MyHashSet();
            hashSet.add(0);
            hashSet.add(0);
            expect(hashSet.getBucket(0).length).toEqual(1);
        });
    });
    describe('contains', () => {
        it('should work!', () => {
            const hasSet = new MyHashSet();
            hasSet.add(0);
            expect(hasSet.contains(0)).toEqual(true);
        });
    });
    describe('remove', () => {
        it('should work!', () => {
            const hashSet = new MyHashSet();
            hashSet.add(0);
            hashSet.remove(0);

            expect(hashSet.contains(0)).toEqual(false);            
        });
    });
});
