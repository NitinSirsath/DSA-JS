// Top K Frequent Elements
// Given an integer array nums and an integer k, return the k most frequent elements within the array.

// The test cases are generated such that the answer is always unique.

// You may return the output in any order.

// Example 1:

// Input: nums = [1,2,2,3,3,3], k = 2

// Output: [2,3]
// Example 2:

// Input: nums = [7,7], k = 1

// Output: [7]
// Constraints:

// 1 <= nums.length <= 10^4.
// -1000 <= nums[i] <= 1000
// 1 <= k <= number of distinct elements in nums.


function frequentElement(nums,k) {
  let res = {}
        for(let num of nums){
           if(res[num]){
            res[num] = [...res[num],num]
           }else{
               res[num] = [num]
           }
        }
        const test =  Object.values(res).sort((a,b)=> b.length - a.length)
        let final = []
        for(let i = 0; i < k ; i++){
            final.push(test[i][0])
        }
   return final
    }


const nums =[1,2,2,3,3,3], k = 2

console.log(frequentElement(nums,k));
