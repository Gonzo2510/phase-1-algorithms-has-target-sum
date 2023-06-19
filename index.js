const { consoleLog } = require("mocha/lib/reporters/base")

function hasTargetSum(array = [4], target = 4) {
  //console.log(array.length)
  for (let first = 0; first < array.length; first++) { //loop through array
    if (array.length === 1) {
    console.log(`there was only one item in the array, returning false`)
    return false
    } else if (array[first] > target){ //first number is bigger

      if (first === array.length -1){ //last iteration
        console.log('end of array was too big and was skipped, returning false')
        return false
      }

      console.log(`${array[first]} first too big, continuing`) // first in array was too big, skipping to next iteration
      continue 



    } else if (array[first] < target){ //first is smaller
        for (let second = first + 1; second < array.length; second++) { //get second number
          let sum = array[first] + array[second] //add numbers together

          if (sum === target) { //return true if equal target
            console.log(`${array[first]} and ${array[second]} equal the target: true`)
            return true
          } else {
            continue
          }
        }
    } else if (first === array.length -1) {
      console.log('last iteration false')
      return false
    }
  }
}
hasTargetSum()






/* 
  Write the Big O time complexity of your function here
*/

/* 
  // Add your pseudocode here

loop though array
  first number is bigger
    if on last iteration
      retun false
    skip

  first number is smaller
    get second number
      if second is bigger
        skip 
      second smaller
        add numbers
          if equal target
            return true
          if not 
            continue
        last iteration 
          none match 
            return false










  write a loop to add up every pair of numbers
  when adding a number check to see if it is less than the target number.
    if less continue
    else skip 
  if a pair adds up to equal target return true
  else return false

*/

/*
  Add written explanation of your solution here
*/



// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
