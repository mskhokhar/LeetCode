/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let result = [];
    let outer, inner;
    if(nums1.length < nums2.length){
        outer = nums1;
        inner = nums2
    }else{
        inner = nums2;
        outer = nums1;
    }
    for( let i = 0; i < outer.length;  i ++){
        for( let j = 0; j < inner.length; j++ ){
            if(outer[i] === inner[j]){
                result.push(outer[i]);
                inner = inner.slice(0,j).concat(inner.slice(j+1));
                break
            }
        }
    }
    return result;
};