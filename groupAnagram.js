// Input: strs = ["act","pots","tops","cat","stop","hat"]

// Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]

const isAnagram = (str1, str2) => {
  const sorted1 = str1?.split('').sort().join('');
  const sorted2 = str2?.split('').sort().join('');
  if (sorted1 === sorted2) return true;
  return false;
};

function groupAnagrams(strs) {
  let original = {};
    let visitedItem = []
  let sorted = strs.map(element => element.split('').sort().join(''))
    const filters = sorted.map((element , index)=> {
        const lastVisit = visitedItem?.find(element =>  element.index === index)
        if(lastVisit === undefined && index === strs.length -1){
             original[`arr${Object.keys(original).length + 1}`] = [strs[index]];
        }
                let temp =[]
        for(let i = 1; i < strs.length; i++){
          if(index < i){
                  const visits = visitedItem?.find(element =>  element.index === index)
            if(element === sorted[i] && visits === undefined){
                 visitedItem.push({index : i, value : strs[i]})
                temp.push(strs[i])
                    
            }
              if(i === strs.length -1 && visits === undefined){
                 temp.push(strs[index])
                  original[`arr${Object.keys(original).length + 1}`] = temp;
               temp=[]
            }

          }
        }
    })
    const nestedArray = Object.values(original).map(element => (element)).sort((a,b)=> a.length - b.length)
  return nestedArray;
}

const strs = ["act","pots","tops","cat","stop","hat"]

console.log(groupAnagrams(strs));
