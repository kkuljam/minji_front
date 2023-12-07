//102 상수와 변수

/* 1. 상수만들기 [4단계]
        1. const    키워드 작성     왜? 상수인지 변수인지 식별용
        2.상수명    이름[식별자]    왜? 상수가 여러개 있으므로 그 중에서 구별
        3. =        대입연산자 [값을 변수에 넣는 역할]  왜? 오른쪽 값을 왼쪽에 대입
        4. 자료     저장할 값*/
const pi = 3.141592;

//2. 상수 호출하는 방법 [상수 이름 작성]
console.log(pi); // 상수 출력
// console.log(없는거); // 없는거 is not defined

//3. 상수의 값을 변경하는 방법 없음 불가능 [상수는 값을 변경할 수 없다.]
// pi = 3.15;

const r=10;

//4. 상수의 연산
console.log(2*pi*r);
//pi상수[상자] 안에 있는 값을 꺼내기 우선 =상수 호출

//5. 동일한 상수명 사용 [상수명은 식별용이므로 중복 (동일한 범위)이 불가능]
// const pi= 3.97;

//6. 상수의 값 대입을 안했을 때 [상수 만들때[처음에] 값 [초기값]을 넣는 과정 = 초기화, 초기화가 없으면 오류발생]
// const pi2;


//105 변수

// 1변수 만들기 [4단계]
    //1. let
    //2. 변수명
    //3. =
    //4. 값 
let pi3 = 3.141592;

//2. 변수 호출 [변수 호출시에 키워드 쓰지 마세요]
console.log(pi3);
console.log("pi3:"+pi3) // 연결연산자 : "문자열"+변수의값 (숫자)=> 문자열
console.log(`pi3 : ${pi3}`); // 템플릿 문자열 `문~~자~~~$(변수/상수/자료)~~열`

//3. 변수의 값 변경 [값 벼경시에도 변수 호출 후 다시 대입]
pi3 = 3.15; console.log(pi3);

//4. 변수의 연산
let r3 =10;
console.log(2*pi3*r3);

//var 와 let 키워드 차이
let value1 = 10;
// let value1 = 10; 불가능 [동일한 변수명으로 선언시 선언불가]

var value2 = 10;
// var value2 = 10; 가능 [동일한 변수명으로 선언시 동일한 이름이 있을 경우 덮어쓴다.]


//108 복합 대입 연산자
let value = 10;
    // 컴퓨터는 동시에 다발적으로 연산을 처리X 연산 하나씩 처리
value += 10;
    // vs
value = value + 10;//문장
    //  = 기준으로 오른쪽 연산
    // 1.10             value + 10 중에서 변수 호출 호출         
    // 2. 10 +10        호출 후 연산   
    // 3. 20            연산 결과
    // 4. =             연산 후 대입
    // 5. value = 20    변수 수정
console.log(value);

//*****JS에서 HTML (문자열 자료형)를 작성할때 */
let list = ``; // list 변수에 빈문자열 넣은 상태로 선언

list += `<ul>`;
list += `<li>Hellow</li>`;
list += `<li>JavaScript</li>`;
list += `</ul>`;
document.write(list);

//예제 1: 2개의 숫자를 입력받아 더한 결과 값을  html에 <h3>안에 출력
    // prompt("출력하고 싶은 내용"); :입력[input type=text]제공하는 알람 함수
        // input에 입력된 결과를 반환
let ex1Value1 = prompt("숫자를 입력하세요");
console.log(typeof ex1Value1);
        // 타입변환1 / 문제점 : 혹여나 소수점 있으면 사라짐
// ex1Value1 = parseInt(ex1Value1)   console.log(typeof ex1Value1)
        //타입변환2 [Number("숫자")-> 숫자]
ex1Value1 = Number (ex1Value1);     console.log(typeof ex1Value1);

let ex1Value2 = Number(prompt("2번째 숫자 입력해"))
    //            함수(함수2()); // 함수 2결과를 함수1에 넣고 함수1 결과를 얻는 과정
    //             입력을 받고 입력받은 데이터를 타입 변환[Number]하고 변수에 대입
document.write(`<h3>예제1번 결과 ${ex1Value1 + ex1Value2}</h3>`);

/*
let ex1 =``;
let number1 = Number(prompt("숫자"));
let number2 = Number(prompt("숫자"));
ex1 +=`<h3> number1+number2 </h3>`;
document.write(`ex1`)
*/

//예제 2: 2개의 숫자를 입력받아 더 큰 수를 html에 <h3> 안에 출력

    //1. 입력받은 데이터를 숫자 자료형으로 변환[숫자로 연산을 해야하니까]후 각 변수에 대입[저장하려고]
let ex2Value1 = Number(prompt("예제 2 1번 숫자 입력"));
let ex2Value2 = Number(prompt("2번 입력해"));
console.log(ex2Value1 > ex2Value2); // 만약 10과 20을 입력했다면 false
    //2. *
    // 단항연산자 [피연산자1개] , 이항연산자 [피연산자2개], 삼항연산자 [피연산자3개]
    // 삼항연산자 : 조건? 참 : 거짓         [: 콜론/ ; 세미콜론]
        //-조건[T/F]에 따른 실행
        //true , false 을 다르게 표현
console.log(ex2Value1>ex2Value2 ? '진실' : '거짓'); // false 대신에 '거짓' 표현
document.write(`<h3>예제 2 결과 : ${ex2Value1>ex2Value2 ? ex2Value1 : ex2Value2}</h3>`)


