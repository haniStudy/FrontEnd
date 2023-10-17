# useInfiniteQuery
- 파라미터 값만 변경하여 동알한 useQuery를 무한정 호출할 때 사용
- 예: 무한 스크롤

## 종류
1. pageParam 
- 현재 어떤 페이지에 있는지 확인할 수 있는 파라미터 값

### 코드 예시
<pre>
    <code>
        const res = useInfiniteQuery(
            ['infinitePerson'], 
            ({ pageParam = 5 }) => axios.get('http://localhost:8080/person', {
            params: {
                id: pageParam
            }
        }));
    </code>
</pre>

2. getNextPageParam
- 다음 페이지에 있는 데이터 조회
- 다음 api를 요청할 때 사용될 pageParam 값을 정할 수 있음

### 코드 예시
<pre>
    <code>
        const res = useInfiniteQuery(
            ['infinitePerson'], 
            ({ pageParam = 5 }) => axios.get('http://localhost:8080/person', {
            params: {
                id: pageParam
            }
        }), {
            <!-- 
            lastPage: 호출된 가장 마지막에 있는 페이지 데이터를 의미
            allPages: 호출된 모든 페이지 데이터를 의미
             -->
            getNextPageParam: (lastPage, allPages) => {
                <!-- return 해준 값은 다음 페이지가 호출될 때 pageParam 값으로 사용  -->
                return lastPage.data.id + 1;
            },
        });
    </code>
</pre>

3. fetchNextPage
- 다음 페이지에 있는 데이터를 호출할 때 사용
- return 값에 포함되며 다음과 같이 버튼을 클릭할 때 실행될 이벤트로 등록해줄 수 있음

### 코드 예시
<pre>
    <code>
        const getPersons = () => {
            const res = useInfiniteQuery(
                ['infinitePerson'], 
                ({ pageParam = 5 }) => axios.get('http://localhost:8080/person', {
                params: {
                    id: pageParam
                }
            }), {
                getNextPageParam: (lastPage, allPages) => {
                    return lastPage.data.id + 1; // 다음 페이지를 호출할 때 사용 될 pageParam
                },
            });
            
            // 로딩 중일 경우
            if(res.isLoading) {
                return (
                    <LoadingText>Loading...</LoadingText>
                )
            }

            // 결과값이 전달되었을 경우
            if(res.data) {
                return (
                    <Person.Container>
                        {res.data.pages.map((page) => {
                            const person: Iperson = page.data;

                            return (
                                <Person.Box key={person.id}>
                                    <Person.Title>{person.id}.</Person.Title>
                                    <Person.Text>{person.name}</Person.Text>
                                    <Person.Text>({person.age})</Person.Text>
                                </Person.Box>
                            )
                        })}

                        <Person.NextButton onClick={() => res.fetchNextPage()}>Next</Person.NextButton> {/* 클릭 시 다음 페이지 호출 */}
                    </Person.Container>
                )
            }
        }
    </code>
</pre>