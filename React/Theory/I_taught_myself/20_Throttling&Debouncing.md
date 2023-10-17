# Throttling & Debouncing
- 짧은 시간 간격으로 연속해서 이벤트가 발생했을 때 과도한 이벤트 핸들러 호출을 방지하는 기법

## Throttling
- 짧은 시간 간격으로 연속해서 발생한 이벤트들을 일정시간 단위(delay)로 그룹화하여 처음 또는 마지막 이벤트 핸들러만 호출되도록 하는 것
- 예: 무한 스크롤

## Debouncing
- 짧은 시간 간격으로 연속해서 이벤트가 발생하면 이벤트 핸들러를 호출하지 않다가 마지막 이벤트로부터 일정 시간(delay)이 경과한 후에 한 번만 호출하도록 하는 것
- 예: 입력값 실시간 검색, 화면 resize 이벤트

## 메모리 누수(Memory Leak)
- 필요하지 않은 메모리를 계속 점유하고 있는 현상

* * *
# lodash
## 설치 명령어
- yarn add lodash

### 예시 코드
#### App.jsx
<pre>
    <code>
        import "./App.css";
        import { useState, useCallback } from "react";
        import _ from "lodash";

        function App() {
            const [searchText, setSearchText] = useState("");
            const [inputText, setInputText] = useState("");

            <!-- useCallback hook을 통해 마운트 시에 debounce를 기억해주게 되면, 이 클로저 함수는 외부 함수의 변수에 계속해서 참조를 갖고있기 때문에 타이머 아이디를 기억 -->
            const handleSearchText = useCallback(
                _.debounce((text) => setSearchText(text), 2000),
                []
            );

            const handleChange = (e) => {
                setInputText(e.target.value);
                handleSearchText(e.target.value);
            };

            return (
                <div style={{ paddingLeft: 20, paddingRight: 20}}>
                    <h1>디바운싱 예제</h1>
                    <br />

                    <input
                        placeholder="입력값을 넣고 디바운싱 테스트를 해보세요."
                        style={{ width: "300px" }}
                        onChange={handleChange}
                        type="text"
                    />

                    <p>Search Text: {searchText}</p>
                    <p>Input Text: {inputText}</p>
                </div>
            );
        }
        export default App;
    </code>
</pre>