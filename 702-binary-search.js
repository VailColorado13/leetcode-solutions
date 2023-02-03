/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

    let left = 0 
    let right = nums.length -1

    while (left <= right) {
        let middle = Math.floor((left + right)/2)
        let potentialMatch = nums[middle]
        if (potentialMatch === target) {return middle}
        if (potentialMatch > target) {right = middle -1}
        if (potentialMatch < target) {left = middle +1}
    }
    
    return -1
}



//Create a variable 'left' as a left pointer 
//create a variable 'right' as a right pointer 
//create a while loop that executes while left <= right
    //create a middle variable: Math.floor(right + left / 2) 
    //this variable will serve as our potential match variable
    //does our potential match === target? return that index
    //is our potential match > target? 
        //change the right pointer to equal middle -1. 
        //we can disregard the right side, because all those nums 
        //will also be greater than target
    //is our potential match < target? 
        //change our left pointer to middle + 1
        //we can disregard the left side, because all of those nums
        //will also be less than target  
//if we exit the loop, which means that we've met the contition where 
//left and right will have swapped places, that means we didnt find a match. 
    //return -1