// Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].

// Each product is guaranteed to fit in a 32-bit integer.

// Follow-up: Could you solve it in 
// O
// (
// n
// )
// O(n) time without using the division operation?

// Example 1:

// Input: nums = [1,2,4,6]

// Output: [48,24,12,8]
// Example 2:

// Input: nums = [-1,0,1,2,3]

// Output: [0,-6,0,0,0]
// Constraints:

const nums = [1,2,4,6]

const getProduct = (nums) => {
    let arr = []
    for(let i in nums){
        const test = [...nums]
        test.splice(i,1)
        const product = test.reduce((current,next) => current * next)
        console.log(product,'prod')
        arr.push(product)
    }
    return arr
}

console.log(getProduct(nums))
