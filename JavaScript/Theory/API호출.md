## API
- 응용 프로그램에서 사용할 수 있도록, 운영 체제나 프로그래밍 언어가 제공하는 기능을 제어할 수 잇게 만든 인터페이스

## 과정
1. 클라이언트가 서벙 데이터 요청 (Request)
2. 서버가 데이터 베이스에서 요청된 데이터를 찾기 위해 검색 (Query)
3. 데이터 베이스에서 찾은 데이터를 서버에 보냄 (Query Result)
4. 서버가 클라이언트에 응답 전달 (Response)

=> 프론트엔드 개발자는 1번과 4번만 알고 있으면 됌! (API 호출이라고 함)

```
async fuction getDate() {
    let rawRes = await fetch("주소");
    let jsonRes = await rawRes.json();
}
```