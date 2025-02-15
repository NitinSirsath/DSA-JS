// You are given a a 9 x 9 Sudoku board board. A Sudoku board is valid if the following rules are followed:

// Each row must contain the digits 1-9 without duplicates.
// Each column must contain the digits 1-9 without duplicates.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without duplicates.
// Return true if the Sudoku board is valid, otherwise return false

// Note: A board does not need to be full or be solvable to be valid.

const board=[[".",".","4",".",".",".","6","3","."],[".",".",".",".",".",".",".",".","."],["5",".",".",".",".",".",".","9","."],[".",".",".","5","6",".",".",".","."],["4",".","3",".",".",".",".",".","1"],[".",".",".","7",".",".",".",".","."],[".",".",".","5",".",".",".",".","."],[".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".","."]]


 const getValidSuduku = (board) => {
    const obj = {}
    let count = 0
    for(let i in board){
         if(Number(i) === 3){
            count = 3
        }
          if(Number(i) === 6){
            count = 6
        }
        obj[count] = [...obj[count] ?? [],...board[i].slice(0,3)]
        obj[count + 1] = [...obj[count + 1] ?? [],...board[i].slice(3,6)]
        obj[count + 2] = [...obj[count + 2] ?? [],...board[i].slice(6,9)]
    }
       const subBox =  Object.values(obj)
     
        let columnValues= []
        let singleColumn = []
    for(let i in board){
         singleColumn= []
    for(let j in board){
         singleColumn.push(board[j][i])
    }
         columnValues = [...columnValues,singleColumn]
    }
    
    let rowCheck,colCheck,subBoxCheck
   
     for(let i in board){
         const getSubBoxes = subBox[i].filter(element => element !== ".")
         const getNumsRow = board[i].filter(element => element !== ".")
         const getNumsCol = columnValues[i].filter(element => element !== ".")
          rowCheck = new Set(getNumsRow).size === getNumsRow.length 
          colCheck = new Set(getNumsCol).size === getNumsCol.length
          subBoxCheck = new Set(getSubBoxes).size === getSubBoxes.length 
         
          if(!rowCheck || !colCheck || !subBoxCheck){
              return false
          }
     }
         return true
 }
 
 console.log(getValidSuduku(board))
