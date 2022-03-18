function formatDuration(seconds) {
  let godina = 60 * 60 * 24 * 365;
  let dan = 60 * 60 * 24;
  let sat = 60 * 60;
  let minuta = 60;

  let numGod;
  let numDan;
  let numSat;
  let numMin;
  let numSec;
  if (seconds === 0) return "now";
  else if (seconds / godina > 1) {
    numGod = Math.floor(seconds / godina);
    numDan = Math.floor((seconds % godina) / dan);
    numSat = Math.floor(((seconds % godina) % dan) / sat);
    numMin = Math.floor((((seconds % godina) % dan) % sat) / minuta);
    numSec = Math.floor(((((seconds % godina) % dan) % sat) % minuta) / 1);

    let a = `${
      (numDan && numSat) ||
      (numDan && numMin) ||
      (numDan && numSec) ||
      (numSat && numMin) ||
      (numSat && numSec) ||
      (numMin && numSec)
        ? numGod > 1
          ? `${numGod} years,`
          : `${numGod} year,`
        : numDan || numSat || numMin || numSec
        ? numGod > 1
          ? `${numGod} years and`
          : `${numGod} year and`
        : numGod > 1
        ? `${numGod} years`
        : `${numGod} year`
    }`;
    let b = `${
      numDan
        ? (numSat && numMin) || (numSat && numSec) || (numMin && numSec)
          ? numDan > 1
            ? `${numDan} days,`
            : `${numDan} day,`
          : numSat || numMin || numSec
          ? numDan > 1
            ? `${numDan} days and`
            : `${numDan} day and`
          : numDan > 1
          ? `${numDan} days`
          : `${numDan} day`
        : ""
    }`;
    let c = `${
      numSat
        ? numMin && numSec
          ? numSat > 1
            ? `${numSat} hours,`
            : `${numSat} hour,`
          : numMin || numSec
          ? numSat > 1
            ? `${numSat} hours and`
            : `${numSat} hour and`
          : numSat > 1
          ? `${numSat} hours`
          : `${numSat} hour`
        : ""
    }`;
    let d = `${
      numMin
        ? numSec
          ? numMin > 1
            ? `${numMin} minutes and`
            : `${numMin} minute and`
          : numMin > 1
          ? `${numMin} minutes`
          : `${numMin} minute`
        : ""
    }`;
    let e = `${
      numSec ? (numSec > 1 ? `${numSec} seconds` : `${numSec} second`) : ""
    }`;

    return (
      a +
      (b ? " " : "") +
      b +
      (c ? " " : "") +
      c +
      (d ? " " : "") +
      d +
      (e ? " " : "") +
      e
    );
  } else if (seconds / dan >= 1) {
    numDan = Math.floor(seconds / dan);
    numSat = Math.floor((seconds % dan) / sat);
    numMin = Math.floor(((seconds % dan) % sat) / minuta);
    numSec = Math.floor((((seconds % dan) % sat) % minuta) / 1);

    let a = `${
      (numSat && numMin) || (numSat && numSec) || (numMin && numSec)
        ? numDan > 1
          ? `${numDan} days,`
          : `${numDan} day,`
        : numSat || numMin || numSec
        ? numDan > 1
          ? `${numDan} days and`
          : `${numDan} day and`
        : numDan > 1
        ? `${numDan} days`
        : `${numDan} day`
    }`;
    let b = `${
      numSat
        ? numMin && numSec
          ? numSat > 1
            ? `${numSat} hours,`
            : `${numSat} hour,`
          : numMin || numSec
          ? numSat > 1
            ? `${numSat} hours and`
            : `${numSat} hour and`
          : numSat > 1
          ? `${numSat} hours`
          : `${numSat} hour`
        : ""
    }`;
    let c = `${
      numMin
        ? numSec
          ? numMin > 1
            ? `${numMin} minutes and`
            : `${numMin} minute and`
          : numMin > 1
          ? `${numMin} minutes`
          : `${numMin} minute`
        : ""
    }`;
    let d = `${
      numSec ? (numSec > 1 ? `${numSec} seconds` : `${numSec} second`) : ""
    }`;

    return a + (b ? " " : "") + b + (c ? " " : "") + c + (d ? " " : "") + d;
  } else if (seconds / sat >= 1) {
    numSat = Math.floor(seconds / sat);
    numMin = Math.floor((seconds % sat) / minuta);
    numSec = Math.floor(((seconds % sat) % minuta) / 1);

    let a = `${
      numMin && numSec
        ? numSat > 1
          ? `${numSat} hours,`
          : `${numSat} hour,`
        : numMin || numSec
        ? numSat > 1
          ? `${numSat} hours and`
          : `${numSat} hour and`
        : numSat > 1
        ? `${numSat} hours`
        : `${numSat} hour`
    }`;
    let b = `${
      numMin
        ? numSec
          ? numMin > 1
            ? `${numMin} minutes and`
            : `${numMin} minute and`
          : numMin > 1
          ? `${numMin} minutes`
          : `${numMin} minute`
        : ""
    }`;
    let c = `${
      numSec ? (numSec > 1 ? `${numSec} seconds` : `${numSec} second`) : ""
    }`;

    return a + (b ? " " : "") + b + (c ? " " : "") + c;
  } else if (seconds / minuta >= 1) {
    numMin = Math.floor(seconds / minuta);
    numSec = Math.floor((seconds % minuta) / 1);

    let a = `${numMin > 1 ? `${numMin} minutes` : `${numMin} minute`}`;
    let b = `${
      numSec
        ? numSec > 1
          ? `and ${numSec} seconds`
          : `and ${numSec} second`
        : ""
    }`;

    return a + (b ? " " : "") + b;
  } else {
    let a = `${seconds >= 1 ? `${numSec} seconds` : `${numSec} second`}`;

    return a.trim();
  }
}
