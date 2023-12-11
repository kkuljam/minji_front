console.log('js 열림');

const 회원배열 = []; //여러 회원이름을 저장하는 배열

function 회원등록(){//f s
    console.log('회원등록함수 실행')
    // 1. [입력] : input로 부터 입력받은 값[value] 호출 해서 name상수 저장.
    const name = document.querySelector('#nameInput').value;  


        if( 회원배열.indexOf( name ) >= 0 ){ alert('현재 등록된 이름입니다.[중복]');    return; }
        if( name.length != 3 ){ alert('회원명 3글자로 입력해주세요.'); return; }
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
    //2. 처리 삭제 처리 -> 배열에서 요소 제거
        //입력한값이 존재하면 삭제, 없으면 없다고 출력
    const deleteIndex = 회원배열.indexOf(name);
    if(deleteIndex>=0) {// .indexOf() : 존재하면0 이상의 인덱스위치 반환
        회원배열.splice(deleteIndex,1); alert('삭제 했습니다');
    }else{//없으면 -1
        alert('존재하지 않습니다');
    }
    //출력 -> 새로고침 (배열내 요소가 변경되었으니가 화면도 다시 출력) : 재 렌더링
    document.querySelector('#nameList').innerHTML=회원배열;
}//f edn


