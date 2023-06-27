# useRef
> DOM 요소에 접근할 수 있도록 하는 훅
> input tag에 포커스를 주고 싶을 때 사용 (focus())
> 컴포넌트가 렌더링 되어도 unmount 전까지 값을 유지함
> > 즉, 렌더링이 일어나지 않아 변수 초기화 X

> usestate와의 차이점
> > useState는 변화가 일어나면 렌더링 발생 O (꼭, 리렌더링이 필요한 값에 사용)
> > useRef는 변화가 일어나도 렌더링 발생 X (리렌더링이 필요하지 않은 값에 사용)

> useRef 장점
> > useEffect 내에서 useState를 호출하게 되면 무한 반복에 빠져버릴 수 있음 (무한 리렌더링) => useRef를 사용하면 무한 반복 발생 방지 가능!


## 구조
> const test = useRef(초기값);
> 리턴 값: 객체 { current: 초기값}
> 접근 방법: test.current


### 코드 예시
<pre>
    <code>
        import { useEffect, useRef, useState } from "react";

        function App() {
            const idRef = useRef("");
            const pwRef = useRef("");

            const [id, setId] = useState("");
            const onIdChangeHandler = (event) => {
                setId(event.target.value);
            };

            useEffect(() => {
                idRef.current.focus();
            }, []);

            useEffect(() => {
                if (id.length >= 10) {
                pwRef.current.focus();
                }
            }, [id]);

            return (
                <>
                    <div>
                        아이디 : <input type="text" ref={idRef} value={id} onChange={onIdChangeHandler}/>
                    </div>
                    <div>
                        비밀번호 : <input type="password" ref={pwRef} />
                    </div>
                </>
            );
        }
        export default App;
    </code>
</pre>