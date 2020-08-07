// Input: candidates = [2, 3, 6, 7], target = 7,
//     A solution set is:
// [
//     [7],
//     [2, 2, 3]
// ]
// Input: candidates = [2, 3, 5], target = 8,
//     A solution set is:
// [
//     [2, 2, 2, 2],
//     [2, 3, 3],
//     [3, 5]
// ]
var combinationSum = function (candidates, target) { // [2, 3, 6, 7], 7
    let result = [];
    const subarr = (curr, target, index) => {
        if(target === 0){
            result.push(curr);
            return;
        }
        for(let i = index; i < candidates.length; i++){ // i = 1
            let candidate = candidates[i]; // 3
            let difference = target - candidate; // 
            if(difference >= 0){
                subarr([...curr, candidate], difference, i); //([2,2,2],1,0)
            }
        }
    }
    //curr [2,2,3]
    //tar 0 
    //index = 1
    //i = 1
    subarr([], target, 0);
    return result;
};
// answer: [[2,2,3],[7]]
// our answer: [[2, 2, 3], [2, 3, 2], [3, 2, 2], [7]]
//helper method which will take the current result array, target and the candidates
//initially it will take target as the original target, current array will be empt and the candidates remain same
// eventually we will call that helper method recursively for each candidate
//conditional if the target - current canditate < 0 then we don't choose that candidate and move on to the next
//but if the target - candidate > 0, the we subtract value of candidate from target and push he candidate into the current result array and recursivel call the helper function with the reduced target
//Base case: if target === 0  push the current result to the final result and return

