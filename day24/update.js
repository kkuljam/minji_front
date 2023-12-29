
/*
    수정
        1.[식별자] 무엇을 수정할건지
        2. 기존데이터 호출
        3. 수정처리
*/
document.addEventListener('DOMContentLoaded',function(){수정정보호출()})

//[1] 수정할 게시물의 정보를 출력
function 수정정보호출(){

    //누구를
    const fno =JSON.parse(localStorage.getItem('updatefno'));
    // fno에 해당하는 객체 찾기
    const feedList=JSON.parse(localStorage.getItem('feedList'));
     for(let i =0; i<feedList.length;i++){
        if(fno==feedList[i].fno){
            //3 기존 데이터 대입
            document.querySelector('textarea').value=feedList[i].fcontent.replaceAll('<br/>','\n');
            document.querySelector('#fileImg').src=feedList[i].fimg;
            return;
        }
     }
}

//[2]
let imgByte='';
function 이미지등록( event ){  console.log('이미지등록()');
    let 파일읽기객체 = new FileReader(); // 파일읽기 객체 생성
    파일읽기객체.readAsDataURL( event.target.files[0] );  console.log( 파일읽기객체 );
    파일읽기객체.onload = function(){ 
        document.querySelector('#fileImg').src = 파일읽기객체.result;
        imgByte=파일읽기객체.result; // 이미지바이트를 전역변수에 대입
    }
    
}

//[3] 피드 수정 (피드 수정 버튼을 클릭했을 때)
function 피드수정(){
    // 입력받은 값 호출
    const fcontent = document.querySelector('textarea').value;
    // 수정할 게시물/피드 찾기
    const fno =JSON.parse(localStorage.getItem('updatefno'));
    const feedList=JSON.parse(localStorage.getItem('feedList'));
        for(let i=0; i<feedList.length; i++){
            if(fno == feedList[i].fno){
                feedList[i].fcontent = fcontent.replaceAll('\n','<br/>');// 찾은 객체에 새로 입력받은 값으로 대입
                // 만액에 새로운 첨부이미지 없으면 기존데이터/ 있으면 새로운첨부이미지
                feedList[i].fimg = imgByte == ''? feedList[i].fimg : imgByte;
                localStorage.setItem('feedList',JSON.stringify(feedList));
                alert('수정 성공')
                location.href="index.html";
            }
        }
}