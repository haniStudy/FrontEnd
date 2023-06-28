# React.memo
- 최적화를 위해 사용되는 훅 (메모이제이션된 값을 반환)
- 컴포넌트를 메모이제이션
- 오직 props 변화에만 의존하는 최적화 방식!
> props가 변경되었는지 얕은 비교를 통해 확인
- 불필요한 재렌더링을 방지
> 부모 컴포넌트가 렌더링 되면 자식 컴포넌트도 렌더링됨 -> 자식 입장에서는 필요 없는 렌더링

=> 컴포넌트 자체를 메모이제이션하여 props 변경 시 리렌더링을 방지

## 구조
- React.memo((props) => {});
- 매개변수: 콜백함수


### 코드 예시
<pre>
    <code>
        import React from 'react';

        const MyComponent = React.memo((props) => {
            // 컴포넌트 내용
        });
        export default MyComponent;
    </code>
</pre>