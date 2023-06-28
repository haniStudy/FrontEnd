# Props
- 컴포넌트 간의 정보 교환 방식

## 특징
1. 반드시 위에서 아래 방향으로 데이터 전달 (부모 -> 자식) => 단방향
2. 반드시 읽기 전용으로 취급하며, 변경하지 않기

### 예시 코드
<pre>
    <code>
        import React from "react";

        <!-- 3) 아이가 할아버지의 이름을 받음 -->
        function Child(props) {
            return <div>{props.grandFatherName}</div>;
        }

        <!-- 2) 엄마(부모)가 아이(자식)에게 할아버지(부모의 부모)의 이름을 전달 -->
        function Mother(props) {
            return <Child grandFatherName={props.grandFatherName} />;
        }

        <!-- 1) 할아버지(부모)가 엄마(자식)에게 이름을 전달 -->
        function GrandFather() {
            const name = "이범규";
            return <Mother grandFatherName={name} />;
        }

        function App() {
            return <GrandFather />;
        }

        export default App;
    </code>
</pre>

* * *

# Prop Drilling
- 부모에서 자식으로 데이터를 전달 (prop)
- 더 깊은 계층의 컴포넌트로 데이터를 전달해야 할 때 prop drilling 발생 (증조 할아버지 -> 할아버지 -> 엄마 -> 나)

## 문제점
1. 관리 어려움
2. 불필요한 코드 발생

## 해결 방법
1. useContext 사용

* * *

# Props Children
- 자식 컴포넌트로 정보를 전달하는 또 다른 방법
- Layout 컴포넌트를 만들 때 자주 사용

### 코드 예시
<pre>
    <code>
        import React from "react";

        function User(props) {
            return <div>{props.children}</div>;
        }

        function App() {
            return <User>안녕하세요</User>;
        }
        export default App;
    </code>
</pre>

* * *

# Props 추출
## 구조 분해 할당
### 코드 예시
<pre>
    <code>
        function Todo(props){
            return <div>{props.todo}</div>
        }

        <!-- 구조 분해 할당 사용 -->
        function Todo({ title, body, isDone, id }){
            return <div>{title}</div>
        }
    </code>
</pre>

## defaultProps
- 부모 컴포넌트에서 props를 보내주지 않아도 설정될 초기값

### 코드 예시
<pre>
    <code>
        import React from 'react';

        function Child({ name }){
            return <div>내 이름은 {name} 입니다. </div>
        }

        Child.defaultProps={
            name: '기본 이름'
        }

        export default Child
    </code>
</pre>