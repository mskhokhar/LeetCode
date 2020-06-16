/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let counter = {};
    let indexTracker = {};
    
    for(let i = 0; i < s.length; i++){
        let char = s[i];
        if( !counter[ char ] ){
            counter[ char ] = 1;
        }else{
            counter[ char ] += 1;
        }
        if( !indexTracker[ char ] ) indexTracker[ char ] = i;
    }
    // Object.keys(counter).forEach( key => {
    //     if( counter[key] === 1 ){
    //         console.log( 'aa ', indexTracker[key]);
    //        return indexTracker[key]; 
    //     } 
    // })
    let keys = Object.keys(counter);
    for( let i = 0; i < keys.length; i++ ){
        let key = keys[i];
        if( counter[key] === 1 ){
           return indexTracker[key]; 
        } 
    }
    
    return -1;
};