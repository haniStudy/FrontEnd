# 터미널에서 입력 받는 방법 
- readline 모듈 사용


## 메소드 종류
1. on: 이벤트가 발생할 때 실행할 동작을 지정
2. line: readline interface를 통해 다룰 이벤트, 사용자가 콘솔에 입력을 할 때 발생
3. close: Readable 스트림 종료를 제어하는 이벤트


### 예시 코드
1. 한 줄
<pre>
  <code>
    const readline = require("readline");
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.on('line', (line) => {
      console.log('input', line);
      rl.close();
    });

    rl.on("close", () => {
      process.exit();
    })
  </code>
</pre>

2. 한 줄 (공백 기준으로 나눔)
<pre>
  <code>
    const readline = require("readline");
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    let input = []
    rl.on("line", (line) => {
      // 공백을 기준으로 
      input = line.split(' '); 
      rl.close();
    });

    rl.on('close', () => {
      nput.forEach(el => {
        console.log(el);
      })
      process.exit();
    })
  </code>
</pre>

3. 여러 줄 입력
<pre>
  <code>
    const readline = require("readline");
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    let input = [];
    rl.on("line", (line) => {
      input.push(line);
      // 받은 input 값인 line을 input 배열에 넣어줌
    });

    rl.on("close", () => {
      console.log(input); // input 배열 산출
      process.exit();
    });
  </code>
</pre>