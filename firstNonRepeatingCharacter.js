function firstNonRepeatingLetter(s) {
  let list = {};

  s.toLowerCase()
    .split("")
    .forEach((i) => {
      list[i] = (list[i] || 0) + 1;
    });

  let firstLetter = "";
  Object.values(list).forEach((element) => {
    if (element == 1) {
      firstLetter += Object.keys(list)[Object.values(list).indexOf(element)];
    }
  });

  if (firstLetter) {
    if (s.includes(firstLetter.charAt(0))) return firstLetter.charAt(0);
    else return firstLetter.charAt(0).toUpperCase();
  } else return "";
}
