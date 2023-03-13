//input: "hello"
//output: false
//input: "copyright"
//output: true

const isSpecial = (userInput) => {
  if (userInput === "") {
    return true;
  }

  const letter = userInput[0];
  const restOfIt = userInput.slice(1);

  if (restOfIt.includes(letter)) {
    return false
  } else {
    return isSpecial(restOfIt);
  }
}