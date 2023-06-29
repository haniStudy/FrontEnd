# JSX (JavaScript XML)
- HTML과 유사한 구조를 가짐
- 리액트 컴포넌트의 UI를 작성하는 데 사용
- 리액트 요소 (React element)를 생성하기 위한 표기법!

### 코드 예시
<pre>
    <code>
        <!-- html로 작성하면?
        p style="color: orange; font-size: 20px;">orange</p> -->
        <p style={{color: 'orange', fontSize: '20px'}}>orange</p>

        function App() {
            const styles = {
                color: 'orange',
                fontSize: '20px'
            };

            return (
                <div className="App">
                <p style={styles}>orange</p>
                </div>
            );
        }
    </code>
</pre>