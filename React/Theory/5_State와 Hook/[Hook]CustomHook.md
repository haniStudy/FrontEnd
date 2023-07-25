# Custom Hook
- 개발자가 직접 만든 훅

## 장점
1. 코드, 로직이 간결해지고 가독성이 좋아짐
2. 필요없는 반복을 줄이고 재사용성을 높임
3. 유지보수에 용이

<pre>
    <code>
        import { useState } from 'react';
        export function useInput(initialValue) {
                const [inputVal, setInputVal] = useState(initialValue);

                const handleChange = (e) => {setInputVal(e.target.value)};

            return [inputVal, handleChange];
        }
    </code>
</pre>

[오픈 API 가져올 때]
<pre>
    <code>
        // useFetch.js
        export function useFetch(baseUrl, initialType) {

            const [date, setData] = useState(null);

            const fetchUrl = (type) => {
                fetch(baseUrl + '/' + type)
                    .then((res) => res.json())
                    .then((res) => setData(res))
            }

            useEffect(() => {
                fetchUrl(initialType);
            }, []);

            return {
                data,
                fetchUrl
            };
        }

        // App.js
        function App() {
            const {data: userData} = useFetch(baseUrl, 'users');
            const {data: postData} = useFetch(baseUrl, 'posts');

            return (
                <div>
                    <h1>Users</h1>
                    {userData && <pre>{JSON.stringify(userData[0], null, 2)}</pre>}
                    {postData && <pre>{JSON.stringify(postData[0], null, 2)}</pre>}
                </div>
            )
        }
    </code>
</pre>