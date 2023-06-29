# useContext
- 전역 데이터 관리하는 훅

## 사용하는 이유
- 부모 컴포넌트 -> 자식 컴포넌트로 데이터 전달할 때 "props" 사용
> 너무 깊게 사용하게 되면 "porp drilling" 현상 발생
> 해당 props가 어디서 왔는지 파악 어려움 -> 오류 발생 시 추적이 어려워짐

## 필수 개념
- createContext: context 생성 
- Consumer: context 변화 감지
- Provider: context 전달 (하위 컴포넌트로!)

## 문제
1. 렌더링 문제: Provider에서 제공한 value가 달라질 때 useContext를 사용하고 있는 모든 컴포넌트가 리렌더링 됨 -> 비효율적
2. 재사용 어려움

## 구조
- 순서 존재
1. 컨텍스트 생성: const MyContext = React.createContext();
2. 컨텍스트 제공: <MyContext.Provider>...</MyContext.Provider>
3. 컨텍스트 사용: const contextValue = useContext(MyContext);

### 코드 예시
<pre>
    <code>
        // ThemeContext.jsx
        import React from 'react';

        // Context 객체 생성
        const ThemeContext = React.createContext();

        export default ThemeContext;

        // App.jsx
        import React, { useContext } from 'react';
        import ThemeContext from './ThemeContext';

        const ExampleComponent = () => {
            // ThemeContext의 값을 가져옴
            const theme = useContext(ThemeContext);

            return (
                <div style={{ color: theme.color }}> The current theme is: {theme.name}</div>
                )
        };
        export default ExampleComponent;
    </code>
</pre>