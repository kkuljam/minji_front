

//0. 전역변수 [배열]
    //- 속성[상태]마다 배열을 하나씩 만들면 배열이 너무 많아져. 관리 힘들어
    // 객체지향 나오기전... 여러속성들을 하나의 배열에서 관리하고 싶다\
        //1. boardArray = [] 
            //- 하나의 서로다른 유형 4가지 데이터 저장하면 인덱스 관리 힘들다
        //2. boardArray = ["작성자/비밀번호/제목/내용" , "작성자/비밀번호/제목/내용"]
            // - 여러 유형의 4가지 데이터를 하나의 문자열로 묶음 *단 구분이 있어야함 [구분 문자는 개발자 마음]
            // - 입력 데이터에는 구분 문자가 포함되면 안된다.
    
    
const boardArray=[]

const writerArray=[]
const passwordArray=[]
const titleArray=[]
const contentArray=[]

// 1.[C] 글쓰기 [글쓰기 버튼을 클릭했을 때]
function 글쓰기(){ // 매개변수 :X 리턴값:X
    //1. HTML로 부터 입력받은 값 가져오기
    const writer=document.querySelector('#writer').value;
    const password=document.querySelector('#password').value;
    const title=document.querySelector('#title').value;
    const content=document.querySelector('#content').value;

    //2. 배열에 저장하기
    writerArray.push(writer); console.log(writerArray);
    passwordArray.push(password); console.log(passwordArray);
    titleArray.push(title); console.log(titleArray);
    contentArray.push(content); console.log(contentArray);
}
// 2-1.[R] 모든글출력 [1. js가 열렸을 때 2.글쓰기/글수정/글삭제 처리 할때마다 새로고침]
function 모든글출력(){// 매개변수 :X 리턴값:X

}
// 2-2.[R] 개별글출력 [해당 글을 선택했을 때]
function 개별글출력(index){// 매개변수 :(대상)보고자하는 식별번호 리턴값:X
    return;
}
// 3.[U] 글수정 [ 글수정 버튼을 클릭했을 때]
function 글수정(index){// 매개변수 :(대상)수정할 식별번호 리턴값:X
    return;
}
// 4.[D] 글삭제 [글삭제 버튼을 클릭했을 때]
function 글삭제(index){// 매개변수 :(대상)삭제할 식별번호  리턴값:X
    return;
}

/* 
    함수 만들 때 고민할점
        1. 언제 실행하는 함수인지?
        2. 함수 안으로 넣을 매개변수?
        3. 함수 밖으로 반환할 값?
        4. 무엇을 실행 하는지?
*/