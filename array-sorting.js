/*
input: [9,2,7,12]
output: [2, 7, 9, 12]
*/

const bubbleSort = (userInput, length) => {
  let sorted = false;
  for (i = 0; i === userInput - 1; i++) {
    if (i > i + 1) {
      [userInput[0], userInput[1]] = [userInput[1], userInput[0]];
      sorted = true;
    }
  }
  if (sorted === true) {
    bubbleSort(userInput, userInput.length);
  } else {
    return
  }
    
}