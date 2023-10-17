# axios
- 대표적인 비동기 통신 방법
- node.js와 브라우저를 위한 Promise 기반 http 클라이언트
> http를 이용해서 서버와 통신하기 위해 사용하는 패키지

## 설치 명령어
- yarn add axios

## 종류
1. GET (조회)
- url에는 서버의 url이 들어가고, config에는 기타 여러가지 설정을 추가할 수 있음
- axios.get(url[, config])

2. POST (추가)
- 서버에 데이터를 추가할 때 사용
- axios.post(url[, data[, config]])

3. DELETE (삭제)
- 저장되어 있는 데이터를 삭제하고자 요청 보낼 때 사용
- axios.delete(url[, config])

4. PATCH (수정)
- 어떤 데이터를 수정하고자 서버에 요청 보낼 때 사용
- axios.patch(url[, data[, config]])

* * *
# env
- API key, port, DB 등 민감한 정보를 환경변수에 담아 관리하는 방법

## 사용 방법
1. root 폴더에 생성
2. 변수명은 반드시 'REACT_APP'으로 시작 (그 외 이름은 리액트에서 인식 X)
3. gitignore에 env 등록 필요
4. 호출
- process.env.REACT_APP_{변수명}

* * *
# instance와 interceptor

## instance (인스턴스)
- 각각의 요청에 대한 개별 설정을 정의하는 데 사용됨
- 인스턴스를 생성하면 기본 설정을 유지하면서 인스턴스에 대해 추가적인 설정을 적용할 수 있음

## interceptor (인터셉터)
- then 또는 catch로 처리되기 전에 요청과 응답을 가로챌 수 있음
- API를 요청마다 해줘야 하는 반복적인 작업이 있을 때 에러 관리를 한 곳에서 하고 싶을 때 사용
- interceptors는 요청 interceptors와 응답 interceptors로 나뉜다
> 요청 인터셉터(요청 인터셉트) = (서버에 보낼 데이터 처리)
> 응답 인터셉터(응답 인터셉트) = (서버에서 준 데이터 처리)