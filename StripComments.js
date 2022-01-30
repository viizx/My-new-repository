function solution(input, markers) {
  let arr = input.split("\n");

  let i = 0;

  arr.forEach((element) => {
    markers.forEach((i) => {
      if (element.includes(i)) {
        var b = arr.indexOf(element);
        arr[b] = element.split(i).splice(0, 1).join().trim();
      }
    });
  });
  return arr.join("\n");
}
