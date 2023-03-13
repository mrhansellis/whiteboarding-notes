//input: "Jasmine Ann Jones"
//output: "Jasmine%20Ann%20Jones"

//non recursive
const percentTwenty = (userString) => {
    const analyze = userString.split(' ');
    const finish = analyze.join("%20");
    return finish;
}

//recursive

const rePercentTwenty = (userString) => {
  if (userString === "") {
    return "";
  } else {
    if (userString[0] === " ") {
      return "%20" + rePercentTwenty(userString.slice(1));
    } else {
      return userString[0] + rePercentTwenty(userString.slice(1));
    }
  }
}