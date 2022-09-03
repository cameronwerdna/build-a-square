//function which takes an integer and creates a equal row/column grid of '+'
function generateShape(integer){
    let grid = ''
    for (let row = 0; row < integer; row++) {
      for (let col = 0; col < integer; col++) {
        grid += '+'
      }
      grid += '\n'
    }
    return grid.slice(0, -1)
    
  }



console.log(generateShape(8)) // => returns 8x8 grid of '+'s
console.log(generateShape(4)) // => returns 8x8 grid of '+'s
console.log(generateShape(13)) // => returns 8x8 grid of '+'s