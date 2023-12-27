// 331 키보드 이벤트

//1. HTML 모두 로드 되었을 때
document.addEventListener('DOMContentLoaded',function(){

    //2. 특정 html 요소를 객체로 호출
    const textarea = document.querySelector('textarea');
    const h1 = document.querySelector('h1');

    //3. textarea 요소의 이벤트 등록
    textarea.addEventListener('keyup', function(e){
        console.log(e);    //*event/e : 매개변수로 이벤트의 정보('keyup')를 받는다
        console.log(e.code); //입력한 키의 문자열표시
        console.log(e.keyCode); // 입력한 키의 숫자로 표시
        console.log(e.altKey); //[조합키] alr 눌렀는지?
        console.log(e.ctrlKey); //[조합키] crtrl 눌렀는지?
        console.log(e.shiftKey); //[조합키] shift 눌렀는지?
        //4. 글자수
        const length = textarea.value.length;
        //5. 대입
        h1.textContent = `글자 수 :${length}`;
    });

    //333
    const star = document.querySelector('h2');
    star.style.position ='absolute'; // CSS 절대위치

    let x=0; //가로 위치
    let y=0; //세로 위치
    const block = 20 // 이동단위

    //2. 별의 위치를 그려주는 함수 [실행조건 : 1. 최초 1번 2. keydown 할 때 마다]
    console.log(x); console.log(y);
    const print = function(){
        star.style.left=`${x*block}px`
        star.style.top=`${y*block}px`
    };
    print();


    //3. 별의 위치를 이동하는 이벤트
        //3-1 키보드 방향키의 키번호
        const left = 37; const up =38; const right = 39; const down = 40;
        //3-2 body(전체)에서 키를 눌렀을 때 이벤트 발생
        document.body.addEventListener('keydown', function(e){
            console.log(e)
            if(e.keyCode==left){x--} //왼쪽 방향키를 눌렀을 때 x 1감소
            else if(e.keyCode==up){y--}//위쪽 방향키를 눌렀을 때 y 1감소
            else if(e.keyCode==right){x++}//오른쪽 방향키를 눌렀을 때 x 1증가
            else if(e.keyCode==down){y++}//아래쪽 방향키를 눌렀을 때 y 1증가
            else{}

            print();
        });
});