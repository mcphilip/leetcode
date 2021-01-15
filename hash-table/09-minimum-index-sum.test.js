const {findRestaurant} = require('./09-minimum-index-sum');

describe('findRestaurant', () => {
    it('should handle single item lists', () => {
        expect(findRestaurant(["X"], ["X"])).toEqual(["X"]);
        expect(findRestaurant(["X"], ["Y", "X"])).toEqual(["X"]);
        expect(findRestaurant(["X", "Y", "Z"], ["Y"])).toEqual(["Y"]);
    });
    it('should handle leetcode example 1', () => {
        let list1 = ["Shogun","Tapioca Express","Burger King","KFC"];
        let list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"];
         
        let result = findRestaurant(list1, list2);

        expect(result).toEqual(["Shogun"]);
    });
    it('should handle leetcode example 2', () => {
        let list1 = ["Shogun","Tapioca Express","Burger King","KFC"];
        let list2 = ["KFC","Shogun","Burger King"];
         
        let result = findRestaurant(list1, list2);

        expect(result).toEqual(["Shogun"]);
    });
    it('should handle leetcode example 3', () => {
        let list1 = ["Shogun","Tapioca Express","Burger King","KFC"];
        let list2 = ["KFC","Burger King","Tapioca Express","Shogun"];
         
        let result = findRestaurant(list1, list2);

        expect(result.length).toEqual(4);
        expect(result.find((e) => e === "Shogun")).toEqual("Shogun");
        expect(result.find((e) => e === "Tapioca Express")).toEqual("Tapioca Express");
        expect(result.find((e) => e === "KFC")).toEqual("KFC");
        expect(result.find((e) => e === "Burger King")).toEqual("Burger King");
    });

    it('should handle leetcode example 4', () => {
        let list1 = ["Shogun","Tapioca Express","Burger King","KFC"];
        let list2 = ["KNN","KFC","Burger King","Tapioca Express","Shogun"];
         
        let result = findRestaurant(list1, list2);

        expect(result.length).toEqual(4);
        expect(result.find((e) => e === "Shogun")).toEqual("Shogun");
        expect(result.find((e) => e === "Tapioca Express")).toEqual("Tapioca Express");
        expect(result.find((e) => e === "KFC")).toEqual("KFC");
        expect(result.find((e) => e === "Burger King")).toEqual("Burger King");
    });
});
