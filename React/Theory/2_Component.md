# Component
- UI를 구성하고 동작하는 독립적인 요소

## 장점
1. 재사용성과 구조화 촉진
2. 관리하기 쉽고, 유지보수하기 편한 애플리케이션 생성을 도와줌

* * *

# 함수형 컴포넌트
- 함수로 정의
- Hook을 사용하여 상태와 다른 리액트 기능을 활용할 수 있음
- 공식 사이트에서 클래스형보다 함수형을 사용하길 권고함!

### 코드 예시
<pre>
    <code>
        // props라는 입력을 받음
        // 화면에 어떻게 표현되는지를 기술하는 React 엘리먼츠를 반환(return)
        function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
        }

        function App () {
            return <div>hello</div>
        }
    </code>
</pre>

* * *

# 클래스형 컴포넌트
- React.Component를 상속받고 라이프사이클 메서드를 사용하여 컴포넌트의 동작을 제어

### 코드 예시
<pre>
    <code>
        class Welcome extends React.Component {
            render() {
                return <h1>Hello, {this.props.name}</h1>;
            }
        }
    </code>
</pre>

* * *

# 부모-자식 컴포넌트
- 컴포넌트를 다른 컴포넌트를 품을 수 있음

### 코드 예시
<pre>
    <code>
        import React from "react";

        // 자식
        function Child() {
            return <div>나는 자식입니다.</div>;
        }

        // 부모
        function App() {
            return <Child />;
        }

        export default App;
    </code>
</pre>