# State
- 컴포넌트 내부에서 바뀔 수 있는 값을 의미
- 바꿔주는 이유: UI(엘리먼트)로의 반영을 위해!

* * * 

# 불변성
- 메모리에 있는 값을 변경할 수 없는 것
- 자바스크립트에서 원시 데이터 = 불변성 O, 나머지 X (객체, 배열, 함수)

### 코드 예시
<pre>
    <code>
        import React, { useState } from "react";

        function App() {
            const [dogs, setDogs] = useState(["말티즈"]);

            function onClickHandler() {
                // spread operator(전개 연산자)를 이용해서 dogs를 복사합니다. 
                // 그리고 나서 항목을 추가합니다.
                setDogs([...dogs, "시고르자브르종"]);
            }
            console.log(dogs);

            return (
                <div>
                    <button onClick={onClickHandler}>버튼</button>
                </div>
            );
        }
        export default App;
    </code>
</pre>