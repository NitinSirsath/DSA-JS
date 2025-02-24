

const test = (numbers) => {
    let res= []
    let l = 0
      while(l < numbers.length){
        if(numbers[l] !== 0){
            res.push(numbers[l])
        }
        l++
    }
    return [...res,...Array(numbers.length - res.length).fill(0)]
}


const input= [0, 1, 0, 3, 12]
const target = [1, 3, 12, 0, 0]



console.log(test(input))



// console.log(Array.from(new Set(arr)))
