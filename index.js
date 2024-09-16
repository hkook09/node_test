const express = require('express')
const app = express()

app.get('/', function (req, res) { //root
    //get(메소드)/(라우팅:주소.com/뒷부분서버의폴더들)콜백함수(뒤에실행할함수또는리턴함수)
  res.send('Hello World')
})

app.get('/dog', function (req, res) {
    
  //res.send('<h1>강아지</h1>') //http://localhost:3000/dog
  res.send("<a href='https://www.youtube.com/shorts/R2Ub8XOGqqM'>강아지</a>")
  //res.json({'sound':'멍멍'}) 둘다제이슨오브젝트를보내준다.
  //res.send({'sound':'멍멍'})제이슨은 자바스크립트오브젝트이다.
  //라우팅까지는요청 나머지는응답 한글은 깨지므로 인코딩사이트에서 바꾸어준다 
  //주소에https://xn--urlencoder-ok92b.org/ko/ 강아지=>%EA%B0%95%EC%95%84%EC%A7%80%0A 주소에왼쪽글이보이면한글임
})

app.get('/cat', function (req, res) {
    
  res.send('고양이') //http://localhost:3000/cat
})
app.listen(3000) //서버에서 계속 듣고 있다localhost: 3000번포트:본인컴의 ip도같음