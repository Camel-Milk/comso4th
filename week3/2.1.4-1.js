function add1(x, y) {
  return x + y;
}

const add2 = (x, y) => {
  return x + y;
};

const add3 = (x, y) => x + y;

const add4 = (x, y) => (x + y);

function not1(x) {
  return !x;
}

const not2 = x => !x;

//var a = undefined;
//console.log(not1(a)) // true

//var a = true;
//console.log(not1(a)) // false

var a = 3;
console.log(not1(a)) // false