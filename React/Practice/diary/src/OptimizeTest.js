import React, { useEffect, useState } from "react";

const CounterA = React.memo(({count}) => {
    return <div>{count}</div>;
});

const CounterB = React.memo(({obj}) => {
    return <div>{obj.count}</div>;
});

const OptimizeTest = () => {
    const [count, setCount] = useState(1);
    const [obj, setObj] = useState({
        count: 1
    });
    return (
        <div style={{padding: 50}}>
            <div>
                <h2>count A</h2>
                <CounterA count={count}/>
                <button onClick={()=>setCount(count)}>A button</button>
            </div>
            <div>
                <h2>count B</h2>
                <CounterB obj={obj}/>
                <button onClick={()=>setObj({count: obj.count})}>B button</button>
            </div>
        </div>
    )
}

export default OptimizeTest;

// const CountView = React.memo(({count}) => {
//     useEffect(()=>{
//         console.log(`count: ${count}`);
//     })
//     return <div>{count}</div>;
// });

// const TextView = React.memo(({text}) => {
//     useEffect(()=>{
//         console.log(`text: ${text}`);
//     })
//     return <div>{text}</div>
// });

// const OptimizeTest = () => {
//     const [count, setCount] = useState(1);
//     const [text, setText] = useState("");

//     return <div style={{padding: 50}}>
//         <div>
//             <h2>count</h2>
//             <CountView count={count}/>
//             <button onClick={()=> setCount(count+1)}>+</button>
//         </div>
//         <div>
//             <h2>text</h2>
//             <TextView text={text}/>
//             <input value={text} onChange={(e)=> setText(e.target.value)}/>
//         </div>
//     </div>
// }

// export default OptimizeTest;