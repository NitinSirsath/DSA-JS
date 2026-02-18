// Longest Consecutive Sequence
// Solved 
// Given an array of integers nums, return the length of the longest consecutive sequence of elements that can be formed.

// A consecutive sequence is a sequence of elements in which each element is exactly 1 greater than the previous element. The elements do not have to be consecutive in the original array.

// You must write an algorithm that runs in O(n) time.

// Example 1:

// Input: nums = [2,20,4,10,3,4,5]

// Output: 4
// Explanation: The longest consecutive sequence is [2, 3, 4, 5].

// Example 2:

// Input: nums = [0,3,2,5,4,6,1,1]

// Output: 7



// const nums = [2,20,4,10,3,4,5]


const getModify = (nums) => {
    let collection = {}
   for(let i = 0; i < nums.length -1;i++){
       collection[i] = [nums[i]]
       for(let j = i + 1; j < nums.length;j++){
           const lastNum = collection[i][collection[i].length -1]
           if(lastNum + 1 === nums[j])
          collection[i] = [...collection[i],nums[j]] 
       }
   }
   return Object.values(collection).sort((a,b)=>b-a)[0].length
}



console.log(getModify(nums))
