// Container With Most Water
// Solved 
// You are given an integer array heights where heights[i] represents the height of the 
// i
// t
// h
// i 
// th
//   bar.

// You may choose any two bars to form a container. Return the maximum amount of water a container can store.

// Example 1:



// Input: height = [1,7,2,5,4,7,3,6]

// Output: 36
// Example 2:

// Input: height = [2,2,2]

// Output: 4




const maxStorage = (arr) => {
    let maxCount = 0
    let left = 0
    let right = arr.length-1
    while(left < right){
        const poles = [arr[left],arr[right]]
        const bottleneckHeight = poles[0] > poles[1] ? poles[1] : poles[0]
        const storage = bottleneckHeight * Math.abs(left-right)
        console.log(poles)
        if(storage > maxCount){
            maxCount = storage
        }
        if(arr[left] < arr[right]){
            left++
        }else{
            right--
        }
    }
    return maxCount
}

const arr = [1,7,2,3,500,500,7,6]
console.log(maxStorage(arr))
