const answer = `콜백 핸들러에 전달되는 인수로 첫 번째는 에러, 두 번째는 결과가 있다.
첫 번째 인수는 콜백 함수에서 에러가 발생했을 때, 에러 객체를 전달한다. 에러가 발생하지 않았을 떄는 null등이 전달된다.
두 번째 인수는 성공적으로 처리한 결과를 전달한다. 에러가 발생했을 때 undefined등이 전달된다.
콜백지옥은 콜백 함수를 중첩해서 사용했을 때 발생하는 가독성과 유지보수성이 떨어지는 코드 구조를 말한다.
콜백지옥을 해결하기 위한 방법은 프로미스를 사용하는 것이다. 프로미스는 내용이 실행되었지만 결과를 아직 반환하지 않은 객체를 말한다.
then을 붙인 구문은 작업에 성공했을때 결과를 반환하며 작업에 실패했을 경우 catch구문으로 이동하여 에러메세지를 띄운다.
`;
console.log(answer);


// 예제
const condition = false; // true면 resolve, false면 reject
const promise = new Promise((resolve, reject) => {
  if (condition) {
    resolve('성공');
  } else {
    reject('실패');
  }
});
// 다른 코드가 들어갈 수 있음
promise
  .then((message) => {
    console.log(message); // 성공(resolve)한 경우 실행
  })
  .catch((error) => {
    console.error(error); // 실패(reject)한 경우 실행
  })
  .finally(() => { // 끝나고 무조건 실행
    console.log('무조건');
  });