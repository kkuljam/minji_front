//함수: 코드를 저장해서 호출을 여러번 가능[재활용]


//if문 연습문제
//prompt 대신에 input으로 입력받기
// 풀이 결과 console.log 대신 span으로

//   참고
    // 1. HTML 마크업 정보를 JS 변수로 가져오는 함수
        // document.querySelector('마크업 또는 #id 또는 .class명')
    // 2. .value 속성 값 가져오기
        //document.querySelector('마크업 또는 #id 또는 .class명').value
    // 3. innerHTML 속성 이용한 HTML에 출력
        //document.querySelector('마크업 또는 #id 또는 .class명').innerHTML =

//문제1: 3개 점수를 <input>입력받아 총점과 평균에 <span>출력하시오
    //함수 선언
function 연습버튼을클릭했을때실행되는코드모음상자(){
    //1. 입력
    //input 입력받은 값 가져오기 []
    let value1 = document.querySelector('#input1').value
    let value2 = document.querySelector('#input2').value
    let value3 = document.querySelector('#input3').value
    //2. 처리
    let sumValue = Number(value1)+Number(value2)+Number(value3);
    let avgValue = sumValue/3;
    //3.출력
    document.querySelector('#result').innerHTML= `총점 : ${sumValue}점 평균:${avgValue}` 
}

//문제2 : 2개 정수 입력받아 더 큰 수 출력
function 문제2함수(){
    let value1 = Number(document.querySelector('#input1').value);
    let value2 = Number(document.querySelector('#input2').value);

    let result = "";
    if (value1>value2){result=value1+"가 큽니다";}
    else if(value1<value2){result=value2+"가 큽니다";}
    else{result="두 수는 같다."}

    document.querySelector('#result').innerHTML=`${result}`
}

//문제 3 : 3개의 정수[입력값1/2/3] 를 입력받아서 가장 큰수를 출력 
function 문제3함수(){
    let value1 = Number(document.querySelector('#input1').value);
    let value2 = Number(document.querySelector('#input2').value);
    let value3 = Number(document.querySelector('#input3').value);

    /*
    let result = "";
    if (value1>value2 && value1>value3){result=value1+"가 큽니다";}
    else if(value1<value2 && value3<value2){result=value2+"가 큽니다";}
    else{result=value3+"가 큽니다"}
    =========강사님 코드 추가 넣기====
    */

    document.querySelector('#result').innerHTML=`${result}`
}

//문제 4 : 1개의 점수[입력값1] 를 입력받아 점수 90점이상 합격 출력 아니면 탈락 출력 
function 문제4함수(){//f start
    let value1 = Number(document.querySelector('#input1').value);
    let result = "";
    if(value1>=90){result="합격"
    }else{
        result="불합격"
    }
    document.querySelector('#result').innerHTML=`${result}`
}  //f end        
/*문제 5 : 점수[입력값1]를 입력받아 점수 90점이상 A등급 출력 
                            80점이상 B등급 출력 
                            70점이상 C등급 출력  
                            그외 재시험
*/
function 문제5함수(){
    let value1 = Number(document.querySelector('#input1').value);
    let result = "";
    if(value1>=90){result="A등급"
    }else if(value1>=80){
        result="B등급"
    }else if(value1>=70){
        result="C등급"
    }else{result="재시험"}
    document.querySelector('#result').innerHTML=`${result}`
}
/*문제 6: 아이디[입력값1] 와 비밀번호[입력값2] 입력받기 
                   회원아이디가 admin 이고 비밀번호가 1234 이면 로그인 성공 출력 아니면 로그인실패 출력
*/
function 문제6함수(){
    let value1 = document.querySelector('#input1').value;
    let value2 = document.querySelector('#input2').value;
    let result = "";
    if(value1=="admin"&& value2=="1234"){
       result="로그인 성공" 
    }else{result="로그인 실패"}
    document.querySelector('#result').innerHTML=`${result}`
}

//문제 7 : 3개의 정수[입력값1/2/3] 를 입력받아서 오름차순 / 내림차순 출력
let value1 = Number(document.querySelector('#input1').value);
let value2 = Number(document.querySelector('#input2').value);
let value3 = Number(document.querySelector('#input3').value);

let num1 = "";
let num2 = "";
let num3 = "";
let max = value1;
if (max<value2){num1=max}else{num2=max}
if (max<value3){}
if (max>value3){num1=max}else{num1=value3}