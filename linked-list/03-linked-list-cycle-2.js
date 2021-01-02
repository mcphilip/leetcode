/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var detectCycle = function(head) {
    if (!head || head.next === null) return null;
    if (head === head.next) return head;

    let slug = head;
    let turtle = head;
    let rabbit = head;
    let stepsSlug = 0;
    let stepsTurtle = 1;
    let stepsRabbit = 1;
    let slugLastCaughtAt = null;
    let rabbitCaughtLast = false;

    const moveAnimal = function(animal, stepsToMove) {
        for (let i = 0; i < stepsToMove; i++) animal = animal.next;

        return animal;
    }

    // after one pass, either rabbit reaches end of list or has looped back around to reach turtle or sloth.
    console.log(`[s: ${slug.val}, t: ${turtle.val}, r: ${rabbit.val}] rabbit catch turtle...`);

    while (rabbit && rabbit.next) {
        turtle = turtle.next;
        rabbit = rabbit.next.next;
        stepsTurtle++;
        stepsRabbit += 2;
        
        if (turtle === rabbit || head === rabbit) break;
    }

    console.log(`[s: ${slug.val}, t: ${turtle.val}, r: ${rabbit.val}] rabbit caught turtle at: ${rabbit.val}`);

    if (!rabbit || !rabbit.next) return null; // no loop
    if (rabbit === head) return head; // loop starts at head
    if (rabbit.next === rabbit) return rabbit; // loop of size 1

    // prep second pass, move sloth halfway to rabbit
    let moveCount = Math.floor(stepsTurtle/2);
    stepsSlug += moveCount;
    slug = moveAnimal(slug, moveCount);

    console.log(`[s: ${slug.val}, t: ${turtle.val}, r: ${rabbit.val}] slug moved to: ${slug.val}`);

    let attemptCount = 0;

    while (true) {
        // rabit catch next:
        rabbit = rabbit.next;
        while (rabbit !== turtle && rabbit !== slug) rabbit = rabbit.next;

        if (rabbit === slug) {
            console.log(`[s: ${slug.val}, t: ${turtle.val}, r: ${rabbit.val}] rabbit caught slug at: ${rabbit.val}`);
        }
        else {
            console.log(`[s: ${slug.val}, t: ${turtle.val}, r: ${rabbit.val}] rabbit caught turtle at: ${rabbit.val}`);
        }

        if (slug.next === turtle && (slugLastCaughtAt === slug || rabbitCaughtLast)) {
            return rabbit;
        }

        // after second pass, rabbit guaranteed to catch either slug or turtle.
        if (rabbit === slug) {
            rabbitCaughtLast = false;
            slugLastCaughtAt = slug;
            turtle = slug;
            stepsTurtle = stepsSlug;
            slug = head;
            stepsSlug = Math.floor(stepsTurtle/2);
            slug = moveAnimal(slug, stepsSlug);

            console.log(`[s: ${slug.val}, t: ${turtle.val}, r: ${rabbit.val}] turtle moved to: ${turtle.val}`);
            console.log(`[s: ${slug.val}, t: ${turtle.val}, r: ${rabbit.val}] slug moved to: ${slug.val}`);
        }
        else {
            rabbitCaughtLast = true;
            slugLastCaughtAt = null;
            moveCount = Math.floor((stepsTurtle - stepsSlug)/2);
            stepsSlug += moveCount;
            slug = moveAnimal(slug, moveCount);
            console.log(`[s: ${slug.val}, t: ${turtle.val}, r: ${rabbit.val}] slug moved to: ${slug.val}`);
        }


        attemptCount++;
    }
};

module.exports = {detectCycle};
