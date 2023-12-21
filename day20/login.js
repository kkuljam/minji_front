
//1. 로그인 함수 : 실행조건 : 로그인버튼을 클릭했을 때
function 로그인(){
    console.log('로그인()함수')
    //1입력
    const mid= document.querySelector('#mid').value;
    const mpw= document.querySelector('#mpw').value;
        console.log(mid);
        console.log(mpw);
    //2처리 로그인이란? 기존에 있던 데이터와 입력받은 데이터 비교

        //기존 가져오기 [회원가입에서 저장된 객체]
    const memberArray = JSON.parse(localStorage.getItem('memberArray'));
        //입력받은 객체 [로그인에서 입력받은 객체]
    const member ={mid : mid, mpw : mpw}
        //비교 [등록.아이디와 로그인.아이디와 같고 비밀번호와 비밀번호가 같으면]
    for(let i=0; i<memberArray.length; i++){
        console.log(memberArray[i]); // 배열내 요소 하나씩 출력
        let oldmember = memberArray[i]; // i번째 회원을 변수에 저장
        if(oldmember.mid == member.mid && oldmember.mpw == member.mpw){
            alert('로그인성공')
            location.href="step1.html"//html에 있는 a태그와 동일, js에서 페이지 전환하는 방법
            return;
        }
    }
    // 모두 확인 후 끝가지 원하는 값을 못찾았을 때 == 반복문이 끝났을 때
    alert('로그인 실패')
    //3출력
}