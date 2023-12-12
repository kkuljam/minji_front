/*
2인 과제

1.입차 
    1.차번호 입력받기 [숫자4자리 input text]
    2.입차 시간 input time
2.저장
    배열[차번호, 입차시간]에 저장
3. 출력
    alert('입차 완료)
===================================
3. 출차
    1. 차번호 입력받기 [숫자4자리 input text]
    2. 출차시간 input time
4. 해당 차번호의 입차시간과 출차시간을 계산해서
    계산식: 30분 내외면 무료, 10분당 1000원

5. 출력
    alert (요금)
    또는
    alert (입차한 차량이 없습니다.)

==========================
1. 입/출차시 차량번호 4자리만 입력할 수 있도록 하고 아니면 입차 불가능
2. 입/출차시 시간을 입력 안 했으면 입/출차 불가능
3. 일별 매출 현황 HTML에 출력하는 [배열추가, 함수 추가]
4. CSS 간단하게
*/
//========함수 밖 선언
const inNum = [];
const inTime = [];
//========== 입차 함수============
function 입차(){//f start
    
        console.log("입차")
        //1. [입력]
        const inCar = document.querySelector('#inNum').value;  
            console.log(inCar)
        const carTime = document.querySelector('#inTime').value;
            console.log(carTime)

        if( inCar.length != 4 ){ alert('차량번호 4자리를 입력해주세요.'); return; }
        if( carTime==''){alert('시간을 입력해주세요');return;}
        alert('입차 되었습니다.')
        
        inNum.push(inCar);   console.log(inNum);
        inTime.push(carTime); console.log(inTime);

        
            // document.querySelector('#inNum').value=''
            // document.querySelector('#inTime').value=''
    /*
    const inCar = document.querySelector('#inNum').value;
    const carTime = document.querySelector('#inTime').value;
    

        if( inCar.length != 4 ){ alert('차량번호 4자리를 입력해주세요.'); return; }
        if(carTime==""){ alert('시간을 입력 해 주십시오.'); return; }

        const inNum1= document.querySelector("#inNum").value;
        const inTime1= document.querySelector("#inTime").value;

        inNum.push(inNum1);
        inTime.push(inTime1);

        alert('입차 되었습니다.')
            document.querySelector('#inNum').value=''
            document.querySelector('#inTime').value=''

        console.log(inNum);
        console.log(inTime);
    */
}//f end

//===========출차=====================
//===========출차=====================
function 출차() //f start
{
    console.log("출차");
    const carOutNum=document.querySelector("#carOutNum").value;
    const carOut=document.querySelector("#carOut").value;

    //차량번호 리스트에서 인덱스 추출
    const searchCar=inNum.indexOf(carOutNum);

    //유효성 검사
    if(searchCar==-1){ alert('입차한 차량이없습니다.') ; return;}
    if(carOut==""){ alert('시간을 입력 해 주십시오.'); return; }   
    //유효성 검사 end

    let notice="";
    let pay=0;
//===========입차 시간===
    //시간 -> 숫자
    console.log(inTime[searchCar]);
    const inTimeSe=inTime[searchCar].split(':');    
    const inTimeNum=Number(inTimeSe[0])*60+Number(inTimeSe[1]);
    console.log(inTimeNum);
//=============출차 시간=====
    const outTimeSe=carOut.split(':');
    const outTimeNum=Number(outTimeSe[0])*60+Number(outTimeSe[1]);
    console.log(outTimeNum);
    //시간 -> 숫자 end
//==============돈=========
// 
    //if start
    if(inTimeNum<outTimeNum){ 
        if((outTimeNum-inTimeNum)<=30){//if_1 30분 이하로 주차한 경우
            pay=0;
        }
        else{       //if_1 30분 초과 주차한 경우
            if(((outTimeNum-inTimeNum)-30)%10==0){//if_2 
                pay=(((outTimeNum-inTimeNum)-30)/10)*1000;
            }
            else{       //if_2 
                pay=(parseInt(((outTimeNum-inTimeNum)-30)/10)+1)*1000;
            }
        } 
        alert(`${pay}원을 지불하십시오.`);      
    }

    else{
        alert(`시간을 다시 확인하십시오.`);
    }
    //if end  

    console.log(carOutNum);
    console.log(carOut);

}   //f end


