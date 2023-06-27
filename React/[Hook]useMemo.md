# useMemo
> 최적화를 위해 사용되는 훅 (메모이제이션된 값을 반환)
> value를 메모이제이션
> > 객체 값을 다룰 때 사용하면 좋음!
> 불필요한 재렌더링을 방지
> > 부모 컴포넌트가 렌더링 되면 자식 컴포넌트도 렌더링됨 -> 자식 입장에서는 필요 없는 렌더링
> 값을 재활용하기 위해 메모리를 따로 소비해서 저장! -> 불필요한 값에서 사용하는 경우 성능에 영향을 줄 수도 있음

=> 특정 값이나 계산 비용이 큰 함수의 결과를 메모이제이션하여 재사용

## 구조
> useMemo(() => {}, []);
> 매개변수: 0: 콜백 함수, 1: 의존성 배열


### 코드 예시
<pre>
    <code>
        import React, { useEffect, useState } from "react";

        function ObjectComponent() {
            const [isAlive, setIsAlive] = useState(true);
            const [uselessCount, setUselessCount] = useState(0);

            <!-- const me = {
                name: "Ted Chang",
                age: 21,
                isAlive: isAlive ? "생존" : "사망",
            }; -->

            const me = useMemo(() => {
                return {
                    name: "Ted Chang",
                    age: 21,
                    isAlive: isAlive ? "생존" : "사망",
                };
            }, [isAlive]);

            useEffect(() => {
                console.log("생존여부가 바뀔 때만 호출해주세요!");
            }, [me]);

            return (
                    <>
                        <div>
                            내 이름은 {me.name}이구, 나이는 {me.age}야!
                        </div>
                        <br />
                        <div>
                            <button onClick={() => { setIsAlive(!isAlive); }}> 누르면 살았다가 죽었다가 해요 </button>
                            <br />
                            생존여부 : {me.isAlive}
                        </div>
                        <hr />
                            필요없는 숫자 영역이에요!
                        <br />
                        {uselessCount}
                        <br />
                        <button onClick={() => { setUselessCount(uselessCount + 1); }} > 누르면 숫자가 올라가요 </button>
                    </>
            );
        }
        export default ObjectComponent;
    </code>
</pre>