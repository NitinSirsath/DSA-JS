 const totalSum = (arr) => {
   return   arr.length !== 0 && arr.reduce((total, next) => total + next)
 }
const longestSumArr = (nums, target) => {
    let arr = []
    let obj = {}
       for (let i = 0; i < nums.length; i++) {
                     arr.push(nums[i])
              if(totalSum(arr) <= target){
                 if(target === totalSum(arr)){
                     obj[`arr${Object.keys(obj).length + 1}`] = [...arr]
                    arr.shift()
                 }
                 continue
              }
              else{
                  do {
                   arr.shift()
                } while (totalSum(arr) > target);
                   if(target === totalSum(arr)){
                     obj[`arr${Object.keys(obj).length + 1}`] = [...arr]
                    arr.shift()
                 }
              }
        }
        const longest = Object.values(obj).sort((a,b) => b.length - a.length)[0]
    return longest
}

    console.log(longestSumArr([1,2,2,4,1,1,1,3], 6))
    
 