//=============강사님 코드=============
/*
    const carNumArray = []  // 차량번호
    const carTimeArray = [] // 입차시간 

    function 입차(){ // 선언부 // 실행조건 : 입차 버튼클릭[onclick=""]했을때.

        console.log("입차 함수");
        // 1.[입력]
        const carNum = document.querySelector('#carNum').value;     console.log( carNum );  // 입력 그대로
        const carTime = document.querySelector('#carTime').value;   console.log( carTime ); // 03:31 // 20:33

        // 2.[처리] 배열명.push( 새로운요소 )
            // * [유효성검사]
            // 1. 차량번호 길이에 따른 갈림길... [ 저장 , 실패 ]
            if( carNum.length != 4 ){ alert('차량번호 4자리 입력해주세요.'); return; }
            // 2. 입차시간을 입력 안했으면.
            if( carTime === ''){ alert('입차시간을 선택해주세요.'); return; }

        carNumArray.push( carNum );     console.log( carNumArray );
        carTimeArray.push( carTime );   console.log( carTimeArray );
        // 3.[출력]
        alert('입차가 완료 되었습니다.');

    } // f end 

    function 출차(){ console.log('출차함수'); // * 함수 실행여부 확인
        // 1.[입력]
        const carOutNum = document.querySelector('#carOutNum').value;   console.log( carOutNum );
        const carOutTime = document.querySelector('#carOutTime').value; console.log( carOutTime );
        // 2.[처리]
        let 요금 = 3000; // 임의. 
        // =============================== 입차 시간 ===================================== //
        const outIndex = carNumArray.indexOf( carOutNum );  console.log( outIndex ); // 출차 차량번호의 인덱스
        if( outIndex == -1 ){ alert(`입차한 차량이 없습니다.`); return;  } // return 함수 강제 종료 // 아래 코드 실행X

        const inIime = carTimeArray[outIndex];  console.log( inIime ); // 출차차량번호의 인덱스를 이용한 입차배열내 입차시간.
        const inMtime = ( inIime.split(":")[0]*60) + Number( inIime.split(":")[1] );  console.log( inMtime );

        // =============================== 출차 시간 ===================================== //
            // 1. 시간을 모두 분으로 변경.
        const outArray = carOutTime.split(":"); console.log(outArray);
                // "03:56".split(":") 결과는 "03" "56"  : 자료2개 => 배열1개 // [ "03", "56"]
        const outH = outArray[0];               console.log( outH );   // 시 
        const outM = outArray[1];               console.log( outM );   // 분 
        const outMtime = (outH*60) + (outM*1);  console.log( outMtime );               
                                                // (시*60) + 분   // 출차시간을 분으로 환산 한 값.
        // =============================== 시간 차이  ===================================== //
        // 3.[출력]
        const time = outMtime - inMtime; console.log( '시간 차이 : ' + time )
        if( time < 0 ){ alert(`출차시간이 더 적을수 없습니다.`); return; }
        else if( time <= 30 ){ 요금 = 0; }
        else{   요금 = ( parseInt( (time-30)/10 ) ) * 1000;   }
        alert(`출차완료 : ${요금}`);
        
    } // f end 
*/

/*  
    [ 시간 차이 구하기 ]
    입차시간 : 02:30    ---> 1시간당 60분  ---> 120분+30분 -> 150분
    출차시간 : 04:20    ---> 1시간당 60분  ---> 240분+20분 -> 260분
        260 - 150 => 110 -> 60분당 1시간 => 1시간50분
        110 에 30분 무료 차감 => 80분 * 1000원 => 8000원
*/