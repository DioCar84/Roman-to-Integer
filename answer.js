/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let numeralMap = {'I': 1, 'IV': 4, 'V': 5, 'IX':9,  'X':10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
    let sum = 0;
    let numeralArray = Array.from(s);
    
    for(let i = 0; i < numeralArray.length; i++){
        if(numeralMap[numeralArray[i]] < numeralMap[numeralArray[i+1]]){
            sum += (numeralMap[numeralArray[i+1]] - numeralMap[numeralArray[i]]);
            i++;
        } else {
            sum += numeralMap[numeralArray[i]];
        }
    }
    
    return sum;
};
