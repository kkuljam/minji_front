
// 1. 등록함수 :실행조건 : 등록버튼을 클릭했을 때
function 등록(){
    console.log('등록()함수')
    //1입력
   const mid= document.querySelector('#mid').value;
   const mpw= document.querySelector('#mpw').value;
        console.log(mid);
        console.log(mpw);
    //2출력
        //{아이디와 비밀번호} 회원으로 객체화
    const member ={
        mid : mid,
        mpw : mpw
    }
        //2. 객체를 배열에 저장. 전역변수가 아닌 브라우저에 저장
        //localStorage 에 입력받은 객체를 저장한다
    let memberArray =JSON.parse(localStorage.getItem('memberArray')); // 기존 배열 호출
    console.log(memberArray);
        //만약에 기존배열을 호출할때 없으면 = null 있으면= 배열
    if(memberArray==null){memberArray=[]}//배열을 새로 만들어준다
    memberArray.push(member); // 방금 가입된 회원객체 배열에 추가
    localStorage.setItem('memberArray',JSON.stringify(memberArray));
    //3출력(X)
    alert('회원가입 성공');
}
