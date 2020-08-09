var dailyTemperatures = function (T) {
    //declare result set with same length as input and default value 0
    let result = new Array(T.length).fill(0);
    //declare stack/array
    let stack = [];//[]
    //reverse loop over T 
    for(let index = T.length-1; index >= 0; index-- ){//index = 6;

        //if stack is empty skip rest of the code
        if(!stack.length){
            //push the current into stack and move to next iteration
            stack.push(index);
        }
        //if current temp is less than last temp in stack 
        else if( T[index] < T[stack[stack.length-1]] ){ // 76 < 73
            //subtract the indexes of current from in stack and fill in the result array
            result[index] = stack[stack.length-1] - index;
            //push the current into stack and move to next iteration
            stack.push(index);
        }
        //if current temp is more than last temp in stack
        else{
            //pop the element from stack till either stack is empty or last element in stack is bigger
            while ((T[index] >= T[stack[stack.length - 1]] ) && stack.length ) { //76 >= 73
                stack.pop();
            }
            stack.push(index)
        }
    }
    return result;
        
};
    //0    1    2   3   4   5   6   7
//T = [73, 74, 75, 71, 69, 72, 76, 73]
//R = [0, 0, 0, 0, 0, 0, 0, 0]