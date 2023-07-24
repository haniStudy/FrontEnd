# React Query
- React Application에서 서버 상태를 불러오고, 캐싱하며, 지속적으로 동기화하고 업데이트하는 작업을 도와주는 라이브러리
- 주로 서버에서 데이터를 가져오고 캐싱, 상태 관리, 데이터 갱신, 오류 처리 등을 처리하는 데 사용

## 장점
1. 직관적이고 효율적인 관리 지원: 서버 관리할 때 클라이언트 상태를 분리하여 관리 가능
2. Data Fetching 로직 단순화
3. 코드 수 감소

## 종류
1. Query (데이터 요청)
- axios의 경우 get 요청과 비슷

2. Mutation (데이터 변경)
- 추가, 수정, 삭제를 의미
- axios의 경우 post, put, patch, delete 요청과 비슷

3. Query Invalidation (최신회 = 무효화)
- 기존에 가져온 Query는 서버 데이터라서 언제든지 변경될 수 있음 (즉, 최신 상태 X)

## 설치 명령어
- yarn add react-query

### 예시 코드
<pre>
    <code>
        import React from 'react';
        import { useQuery } from 'react-query';
        import axios from 'axios';

        const fetchData = async () => {
            const response = await axios.get('https://api.example.com/data');
            return response.data;
        };

        const ExampleComponent = () => {
            const { data, isLoading, error } = useQuery('data', fetchData);

            <!-- 데이터가 로딩중인지 나타내는 상태 -->
            if (isLoading) { 
                return <div>Loading...</div>;
            }

            <!-- 오류 발생 여부 나타냄 -->
            if (error) {
                return <div>Error: {error.message}</div>;
            }
            <!-- isLoading이 true인 동안 로딩 메시지를 표시하고, error가 발생한 경우 오류 메시지를 표시 -->

            return (
                <div>
                    <h1>Data:</h1>
                    <ul>
                        {data.map(item => (
                        <li key={item.id}>{item.name}</li>
                        ))}
                    </ul>
                </div>
            );
        };

        export default ExampleComponent;
    </code>
</pre>