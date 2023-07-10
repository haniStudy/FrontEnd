# 자주 사용하는 명령어 정리

## 리액트 프로젝트 생성
yarn create react-app {프로젝트 이름}

## API 설치
yarn add {API 이름}

## npm 삭제
npm cache clean --force

## npm 업데이트
npm i -g npm

## json-server 설치
yarn add json-server
sudo npm install -g json-server (위 명령어로 설치되지 않을 경우)

## json-server 실행
yarn json-server --watch {db.json 파일} --port {포트 번호}
> 예시: yarn json-server --watch ./src/db.json --port 4000

* * *
# 에러 해결법