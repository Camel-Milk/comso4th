const candyMachine = {
  status: {
    name: 'node',
    count: 5,
  },
  getCandy() {
    this.status.count--;
    return this.status.count;
  },
};
const { getCandy, status: { count } } = candyMachine;
console.log(getCandy);  // [Function: getCandy]
console.log(count);     // 5


// const candyMachine = {
//   status: {
//     name: 'node',
//     count: 5,
//   },
//   getCandy() {
//     this.status.count--;
//     return this.status.count;
//   },
// };
// const { getCandy, status} = candyMachine;
// console.log(status.count);