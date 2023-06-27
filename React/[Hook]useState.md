# useState
> 가장 기본적인 hook
> 함수형 컴포넌트에서 상태(state)를 관리할 수 있게 해주는 기능
> > 컴포넌트: UI요소를 구분하는 단위 (가장 작은 조각)


## 구조
> const [state, setState] = useState(초기값);
> 매개변수: 초기 값
> 리턴 값: 배열 (0: value, 1: value를 set할 수 있는 fun)


### 코드 예시
<pre>
    <code>
        // 1) useState 불러오기
        import {useState} from 'react';

        function App () {
            const [count, setCounts] = useState(1);

            return (
                // 업데이트 방식은 2가지 존재
                // 일반 업데이트: 한번만 반영됨
                setTests(count + 1);
                setTests(count + 1);
                setTests(count + 1);
                // 결과: count = 1

                // 함수형 업데이트: 모두 반영됨
                setTests(() => count + 1);
                setTests(() => count + 1);
                setTests(() => count + 1);
                // 결과: count = 3

                // 결과가 다른 이유: 리액트는 배치 업데이트를 지원 (한번만 실행해야지 렌더링이 적게 일어남)
            );
        }
    </code>
</pre>