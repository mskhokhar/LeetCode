// Input: [1, 2, 3]
// Output:
// [
//     [1, 2, 3],
//     [1, 3, 2],
//     [2, 1, 3],
//     [2, 3, 1],
//     [3, 1, 2],
//     [3, 2, 1]
// ]

// base case nums.length === 0 return
// each step, for loop through the array, and remove 1 element
// pass the rest of the array in to recursio

var permute = function (nums) {



};


const permute = (nums) => {
    let result = []; 

    const helper = (curr, remaining) => {
        if (remaining.length === 0) {
            result.push(curr);
            return;
        } else {
            for (let i = 0; i < remaining.length; i++) {
                // curr.push(remaining[i]);
                helper([...curr, remaining[i]], remaining.slice(0, i).concat(remaining.slice(i + 1)));
            }
        }
    }

    helper([], nums);
    return result;
}



var permute = function(nums) {
  let results = [];

  let permutations = (current, remaining) => {
    if(remaining.length <= 0) results.push(current.slice());
    else {
      for(let i = 0; i < remaining.length; i++) { // Loop through remaining elements
        current.push(remaining[i]); // Insert the iTH element onto the end of current
        permutations(current.slice(), remaining.slice(0, i).concat(remaining.slice(i+1))); // Recurse with inserted element removed
        current.pop(); // Remove last inserted element for next iteration
      }
    }
  };

  permutations([], nums);
  return results;
};




/*

[a,b,c] = nums

                          []
        /                  |                  \
      [a]                 [b]                 [c]
    /     \             /     \             /     \
  [a,b] [a,c]        [b,a]  [b,c]        [c,a]   [c,b]
    |     |            |      |            |       |
[a,b,c][a,c,b]      [b,a,c][b,c,a]      [c,a,b] [c,b,a]  

*/


