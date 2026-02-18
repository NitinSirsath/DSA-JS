const totalSum = (arr) => {
   return   arr.length !== 0 && arr.reduce((total, next) => total + next)
 }
 
 const getIndexes = (arr1,arr2) => {
    let indexes = []
    let count = 0
    for(let i = 0; i< arr1.length; i++){
        if(indexes.length !== 0 && arr1[i] !== arr2[count]){
             indexes=[]
            count = 0
        }
        if(arr1[i] === arr2[count]){
            indexes.push(i)
            count++
            if(arr2.length === indexes.length) {
                return indexes
            }
        }else{
            indexes=[]
            count = 0
            
        }
    }
    return false
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
    return getIndexes(nums,longest)
}

    console.log(longestSumArr([3,2,2,1,3], 6))
