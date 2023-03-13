//input [7,9,"hi",12,"hi",7,53]
//output [7,9,"hi",12,53]

const dedup = (userArray) => {
  let uniqueArray = [...new Set(userArray)];
  return uniqueArray;
}

const reDedup = (userArray) => {
  if (userArray.length <= 1) {
    return userArray;
  }

  const firstElement = userArray[0];
  const restOfArray = userArray.slice(1);
  console.log(restOfArray)

  if (restOfArray.includes(firstElement) === true) {
    return reDedup(restOfArray);
  } else {
    return firstElement + reDedup(restOfArray);
  } //use string.split here?
}

const reReDedup = (userArray) => {
  if (userArray.length <= 1) {
    return userArray;
  }

  //const firstElement = userArray[0];
  const restOfArray = userArray.slice(1);

  const reDuppedArray = userArray.map((c, index) => {
    return userArray.indexOf(c) === index;
  });

  return reDuppedArray + reReDedup(restOfArray);
}

const threeDedup = (userArray) => {
  let uniqueChars = userArray.filter((c, index) => {
    return userArray.indexOf(c) === index;
  });
  return uniqueChars;
}