const answer = `NPM은 노드의 패키지 매니저이며 다른 사람들이 만든 소스 코드들을 모아둔 저장소이다.
yarn은 npm보다 패키지 설치속도가 빠르고 패키지 락 파일을 생성하여 의존성을 보다 정확하게 관리할 수 있다.
pnpm은 여러 프로젝트에서 공유되는 의존성을 캐시로 저장하여 디스크 공간을 절약할 수 있다.

node 프로젝트를 생성하는 방법
1. 프로젝트 디렉터리를 만들고 해당 디렉터리의 터미널에서 npm init를 입력하여 package.json을 만든다. 해당 파일에는 패키지의 버전등의 정보가 들어있다.
2. 필요한 모듈을 설치한다. ex) npm install express
3. 코드 파일을 만들고 작성한다.
4. node index.js 등으로 작성한 파일을 실행한다.
`;
console.log(answer);