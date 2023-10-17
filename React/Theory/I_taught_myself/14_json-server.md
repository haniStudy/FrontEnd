# json-server
- 아주 간단한 DB와 API 서버를 생성해주는 패키지

## 장점
1. 프로토타이핑 및 개발 속도 향상 
2. 독립적인 프론트엔드 개발 지원
3. 테스트 및 디버깅

## 과정
1. 설치
- yarn add json-server
- 위 명령어로 설치되지 않을 경우, sudo npm install -g json-server  

2. 생성 및 실팽
- yarn json-server --watch {db.json 파일} --port {포트 번호}
> 예시: yarn json-server --watch ./src/db.json --port 4000