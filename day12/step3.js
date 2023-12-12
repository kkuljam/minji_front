console.log('js 열림');

const 회원배열 = []; //여러 회원이름을 저장하는 배열 /  함수밖에 있으니까. js 실행 한번만
        // - 배열 위에 선언/ 생성한 이유
            //1. 선언은 1번만 되어야 한다. [왜? 선언이 계속되면 초기화되서 누적 불가능]
            //2. 여러 {} 에서 호출/ 사용해야 하므로 전역 사용 {}
                //1. function 회원등록(){} 2. function 회원삭제 (){}
/*
    - 지역변수 특징
        {  } 안에서 선언된 변수/상수는 { } 밖으로 나올수 없다. 
        {  } 안에서 선언된 변수/상수는 하위 { } 안으로 들어갈수 있다.
    =========================== JS 구역[대한민국=전체구역] ========================
    let 변수1 = 30;
        ======================= 함수{} 구역[ 경기도 구역 ] =============================
    function 함수(){        
        let 변수2 = 40;
        console.log( 변수1 );   // 대한민국 사람이면 경기도 들어갈수 있다.
        if( 조건 ){ ======================= if{} 구역[ 안산 구역 ] =============================
            console.log( 변수1 );       // 대한민국 사람이면 안산 들어갈수 있다.
            console.log( 변수3 );       // X
            let 변수4 = 60;             
        }
        console.log( 변수4 );           // X
    }
        ======================= 제어문{} 구역[ 강원도 구역 ] =============================
    if( 조건 ){
        let 변수3 = 50;
        console.log( 변수1 );   // 대한민국 사람이면 강원도 들어갈수 있다.
        console.log( 변수2 );   // 다른 구역에 태어난[선언]된 변수는 들어올수 없다.
    }
    =========================== JS 구역 ========================

*/

function 회원등록(){//f s // 선언
    console.log('회원등록함수 실행')
     // const 회원배열 = [] // !!!: 함수 호출될때마다 실행되는 구역 -> 함수 호출될때마다 선언  // 누적불가.
    // 1. [입력] : input로 부터 입력받은 값[value] 호출 해서 name상수 저장.
    const name = document.querySelector('#nameInput').value;  
    // 2. [처리]  // 등록처리 -> 배열에 추가    // return : 함수 반환/리턴/함수종료/ 아래코드 안된다.
        // - 아래 3가지중에 하나라도 충족하면 retrun 만나면 아래코드 실행X 그래서 PUSH 불가능.
        // [ 유효성검사 = 데이터 검사[필터링]  ]
        // 1. 중복검사

        if( 회원배열.indexOf( name ) >= 0 ){ alert('현재 등록된 이름입니다.[중복]');    return; } // return : 함수를 실행했던 위치로 돌아가게 하는 것. 
        //2. 길이 체크
        if( name.length != 3 ){ alert('회원명 3글자로 입력해주세요.'); return; }
        //3.  숫자 검사
        if( !isNaN(name[0]) || !isNaN(name[1]) || !isNaN(name[2] ) ){ alert('숫자를 입력할수 없어요.'); return;}
    
    회원배열.push( name ); // 입력된 값을 배열에 추가 

    // 3. [출력]
    document.querySelector('#nameList').innerHTML = 회원배열; 
    // [ 부가기능1] 등록후 input 상자 초기화 [ input에 value에 빈문자열 넣어주기 ]
    document.querySelector('#nameInput').value ='';
}// f end
//변수 :let , 상수 : const , 함수 : function

    /*
    //1.[입력]
    const name= document.querySelector('#nameInput').value;
        console.log(name);
    //2.[처리]등록처리 ->배열에 추가
        // [부가기능2] 만약에 입력받은 이름이 이미 배열에 존재하면 [ 중복발생]
        // 중복이면 alert로 중복이라고 해주고, 배열에 push 하지말기
    if (회원배열.indexOf(name) >= 0){ // 존재하면 인덱스번호 반환 / 없으면 -1
        alert('현재 등록된 이름입니다. [중복]');
    }else{
          // [부가기능2] 회원명은 3글자인 경우에만 가능
         // 입력값에 글자수가 3이 아니면 입력불가 해주고, 배열에 push 하지말기
        if (name.length !=3){
            alert('회원명은 3글자로 입력해주세요')
        }else{ 
            // [부가기능2] 만약에 입력받은 이름에 숫자가 포함되어 있으면
            // 입력값에 alert로 숫자는 입력불가 해주고, 배열에 push 하지말기
                //isNaN() 문자인지 숫자인지 판단 함수 [NaN : not a number]
            console.log(isNaN(name[0]))
            console.log(isNaN(name[1]))
            console.log(isNaN(name[2]))
            if(! isNaN(name[0])|| isNaN(name[1])||isNaN(name[2])){// 하나라도 숫자이면
                alert('숫자를 입력할 수 없어요')
            }else{
                회원배열.push(name); //입력된 값을 배열에 추가
                console.log('회원배열')
                //3.[출력]
                document.querySelector('#nameList').innerHTML=회원배열;
            
                //4. [부가기능]
                    //1 등록후 input 상자 초기화 [input에 value에 빈문자열 넣어주기]
                document.querySelector('#nameInput').value='';
            }            
        }        
    } */


function 회원삭제(){// f s
    console.log('회원삭제 함수')
    //1.입력
    const name = document.querySelector('#nameInput').value;
    //2. 처리 삭제 처리 -> 배열에서 요소 제거  //입력한값이 존재하면 삭제, 없으면 없다고 출력
    const deleteIndex = 회원배열.indexOf(name);
    if(deleteIndex>=0) {// .indexOf() : 존재하면0 이상의 인덱스위치 반환
        회원배열.splice(deleteIndex,1); alert('삭제 했습니다');
    }else{//없으면 -1
        alert('존재하지 않습니다');
    }
    //출력 -> 새로고침 (배열내 요소가 변경되었으니가 화면도 다시 출력) : 재 렌더링
    document.querySelector('#nameList').innerHTML=회원배열;
}//f edn


// 선언키워드 
// 변수 : let , 상수 : const , 함수 : function