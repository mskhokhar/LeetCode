/**
 * @param {number[]} height
 * @return {number}
 */
// var maxArea = function(height) {
//   let maxArea = 0;
    
//   for(let i=0;i<height.length-1;i++){
//      let pointer1 = height[i];
//     for(let j=i+1;j<height.length;j++){
//       let pointer2 = height[j];
//       let area = Math.min(pointer1,pointer2)*(j-i);
      
//       maxArea = Math.max(maxArea, area);
//     }
//   }
//   return maxArea;
// };
var maxArea = function(height){
  let maxArea = 0;
  //two pointers each at the both ends
  
  let left = 0;
  let right = height.length - 1;
  
 
  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    maxArea = Math.max(maxArea, area);
    if (height[left] > height[right]) {
      right --;
    } else {
      left ++;
    }
  }
  
  return maxArea;
}
