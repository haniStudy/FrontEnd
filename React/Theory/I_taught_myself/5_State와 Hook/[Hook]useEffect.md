# useEffect
- 렌더링될 때마다 특정 작업을 수행해야 할 때 설정하는 훅

## 구조
- useEffect(() => {}, []);
- 매개변수: 0: 콜백 함수, 1: 의존성 배열

## 의존성 배열이 필요한 이유
- useEffect는 렌더링될 때마다 실행
- 의존성 배열을 사용하면 내가 원할 때만 특정 작업을 수행할 수 있도록 설정 가능

### 코드 예시
<pre>
    <code>
        import React, { useEffect } from "react";

        const App = () => {
            useEffect(() => console.log("hello useEffect"));

            // 의존성 배열
            // []이 들어가는 경우, 처음 한번만 실행
            // useEffect(() => {특정 작업}, [{의존성 배열}]); 
            
            return <div>Home</div>;
        }
        export default App;
    </code>
</pre>


> 리턴 사용 => clean-up 함수
> > 실행되기 이전의 상태로 돌아갈 수 있도록 해줌
### 코드 예시
<pre>
    <code>
        import React, { useEffect } from "react";
        import { useNavigate } from "react-router-dom";

        const 속세 = () => {
            const nav = useNavigate();

            useEffect(() => {
                return () => {
                    console.log(
                        "안녕히 계세요 여러분! 전 이 세상의 모든 굴레와 속박을 벗어 던지고 제 행복을 찾아 떠납니다! 여러분도 행복하세요~~!"
                    );
                };
            }, []);

        return (
            <button onClick={() => nav("/todos")}>속세를 벗어나는 버튼</button>
        );
        
        export default 속세;
    </code>
</pre>