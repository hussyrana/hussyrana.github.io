function myFunctionTest(expected, function2test) {
  let result = function2test();
  const str = typeof expected;
  if (str === "object") {
    expected = [...expected].join("");
    result = [...function2test()].join("");
  }
  if (expected === result) {
    return "TEST SUCCEEDED";
  } else {
    return "TEST FAILED.  Expected " + expected + " found " + result;
  }
}

function max(n1, n2) {
  return n1 > n2 ? n1 : n2;
}
console.log(
  "Expected output of max(20,10) is 20  " +
    myFunctionTest(20, function () {
      return max(20, 10);
    })
);

function maxOfThree(n1, n2, n3) {
  if (n1 > n2 && n1 > n3) {
    return n1;
  } else if (n2 > n1 && n2 > n3) {
    return n2;
  } else {
    return n3;
  }
}
console.log(
  "Expected output of maxOfThree(20,10,5) is 20  " +
    myFunctionTest(20, function () {
      return maxOfThree(20, 10, 5);
    })
);
function isVowel(c) {
  switch (c) {
    case "A":
      return true;
    case "E":
      return true;
    case "I":
      return true;
    case "O":
      return true;
    case "U":
      return true;
    default:
      return false;
  }
}
console.log(
  "Output of isVowel('A') is true " +
    myFunctionTest(true, function () {
      return isVowel("A");
    })
);

function sum(arr) {
  return arr.reduce((sum, n) => {
    return sum + n;
  }, 0);
}
console.log(
  "Output of sum([1,2,3,4]) is 10 " +
    myFunctionTest(10, function () {
      return sum([1, 2, 3, 4]);
    })
);

function multiply(arr) {
  return arr.reduce((mul, n) => {
    return mul * n;
  }, 1);
}
console.log(
  "Output of multiply([1,2,3,4]) is 24 " +
    myFunctionTest(24, function () {
      return multiply([1, 2, 3, 4]);
    })
);

function reverse(str) {
  return [...str].reverse().join("");
}
console.log(
  "Output of multiply('hassan') is nassah " +
    myFunctionTest("nassah", function () {
      return reverse("hassan");
    })
);

function findLongestWord(arr) {
  return arr.reduce(
    (length, element) => {
      length = length > element.length ? length : element.length;
      return length;
    },
    [0]
  );
}
console.log(
  "Output of findLongestWord([ali, hassan, dipty]) is 6 " +
    myFunctionTest(6, function () {
      return findLongestWord(["ali", "hassan", "dipty"]);
    })
);

function filterLongWords(arr, n) {
  return arr.filter((p) => p.length > n);
}
console.log(
  "Output of filterLongWords([ali, hassan, dipty], 4) is [hassan, dipty] " +
    myFunctionTest(["hassan", "dipty"], function () {
      return filterLongWords(["ali", "hassan", "dipty"], 4);
    })
);

const a = [1, 3, 5, 3, 3];
const b = a.map(function (elem, i, array) {
  return elem + 3;
});
console.log(b);
const c = a.filter(function (elem, i, array) {
  return elem !== 3;
});
console.log(c);
const d = a.reduce(function (prevValue, elem, i, array) {
  return prevValue + elem;
});
console.log(d);

const d2 = a.find(function (elem) {
  return elem > 1;
}); //3
const d3 = a.findIndex(function (elem) {
  return elem > 1;
}); //1
console.log(d2);
console.log(d3);

const d4 = a.map((e) => e * 10);
console.log(d4);

const d5 = a.filter((e) => e === 3);
console.log(d5);

const d6 = a.reduce(
  (p, e) => {
    return p * e;
  },
  [1]
);
console.log(d6);
