## state란?
- 컴포넌트 내부에서 변할 수 있는 값

## useState
- 컴포넌트 안에서 state를 관리 할 수 있게 해주는 hook
- [상태 값, 상태를 설정하는 함수] = useState(초기 값);
- 해당 함수를 사용해 값이 바뀌면 컴포넌트가 리렌더링 됨

```
    // 초기 상태 정의
    const [count, setCount] = useState(0);

    // 상태가 여러 개인 경우
    const [value, setValue] = useState({
        count: 0,
        text: "",
    });
    const updateState = (newValue) => {
        setValue({ ...value, ...newValue });
    };
```