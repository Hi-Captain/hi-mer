# hi-mer
Make Timer with react

### 타이머 만들기

> 2018.07.30
  - title : 초기 설정
  - content : create-react-app 생성, 현재시간 표시
  - idea : 카운트 업(스톱워치), 카운트 다운(타이머) 컴포넌트를 만들어보자.

> 2018.07.31
  - title : 카운트 업
  - content : Date().getTime()으로 각 시점의 시간차를 활용해 카운트 업 작성,
              Stop상태에서만 Reset 허용,
              TimeFormat.js 컴포넌트로 시간 포맷 변환.
  - idea : 의외로 간단하게 해결이 되었지만 단순히 카운트 업만 생각하고 있다가,
           막상 stop한 다음 계속 카운트를 이어나가야 되는 부분에서 한참동안 고민했었다. 
           이제 랩타임을 기록해보자.

> 2018.08.01
  - title : 카운트 업 (랩타임 추가)
  - content : 'lap' state를 배열로 구성해서 랩타임 버튼을 누를 때의 시간을 배열에 추가한다.
              레이아웃 편의를 위해 타임테이블은 table 태그로 작성.
              각 버튼들을 삼항연산자를 통해 전환하도록 코드 수정.
  - idea : 생각보다 많은 시간이 걸렸지만 필요한 기능들은 순조롭게 잘 진행된 것 같다.
           크롬 브라우저에서 각 숫자마다 자간이 (특히 '1'이 유난히 신경쓰이게) 차이가 나는데, 
           추후에 전체적인 css 작업을 할 때 확실히 제대로 된 글꼴을 지정해 줄 필요가 있겠다.
           이제 카운트 다운 작업을 진행해보자.
           (Q : _run 함수 안에서 this.interval 함수를 함수 외부에서 clearInterval 시키고 싶은데,
           외부에서 접근할 수 있는 방법이 있을까?)

> 2018.08.01
  - title : 카운트 다운
  - content : TimeFormat 시간 오류 수정, msec 표시 여부 설정.
              TimeFormat 활용 시간 포맷 설정.
              버튼으로 원하는 시간을 셋팅할 수 있는 ui(갤럭시S7 기본 타이머 어플 참고)로 구성.
              ComponentDidUpdate로 음수값, 종료값 판단 + 카운트업, 카운트다운 최대값 설정.
              초기상태(state.time 값 0)에서 start 버튼 기능 제거,
              카운트다운 중일 때 start버튼은 pause로, reset버튼은 cancel로 변경.
  - idea : 카운트 다운 까지 잘 진행된 것 같다. 새로운 포맷을 구성하려고 했었는데,
           의외로 카운트 업 할 때 만들어둔 TimeFormat이 요긴하게 쓰였다.
           이제 스타일을 입히고 마무리해보자.
           (지난 Q에 대한 A : 그냥 clearInterval(this.interval)을 하면 되는거였었다.)

> 2018.08.02
  - title : Main CSS 정리
  - content : react-router-dom 활용 버튼 ui 구성.
              Home.js 생성.
              Google Marterial icons 활용 Home icon 삽입.
              Google Fonts 활용.
  - idea : 처음에는 한 페이지에 3가지 기능을 모두 담으려고 계획했었는데, 
           css를 어떻게 구성을 해야될까 고민하면서 react-router-dom을 활용해보았다.
           나머지 기능들도 css 정리를 하자.

> 2018.08.02
  - title : CSS 정리 및 마무리
  - content : CSS 정리 및 컴포넌트 별 빠진기능 정리.
              다른 컴포넌트로 넘어갈때 componentwillunmount로 반드시 interval 함수를 clear해줘야된다!!.
              Countdown에서 running 일 때 화살표 버튼들 작동 제한.
  - idea : (시간적 여유가 많이있었어도 별반 다를건 없겠지만) 급하게 한 것 치고는 나름대로 깔끔하게 잘 나온 것 같다.
            프로젝트 3개가 진행됬는데, 아무래도 코드리뷰를 부탁할 사람들을 찾는게 성장에 더 도움이 될 것 같다.
            flux에 대한 이해가 필요하다. redux, mobx 둘다 가볍게 훑은 다음에
            하나를 선택해서 집중적으로 공부하고 이를 활용한 프로젝트도 진행해보자.

> 2018.08.19
  - title : Fix _lap
  - content : 랩 리스트 생성할 때 생성 순서 역순으로 생성하기
  - idea : hi-fortune 만들면서 생각나서 수정함.

> 2018.08.20
- title : Performance optimization
- content : 카운트 아이템을 따로 관리 하는 LapRow.js 생성
- idea : 카운트 업 할 때 랩 리스트도 계속 렌더링 되는게 불필요하다 생각해서 수정함.