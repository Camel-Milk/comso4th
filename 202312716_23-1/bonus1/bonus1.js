const answer = `add1부터 add4까지는 모두 기능이 같은 함수이다. add1을 add4처럼 간결하게 만들 수 있다.
`;
console.log(answer);


//예제
function add1(x, y) {
    return x + y;
}
  
const add2 = (x, y) => {
    return x + y;
};

const add3 = (x, y) => x + y;

const add4 = (x, y) => (x + y);