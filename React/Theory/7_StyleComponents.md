# Style Components
- CSS-in-JS 방식으로 컴포넌트를 꾸밀 수 있게 도와주는 패키지
- 해당 컴포넌트 내에서만 사용 가능

## 사용하는 이유
1. 컴포넌트 기반 접근 방식: 관리가 쉽고, 컴포넌트 간의 스타일 출동 방지
2. 재사용성과 모듈성: 코드의 가독성을 높이고, 유지 보수 용이
3. 스타일 확장과 조건부 스타일링: 조건부로 스타일을 지정할 수 있음

### 코드 예시
<pre>
    <code>
        import React from "react";
        
        <!-- 1) import -->
        import styled from "styled-components"; 

        <!-- 2) 컴포넌트 생성 -->
        const StBox = styled.div`
            <!-- 3) 스타일 코드 작성, 스타일 코드는 css와 동일 -->
            width: 100px;
            height: 100px;
            border: 1px solid red;
            margin: 20px;
            `;

        const App = () => {return <StBox>박스</StBox>;};
        <!-- 4) 생성된 styled-components를 JSX에서 html 태그를 사용하듯이 사용 -->

        export default App;
    </code>
</pre>

* * *

# 조건부 스타일링
- 특정 조건에 따라 스타일을 동적으로 적용하는 기법
- 특정 조건: if문, switch문, 삼항 연산자 등등

### 코드 예시
<pre>
    <code>
        import React from "react";
        import styled from "styled-components";

        const StBox = styled.div`
            width: 100px;
            height: 100px;

            // 2) 부모 컴포넌트에서 보내준 props를 받아서 사용
            border: 1px solid ${(props) => props.borderColor}; 
            
            margin: 20px;
        `;

        const App = () => {
        return (
            <div>
            // 1) 부모에서 자식으로 props 전달
            <StBox borderColor="red">빨간 박스</StBox>
            <StBox borderColor="green">초록 박스</StBox>
            <StBox borderColor="blue">파랑 박스</StBox>
            </div>
            );
        };

        export default App;
    </code>
</pre>

* * *

# Global Style
- 전역 스타일링 -> 공통적으로 들어가야 할 스타일

### 코드 예시
[GlobalStyle.jsx] 스타일 정의되어 있는 파일
<pre>
    <code>
        import { createGlobalStyle } from "styled-components";

        const GlobalStyle = createGlobalStyle`
        body {
            font-family: "Helvetica", "Arial", sans-serif;
            line-height: 1.5;
        }
        `;

        export default GlobalStyle;
    </code>
</pre>

[App.jsx]
<pre>
    <code>
        import GlobalStyle from "./GlobalStyle";
        import BlogPost from "./BlogPost";

        function App() {
            const title = '전역 스타일링 제목입니다.';
            const contents = '전역 스타일링 내용입니다.';
            return (
                <>
                    <GlobalStyle />
                    <BlogPost title={title} contents={contents} />
                </>
            );
        }
        export default App;
    </code>
</pre>

* * *

# SASS (Syntactically Awesome Style Sheets)
- CSS를 효율적으로 사용하기 위해 만들어진 언어
- css의 기능을 확장하고, 코드 작성을 편리하게 해주는 도구
- css의 단점을 보완하고, 재사용성과 유지보수성을 높이는 목적으로 개발

### 코드 예시
<pre>
    <code>
        <!-- 1) 변수를 사용할 수 있다. ($ 기호 사용) -->
        $color: #4287f5;

        div {
            background: $color;
        }

        <!-- 2) 중접할 수 있다. (Nesting) -->
        label {
            // 기본 설정 정보
            padding: 3% 0px;
            width: 100%;
            cursor: pointer;
            color: $colorPoint;

            &:hover { // 마우스를 올렸을 때
                color: white;
                background-color: $color;
            }
        }

        <!-- 3) 다른 style 파일을 import 할 수 있다.
         common.scss -->
        $color1: #ed5b46;
        $color2: #f26671;
        $color3: #f28585;
        $color4: #feac97;

        // style.scss
        @import "common.scss";

        .box {
            background-color: $color3;
        }
    </code>
</pre>

* * *

# css reset
- default style 제거 방법
> default style: 브라우저가 기본적으로 제공하는 스타일

# 코드 예시
<pre>
    <code>
        // reset.css
        html, body, div, span, applet, object, iframe,
        h1, h2, h3, h4, h5, h6, p, blockquote, pre,
        a, abbr, acronym, address, big, cite, code,
        del, dfn, em, img, ins, kbd, q, s, samp,
        small, strike, strong, sub, sup, tt, var,
        b, u, i, center,
        dl, dt, dd, ol, ul, li,
        fieldset, form, label, legend,
        table, caption, tbody, tfoot, thead, tr, th, td,
        article, aside, canvas, details, embed, 
        figure, figcaption, footer, header, hgroup, 
        menu, nav, output, ruby, section, summary,
        time, mark, audio, video {
            margin: 0;
            padding: 0;
            border: 0;
            font-size: 100%;
            font: inherit;
            vertical-align: baseline;
        }

        // index.html
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
            <link rel="stylesheet" href="./reset.css" />
        </head>
        <body>
            <span>Default Style을 테스트 해 봅니다.</span>
            <h1>이건 h1 태그에요</h1>
            <p>이건 p 태그에요</p>
        </body>
        </html>
    </code>
</pre>