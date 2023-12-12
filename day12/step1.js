/*
    142 switch 조건문
        -break : switch이거나 반복문(for/while)에서 {} 나가기/탈출
        -논리(범위)판단X / 경우의 수가 값으로 정해져있는 경우
        1. 형태
            switch(자료){
                case 조건A : 실행코드; break;
                case 조건B : 실행코드; break;
                case 조건C : 실행코드; break;
                default : btrak; 
            }

    145 삼항연산자
    -간단한 (조건 1개 또는 2개) 결과
    -조건 렌더링[화면](JS 많이 씀-짝수면 빨간색, 홀수면 파란색)
    1.형태
        불 표현식 ? 참일 때 결과 : 거짓일 때 결과
*/

// 1. 홀수/짝수 구분 예제
const input = Number(prompt('숫자를 입력하세요')); // 자료를 입력받아 숫자 자료형 반환 후 상수에 저장
//1. 예) if
if(input % 2 ==0){console.log("if 짝수입니다");}
else{console.log("if 홀수입니다");}

//예) switch
switch(input %2){
    case 0: console.log('case짝수입니다'); break;
    case 1: console.log('case홀수'); break;
    default : console.log('case숫자가 아님'); break;
}

//2
const date = new Date();        //new Date(); 현재날짜/ 시간 알려주는 코드(객체)
const hour = date.getHours();   // ..getHours() 현재날짜/시간에서 '시'만 추출 함수

if(hour<11){console.log('아침 먹');}
else if (hour<15){console.log('점심 먹');}
else{console.log('저녁 먹');}

switch(true){
    case hour < 11 : console.log('아침 먹'); break;
    case hour < 15 : console.log('점심 먹'); break;
    default : console.log('저녁 먹');break;
}

//3.
const input2 = prompt('숫자입력');
const number = Number(input2);

//if
if(number >=0){console.log('0이상의 숫자입니다.');}
else{ console.log('0보다 작은 숫자입니다')}

//삼항연산자
const result = number >=0? '0 이상의 숫자입니다.' :'0보다 작은 숫자입니다.';
console.log(result);

//148 홀수 짝수 구하기
    // -홀짝 계산식 : 수 % 2 == 0 또는 1
    // -문자인경우 :Number(문자열[문자열.length-1]) % 2

//150
const score = Number(prompt('학점을 입력해주세요','학점'));

//비효율적
if( score===4.5 ){console.log('신');}
else if(4.2<= score && score <4.5){console.log('교수님의 사랑');}
else if(3.5<= score && score <4.2){console.log('현 체제의 수호자');}
else if(2.8<= score && score <3.5){console.log('일반인');}
else if(2.3<= score && score <2.8){console.log('일탈을 꿈꾸는 소시민');}
else if(1.75<= score && score <2.3){console.log('오락문화의 선구자');}
else if(1.0<= score && score <1.75){console.log('불가촉천민');}
else if(0.5<= score && score <1.0){console.log('자벌레');}
else if(0<= score && score <0.5){console.log('플랑크톤');}
else{console.log('시대를 앞서가는 혁명의 씨앗')}

//효율적
if( score===4.5 ){console.log('신');}
else if(4.2<= score){console.log('교수님의 사랑');}
else if(3.5<= score){console.log('현 체제의 수호자');}
else if(2.8<= score){console.log('일반인');}
else if(2.3<= score){console.log('일탈을 꿈꾸는 소시민');}
else if(1.75<= score){console.log('오락문화의 선구자');}
else if(1.0<= score){console.log('불가촉천민');}
else if(0.5<= score){console.log('자벌레');}
else if(0<= score){console.log('플랑크톤');}
else{console.log('시대를 앞서가는 혁명의 씨앗')}

//153
    //문자열.split("") :문자열내 특정문자 기준으로 문자열 분리 함수 / 반환 : 배열
    //'유재석, 강호동, 신동엽'.split(',') : 3조각 쪼개짐. 유재석 강호동 신동엽
    // 여러 조각/자료 을 모아두는 곳 == 배열 [여러 자료를 저장하는 곳]
const rawInput = prompt('태어난 해를 입력해주세요')
const year = Number(rawInput);

const tti ='원숭이,닭,개,돼지,쥐,소,호랑이,토끼,용,뱀,말,양'.split(',');
        //tti상태:  tti=[원숭이 닭 개 돼지 쥐 소 호랑이 토끼 용 뱀 말 양]
            /* "문자열".split('분리할기준문자');
                -분리할 기준 문자는 사라지고 자료를 분리
                -분리 후 자료 수 12개: 원숭이 닭 개 돼지 쥐 소 호랑이 토끼 용 뱀 말 양
            */
console.log(tti[0]);
console.log(tti[8]);
console.log(`${year}년에 태어났다면 ${tti[year%12]}띠 입니다.`);

// const result= (100>200)
// ? prompt('값을 입력해주세요','')
// : confirm('버튼을 클릭')
// alert(result)