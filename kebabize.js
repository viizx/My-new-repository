// Modify the kebabize function so that it converts a camel case string into a kebab case.

// kebabize('camelsHaveThreeHumps') // camels-have-three-humps
// kebabize('camelsHave3Humps') // camels-have-humps
// Notes:

// the returned string should only contain lowercase letters

function kebabize(str) {
  let toArr = str.split("");
  let toUpArr = str.toUpperCase().split("");
  console.log(str);
  let newArr = [];

  for (let i = 0; i < str.length; i++) {
    console.log(toArr[i] % 1);
    if (toArr[i] === toUpArr[i] && toArr[i] % 1 != 0 && i != 0) {
      newArr[i] = `-${toUpArr[i].toLowerCase()}`;
      console.log("upisana crtica");
    } else if (toArr[i] < 10) {
      console.log("preskoceno");
      newArr[i] = "";
    } else if (toArr[i] === toUpArr[i] && i == 0) {
      newArr[i] = toArr[i].toLowerCase();
      console.log("upisana crtica");
    } else {
      newArr[i] = toArr[i];
      console.log("prepisano");
    }
    console.log(newArr);

    if (i === str.length - 1) {
      let newStr = newArr.join("");
      if (newStr[0] === "-") {
        return newStr.substring(1);
      }
      console.log(newArr, newStr);
      return newStr;
    }
  }
}
