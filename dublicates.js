

const test = (numbers, target) => {
    const arr = Array.from(new Set(numbers))
    const res= []
    let l = 0
    let r = l+1
   
      while(l < arr.length){
          console.log(l, arr.length)
           if(arr[l] !== arr[r]){
              res.push(arr[l])
           }
                l++
                r++
      }
      return res
    }



const input= [1, 1, 2, 2, 3, 4, 4,6,6,6,6,7,7,7]
const target = [ 1, 2, 3, 4,]



console.log(test(input,target))

// console.log(Array.from(new Set(arr)))
