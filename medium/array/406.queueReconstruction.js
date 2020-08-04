// Input:
// [[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]]
// => [[7, 0], [7, 1], [6, 1], [5, 0], [5, 2], [4, 4]] (tall to short)


// Output:
// [[5, 0], [7, 0], [5, 2], [6, 1], [4, 4], [7, 1]]


// Suppose you have a random list of people standing in a queue.
// Each person is described by a pair of integers(h, k), where h is the height of the person and k is the number of people in front of this person who have a height greater than or equal to h.


var reconstructQueue = function (people) {

    // sort people by height
    people = people.sort(cb);
    //[ [ 7, 0 ], [ 7, 1 ], [ 6, 1 ], [ 5, 0 ], [ 5, 2 ], [ 4, 4 ] ]


    // create a new array
    let result = [];
    // iterate through the new sorted people array and place them in some special order
    for (let i = 0; i < people.length; i++) {
        result.splice(people[i][1], 0, people[i]);
    }
    // return the new array
    return result;//[ [5,0], [7,0], [5,2], [6,1], [4,4] ,[7,1],  ]




};


const cb = (a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return b[0] - a[0];
}


