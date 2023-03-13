//input: "aaabccdddda"
//output: "3ab2c4da"

const compress = (userString) => {
  let compressedString = "";
  let stringArray = userString.split("");
  for (let i = 0; i < stringArray.length; i++) {
    let count = 1;
    let currentLetter = stringArray[i]
    while (i < stringArray.length - 1 && stringArray[i] === stringArray[i + 1]) {
      count ++;
      i ++;
    }
    if (count === 1) {
      compressedString += currentLetter;
    } else {
      compressedString += count + currentLetter;
    }
  }
  return compressedString;
}

const reCompress = (userString) => {
  if (userString === "") {
    return "";
  }
  const element = userString[0];
  if (element === userString[0] + 1) {
    return reCompress(userString.slice(1) + userString.count(indicesOfRepeat)).toString();
  } else {
    return element + reCompress(userString.slice(1));
  }
}