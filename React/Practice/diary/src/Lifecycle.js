import { useEffect, useState } from "react";

const Lifecycle = () => {
    // const [count, setCount] = useState(0);
    // const [text, setText] = useState("");

    // // 마운트 되었을 때만 실행하고 싶은 경우
    // useEffect(()=>{
    //     console.log("mount!");
    // }, []);

    // // 상태가 변경될 때마다 실행하고 싶은 경우
    // useEffect(()=>{
    //     console.log("update");
    // });

    // // 의존성 배열의 값이 변경된 경우에만 실행하고 싶은 경우
    // useEffect(()=>{
    //     console.log(`count is update: ${count}`);
    // }, [count]);

    // useEffect(()=>{
    //     console.log(`text is update: ${text}`);
    // }, [text]);

    // unmount test
    const [isVisible, setIsVisible] = useState(false);
    const toggle = () => {setIsVisible(!isVisible)};
    const UnmountTest = () => {
        useEffect(()=>{
            console.log("mount!");

            // unmount 시점에 실행
            return () => {
                console.log("unmount!");
            };
        }, []);
        return <div>Unmount Test Component</div>;
    };

    return (
        <div style={{padding: 20}}>
            {/* <div>
                {count}
                <button onClick={()=>{setCount(count+1)}}>+</button>
            </div>
            <div>
                <input value={text} onChange={(e)=>{setText(e.target.value)}}/>
            </div> */}
            <button onClick={toggle}>ON/OFF</button>
            {isVisible && <UnmountTest />}
        </div>
      )
}

export default Lifecycle;