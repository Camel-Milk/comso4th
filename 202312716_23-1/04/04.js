const answer = `실행했을 때는 아무것도 나오지 않는다. 인터넷 브라우저로 localhost:3000주소로 접속하면 검은 배경에 Hello World라고 출력된 사이트가 나온다.
`;
console.log(answer);


//예제
const http = require('http');
const fs = require('fs').promises;

http.createServer(async (req, res) => {
  try {
    const data = await fs.readFile('202312716_23-1/04/04.html');
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'});
    res.end(data);
  } catch (err) {
    console.error(err);
    res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8'});
    res.end(err.message);
  }
})
  .listen(3000);
