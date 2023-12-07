
//109~110 증감연산자
    // 복합대입연산자 간략하게 사용하려고
    // 증감연산자는 1씩 증가 또는 1씩 감소 만 가능. [왜? 프로그래밍에서 순차적처리]
let value1 = 10;

value1 = value1 +1 ;    // 1. 변수호출하고 연산 후 결과를 변수에 대입
    console.log(value1)     // 1증가

    //vs 1번과 2번 차이점 : 없다.                    

    value1 += 1;            // 2. 1번 간략하게 하기위해
    console.log(value1)     // 1증가

    //vs 2번과 3번 차이점 : 없다 [단 증감연산자는 1증가/감소만 가능]

value1++;               // 3. 2번 간략하게 하기위해
    console.log(value1)     // 1증가    

    //vs 3번과 4번 차이점 : 없다 [ 후위 : , 선위 : ]

++value1;               // 3. 2번 간략하게 하기위해
    console.log(value1)     // 1증가

    //110
let number1 = 10; number1++; console.log(number1); //후위 = 11
let number2 = 10; ++number2; console.log(number2); //선위 = 11
    //차이점 1: console.log()우선? ++1 증가 우선?
let number3 = 10; console.log (number3++);         //후위 = 10 출력 후 증가
    console.log(number3)                            //    = 11
let number4 = 10; console.log (++number4);         //선위 = 11 출력 전 증가

    //차이점 2:
let reuslt1 = number4++ +10 ; console.log(reuslt1); //    =21 대입 후 number4 증가o
    console.log(reuslt1);                           //    =21 reuslt1 증가X
    console.log(number4);                           //    =12