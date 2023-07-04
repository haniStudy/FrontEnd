import React, {useCallback, useEffect, useState} from 'react';

export function useInput(initialValue) {
    const [inputVal, setInputVal] = useState(initialValue);
    
    // 사용자한테 입력을 받을 때 한번만 렌더링 시키기 위해 useCallback hook 사용
    const handleChange = useCallback((e) => {setInputVal(e.target.value)}, []);
    return [inputVal, setInputVal, handleChange];
}