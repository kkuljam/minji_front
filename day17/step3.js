    
const boardArray=[ ]
//배열을 상수에 선언 // 그 배열은 '작성자/비밀번호/제목/내용' 을 하나의 문자열로 하나씩 저장 

// 1.[C] 글쓰기 [글쓰기 버튼을 클릭했을 때]
function 글쓰기(){ // 매개변수 :X 리턴값:X
   //1. HTML로 부터 입력받은 값 가져오기
   const writer=document.querySelector('#writer').value; // 설정된 id에 입력된 값을 js에 가져온다
   const password=document.querySelector('#password').value;
   const title=document.querySelector('#title').value;
   const content=document.querySelector('#content').value;

   //**!!! 직접 / 구분해서 하나로 만들었는데 이제 객체로 하나로 만들기
   const board = { 작성자 : writer, 비밀번호:password, 제목:title, 내용:content };
   //객체내 속성 추가
   board.조회수 = 0; // 객체내 없는 key  호출할 때 key 생성.// 이제 등록했으니까 조회수는 0부터 시작

   boardArray.push(board); console.log(boardArray) // 그 문자열을 배열에 저장한다.
   //3. 배열에 HTML에 출력하기
   모든글출력();
   document.querySelector('#writer').value = ``; //설정된 id에 입력된 값을 초기화한다.
   document.querySelector('#password').value= ``;
   document.querySelector('#title').value= ``;
   document.querySelector('#content').value= ``;
   return;
}
// 2-1.[R] 모든글출력 [1. js가 열렸을 때 2.글쓰기/글수정/글삭제 처리 할때마다 새로고침]
function 모든글출력(){// 매개변수 :X 리턴값:X // 배열에 있는 데이터를 HTML화 해서 HTML출력하는 함수
   const tableBody = document.querySelector('table>tbody'); console.log(tableBody);
   let html = ``; //HTML문법 저장할 변수 선언
   for(let i=0; i<boardArray.length; i++){ //배열에 있는 모든 요소를 처음부터 끝까지 반복
       html +=`<tr onclick="개별글출력(${i})"> 
                   <th>${i}</th> 
                   <th>${boardArray[i].제목}</th> 
                   <th>${boardArray[i].작성자}</th>
                   <th>${boardArray[i].조회수}</th>
               </tr>
               `;
   }
   tableBody.innerHTML = html
   return;
}
// 2-2.[R] 개별글출력 [해당 글을 선택했을 때]
function 개별글출력(index){// 매개변수 :(대상)보고자하는 식별번호 리턴값:X
    //조회수 증가
    boardArray[index].조회수 +=1; 모든글출력();

   const boardBox = document.querySelector('#boardBox');
   let html = `<div> 작성자 : ${boardArray[index].작성자} 조회수 : ${boardArray[index].조회수}</div>
   <div> 제목 : ${boardArray[index].제목}</div>
   <div> 내용 : ${boardArray[index].내용.replaceAll('\n' , '<br/>')}</div>
   <input onclick="글삭제(${index})" type = "button" value="삭제"/>
   <input onclick="글수정(${index})" type = "button" value="수정"/>
   `;
   // 클릭하면 해당 함수로 이동하게 onclick 사용
   boardBox.innerHTML=html;
   return;
}
// 3.[U] 글수정 [ 글수정 버튼을 클릭했을 때]
function 글수정(index){// 매개변수 :(대상)수정할 식별번호 리턴값:X
   console.log(index);

   //1. 검증[유효성검사] - 패스워드 입력받아... 해당 게시물의 패스워드와 동일하면
   const checkPw=prompt('비밀번호');
   if(checkPw== boardArray[index].비밀번호){// 만약 입력받은 패스워드와 게시물의 패스워드가 일치하면
      // 수정할 값들을 입력받아
        const updateTitle = prompt('수정할 제목');
        const updateContent = prompt('수정할 내용');
        
        boardArray[index].제목 = updateTitle;
        boardArray[index].내용 = updateContent;
       alert('성공')
       //새로고침
       모든글출력();
       개별글출력(index);
   } else{
       alert('패스워드가 다릅니다. 수정 불가')
   }
   return;
}
// 4.[D] 글삭제 [글삭제 버튼을 클릭했을 때]
function 글삭제(index){// 매개변수 :(대상)삭제할 식별번호  리턴값:X
   console.log(index)
   const check = prompt('비밀번호');
   if( check == boardArray[index].비밀번호){
       boardArray.splice(index,1)
       alert('삭제 성공')
       모든글출력(); 
       document.querySelector('#boardBox').innerHTML=``;
   }else{alert('패스워드가 다릅니다. 삭제불가')}
   return;
}
