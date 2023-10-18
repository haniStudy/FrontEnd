# Redux
- 상태 관리 라이브러리
- 중앙 state 관리소를 사용할 수 있게 도와주는 패키지 (라이브러리)
- 예측 가능한 상태 관리를 제공하는 패턴 및 도구의 모음
- 단방향 데이터 흐름을 사용하여 애플리케이션의 상태를 효율적으로 관리


## 사용하는 이유
1. props의 단점을 해결하기 위해 사용
- 리덕스를 사용하지 않으면 props를 통해 부모에서 자식으로 값을 보내줘야 함
> 중간에 있는 컴포넌트는 해당 props가 필요 없어도 아래 컴포넌트가 필요하다는 이유로 불필요한 값을 받게 됨!
- 즉, 리덕스를 사용하면 하위 컴포넌트로 props를 전달해줄 필요가 없어짐 -> 중앙 state 관리소에서 가져와서 사용하면 됨.

2. 상태관리가 용이 (=state 관리가 용이)


## 리덕스와 Context API
- 기능별로 글로벌 상태를 만들 때는 "Context API" (무조건 X, 일반적으로)
- 모든 글로벌 상태를 하나의 커다란 상태 객체에 넣어서 사용할 때는 "리덕스"

### 언제 사용해야 할까?
1. 프로젝트 규모가 클 때? 리덕스
2. 비동기 작업을 자주 사용할 때? 리덕스


## 리덕스의 3가지 규칙
1. 하나의 애플리케이션 안에는 하나의 스토어 존재
- 여러 개의 스토어를 사용할 수는 있으나 권장 X

2. 상태는 읽기 전용

3. 변화를 일으키는 함수, 리듀서는 순수한 함수여야 함
- 리듀서 함수는 이전 생태, 액션 객체를 파라미터로 받음
- 이전 상태는 절대로 건들이지 않고, 변화를 일으킨 새로운 상태 객체를 만들어서 반환
- 똑같은 파라미터로 호출된 리듀서 함수는 언제나 똑같은 결과 값을 반환 해야 함.
- 즉, 동일한 인풋 => 동일한 아웃풋