function descendingOrder(n) {
  const arrOfDigits = Array.from(String(n), Number).sort(function (a, b) {
    return b - a;
  });

  return Number(
    arrOfDigits
      .sort(function (a, b) {
        return b - a;
      })
      .join("")
  );
}
