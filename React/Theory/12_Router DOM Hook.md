# Router DOM Hook
- 더 다양한 hook은 공식 문서 참고하기
-> https://reactrouter.com/en/6.14.0

* * *

# useNavigate
- 라우팅을 제어하고, 페이지를 이동할 때 사용되는 훅
- 컴포넌트 내에서 이벤트 핸들러나 특정 조건에 따라 페이지를 이동할 수 있음

### 코드 예시
[Home.jsx]
<pre>
    <code>
        import { useNavigate } from "react-router-dom";

        const Home = () => {
            const navigate = useNavigate();

            return (
                <button onClick={() => { navigate("/works"); }}>works로 이동</button>
            );
        };

        export default Home;
    </code>
</pre>

* * *

# useLocation
- 현재 위치하고 있는 페이지의 여러가지 정보를 추가적으로 얻을 수 있게 해주는 훅

### 코드 예시
[Works.jsx]
<pre>   
    <code>
        import { useLocation } from "react-router-dom";

        const Works = () => {
            const location = useLocation();
            console.log("location :>> ", location);
            return (
                <div>
                    <div>{`현재 페이지 : ${location.pathname.slice(1)}`}</div>
                </div>
            );
        };
        export default Works;
    </code>
</pre>

* * *

# useParams
- 현재 URL의 동적 경로 매개변수를 추출하는 데 사용되는 훅
> 동적 경로 매개변수는 URL의 경로 일부로서 변할 수 있는 값을 의미

### 코드 예시
<pre>
    <code>
        import { useParams } from 'react-router-dom';

        function UserProfile() {
            const { id } = useParams();

            return (
                <div>
                    <h2>User Profile</h2>
                    <p>User ID: {id}</p>
                </div>
            );
        }
    </code>
</pre>

* * *

# Link
- a 태그의 기능을 대페하는 API (훅은 아님)

## 사용해야 하는 이유
1. a 태그를 사용하면 페이지로 이동하면서 브라우저가 새로고침 됨
2.  브라우저가 새로고침 되면 모든 컴포넌트가 다시 렌더링 되야 하고, 모든 상태 값이 초기화 됨
=> 성능에 악영향을 줄 수도 있고, 불필요한 움직임

### 코드 예시
<pre>
    <code>
        import { Link, useLocation } from 'react-router-dom';

        const Works = () => {
            const location = useLocation();
            console.log('location :>> ', location);
            return (
                <div>
                    <div>{`현재 페이지 : ${location.pathname.slice(1)}`}</div>
                    <Link to="/contact">contact 페이지로 이동하기</Link>
                </div>
            );
        };
        export default Works;
    </code>
</pre>

* * *

# Dynamic Route
- 동적 라우팅
- path에 유동적인 값을 넣어서 특정 페이지로 이동하게끔 구현하는 방법

### 코드 예시
<pre>
    <code>
        import React from "react";
        import { BrowserRouter, Route, Routes } from "react-router-dom";
        import Home from "../pages/Home";
        import About from "../pages/About";
        import Contact from "../pages/Contact";
        import Works from "../pages/Works";

        const Router = () => {
            return (
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="works" element={<Works />} />
                                {/* 아래 코드를 추가해주세요. 👇 */}
                        <Route path="works/:id" element={<Works />} />
                    </Routes>
                </BrowserRouter>
            );
        };
        export default Router;
    </code>
</pre>