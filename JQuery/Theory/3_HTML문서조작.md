## HTML 문서 조작

### 속성
.attr()
- 속성과 관련된 작업 실행, 선택한 문서 객체에 속성 추가 가능
- attr(name, value) -> name 속성 값을 value 설정
- attr(name, callback) -> name 속성 값을 합수로 설정
- .attr(object) -> 여러 속성을 동시에 설정 (객체)
- .attr(name) -> 해당 속성에 접근
- .removeAttr(name) -> 선택한 요소의 name 속성 제거

.val()
- 값을 가져오거나 설정

.text()
- 텍스트 콘텐츠를 가져오거나 설정
- 설정하고 싶은 경우 매개변수 삽입 $("p").text("변경 내용");

.prop()
- 프로퍼티를 가져오거나 설정

.html()
- 내부 HTML을 설정하거나 반환, 해당 요소의 내부 HTML을 완전히 대체

is()
- 해당 특징을 가지는지 확인(속성, 클래스명 등)

### 선택
.eq(index)
- 선택한 요소 중 지정한 인덱스 요소

.first()
- 선택한 요소 중 첫 번째에 요소

.last()
- 선택한 요소 중 마지막 요소

find(하위요소)
- 선택한 요소 중 조건에 맞는 요소 찾기
- 예시: $("ul").find("li") -> ul 요소 내에 있는 모든 li 하위 요소

.children()
- 선택한 요소의 자식 요소

.parent()
- 선택한 요소의 부모 요소

.siblings()
- 선택한 요소의 형제 요소들

.next()
- 선택한 요소의 다음 형제 요소

.prev()
- 선택한 요소의 이전 형제 요소

add()
- 문서 객체 추가

### 클래스 관련
.addClass(’className’)
- 선택한 요소에 클래스 속성 삽입

.removeClass(’className’)
- 선택한 요소의 해당 클라스 속성 삭제

### CSS 관련
.css()
- css와 관련된 기능 수행
- 예: $('h1').css('background-color', 'red');

### 제이쿼리 컬렉션 관련
each(callback)
- 선택된 요소에 대해 반복 작업을 수행
```
$('h1').each((idx, ele)=>{
    $(ele).html(`${idx}`) // hi태그의 innerHTML값을 각각 0, 1, 2...로 변환
})
```

filter(selector)
- 선택된 요소에 대해 필터링 작업 수행
- selector에 해당하는 요소만 남김

filter(callback)
- 콜백함수 실행, 리턴값이 true인 요소만 남김
```
$("li").filter(function() {
    return $(this).text().length >= 5;
});
```

.length()
- 컬렉션에 포함된 요소 개수 반환

.slice(start, end)
- 컬렉션에서 지정된 범위의 요소들 선택, end는 선택 범위에서 제외

### 문서 객체 생성/삭제
.remove()
- 선택한 요소 삭제

.empty()
- 선택한 요소 내부를 비움

$(A).appendTo(B)
- A를 B내부의 마지막에 추가

$(A).prependTo(B)
- A를 B의 내부의 처음에 추가

$(A).insertAfter(B)
- A를 B의 뒤에 추가

$(A).insertBefore(B)
- A를 B의 뒤에 추가

$(A).append(B)
- B를 A의 내부 마지막에 추가

$(A).prepend(B)
- B를 A의 내부 처음에 추가

$(A).after(B)
- B를 A의 앞에

$(A).before(B)
- B를 A의 뒤에 추가

.clone()
- 요소 복사