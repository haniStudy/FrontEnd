# Router DOM
- 여러 페이지를 가진 웹을 만들 수 있게 해주는 패키지
- 브러우저의 URL을 관리하고 페이지 라우팅을 처리하기 위한 라이브러리 -> 단일 페이지 어플리케이션 구축

## 순서
1. 페이지 컴포넌트 생성
- 페이지들 관리할 폴더 생성 (Pages)
- 하위에 원하는 페이지 관리한 파일 생성 (확장자: .jsx)

2. Router.js 생성 및 route 설정 코드 작성
- 브라우저에 우리가 URL을 입력하고 이동했을 때 우리가 원하는 페이지 컴포넌트로 이동하게끔 만드는 부분!

3. App.jsx (App.js)에 Router.js import 해주기
- App.jsx에 넣어주는 이유: 우리가 만든 프로젝트에서 가장 최상위에 존재하는 컴포넌트가 App.jsx이기 때문

### 코드 예시
1. 페이지 컴포넌트 생성
[Home.jsx] 
<pre>
    <code>
        import React from 'react';

        function Home() {
            return (
                <div>Home</div>
            )
        }
        export default Home
    </code>
</pre>

[Works.jsx]
<pre>
    <code>
        import React from 'react';

        function Works() {
            return (
                <div>Works</div>
            )
        }
        export default Works
    </code>
</pre>

2. Router.js 생성 및 route 설정 코드 작성
[Router.js]
<pre>
    <code>
        import React from "react";
        import { BrowserRouter, Route, Routes } from "react-router-dom";

        <!-- BrowserRouter를 Router로 감싸는 이유: SPA의 장점인 브라우저가 깜빡이지 않고 다른 페이지로 이동할 수 있게 만들줌! -->
        const Router = () => {
            return (
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="works" element={<Works />} />
                    </Routes>
                </BrowserRouter>
            );
        };
        export default Router;
    </code>
</pre>

3. App.jsx (App.js)에 Router.js import 해주기
<pre>
    <code>
        import React from "react";
        import Router from "./shared/Router";

        function App() {
            return <Router />;
        }

        export default App;
    </code>
</pre>