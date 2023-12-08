
//131 if 조건문
    //조건에 따라서 코드를 실행하거나 실행하지 않을 때 사용하는 구문
    //가장 일반적으로 사용하는 조건문: If
    /*
        형태
        1. 
            if (T/F){참/T 일 때 실행코드;}
        2. 
            if (T/F){참/T 일 때 실행코드;}
            else{거짓/F 일 때 실행코드};
        3. 
            if (T/F){
                if(T/F){}
                else{}
            }else{
                if(T/F){}
                else{}
            }
        4.
            if(조건1){}
            else if (조건2){}
            else if (조건3){}
            else if (조건4){}
            else {}
    */
/*
//1. if(조건) : 조건의 결과가 참이면 {}안으로 들어가고 아니면 {} 못들어감
if(273<100){
    console.log("273<100 =>true"); //실행 X [조건이 false이므로]
}
console.log('1종료'); // 실행o [조건문과 상관이 없음]

//2.
const date = new Date(); // new Date(); 현재시간을 알려주는 코드[클래스: 미리 만들어진 구조/코드] 
    console.log(date);
const hour=date.getHours(); // 현재시간.getHours(): 현재시간에서 시분초 중 시를 반환 함수
    console.log(hour);

    //1. 만약에 현재 시 가 12보다 작으면 오전
if(hour<12){console.log('오전입니다.');}
    //2. 만약에 현재 시 가 12보다 이상이면 오후
if(hour>=12){console.log("오후입니다.");}

//3.134

if(hour <12 ){console.log('오전입니다.');}
else{console.log("오후입니다.");}

//4
if(hour <11 ){console.log('아침먹을 시간입니다.');
}else{
    if(hour<15){console.log('점심먹을 시간');
    }else{
        console.log('저녁먹을 시간');
    }
}

//5 137
if(hour<11){console.log('아침먹을 시간입니다.');}
else if(hour <15){console.log('점심먹을 시간');}
else{console.log('저녁먹을 시간');}
*/

// 연습문제 
const a = Number(prompt(''));
if (a>0){console.log('양수');}
else if(a==0){console.log('0');}
else{console.log('음수')}

if(a %2 ==0){console.log('짝수');}
else{console.log('홀수');}

if(3<=a && a<=5){봄}
else if (a >=6 && a<=8){여름}
else if (a >=9 && a<=11){가을}
else{겨울}
