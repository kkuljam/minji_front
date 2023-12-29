/*
    -게시물(상위)
    -댓글(하위)
        1. 관계파악
        2. 데이터
            게시물:대표이미지, 등록날짜, 내용, 좋아요 수 , 싫어요 수, 비밀번호(삭제/수정시)
            댓글: 내용, 등록날짜, 비밀번호(삭제시 사용)
        3. 식별자
            1. 인덱스[인덱스 변화 있을 경우 절대적인 식별자 역할 힘듬. 임시용은 가능]
            2. 식별자 만들기 [1. 자동번호(1씩증가) 2.데이터조합 등등 ] 중복이 없어야힌다

        4. 관계데이터 대입 [하위에서 상위의 식별을 가지고 있어야한다]
            게시물 : +게시물번호[식별]
            댓글 : +댓글번호[식별] ,참조
*/

let feedList = [
    {
        fno: 1,
        fimg : '챔피언스.jpg',
        fdate :'2023-12-29',
        fcontent : `✨챔피언스 스킨 테마가 더욱더 발전한 모습으로 돌아왔습니다.✨ <br/>
                    신규 한정판 밴달과 근접 무기로 2023 챔피언스를 기념해 보세요. <br/>
                    8월 4일부터 게임 내 상점에서 구매하실 수 있습니다. `,
        fgood : 3,
        fbad : 1,
        fpwd : '1234',
    },
    {
        fno: 2,
        fimg : '챔피언스.jpg',
        fdate :'2023-12-29',
        fcontent : `신규 한정판 밴달과 근접 무기로 2023 챔피언스를 기념해 보세요. <br/>
                    8월 4일부터 게임 내 상점에서 구매하실 수 있습니다. `,
        fgood : 3,
        fbad : 1,
        fpwd : '12345',
    },
    {
        fno: 3,
        fimg : '챔피언스.jpg',
        fdate :'2023-12-29',
        fcontent : `8월 4일부터 게임 내 상점에서 구매하실 수 있습니다. `,
        fgood : 3,
        fbad : 1,
        fpwd : '123456',
    }

];

let replyList = [
    {
        rno:1,
        fno:1, //참조할 게시물 번호 = 상위의 식별번호 - 1번 게시글
        rdate : '2023-12-30',
        rcontent: '댓글댓글',
        rpwd: '1234',
    },
    {
        rno:2,
        fno:2, //참조할 게시물 번호 = 상위의 식별번호 - 2번 게시글
        rdate : '2023-12-30',
        rcontent: '두번째 게시글',
        rpwd: '12345',
    },
    {
        rno:3,
        fno:1, //참조할 게시물 번호 = 상위의 식별번호 - 1번 게시글
        rdate : '2023-12-30',
        rcontent: '첫게시글 두번째 댓글',
        rpwd: '123456',
    },
];

//------------------------------------------------

//[*]HTML 모드 로드 되었을 때
document.addEventListener('DOMContentLoaded',function(){
    모든피드호출();
})

//[1] 모든 피드(게시글)출력함수 (1.js 열렸을 때 2. 등록, 삭제, 댓글등록/삭제)
function 모든피드호출(){

    // 샘플 대신에 localStorage 에 있는 데이터 사용 
    let feedList= JSON.parse(localStorage.getItem('feedList'));

    //어디에
    const feedBox = document.querySelector('#feedBox');
    //무엇을
    let html=``
        // 모든 피드 출력[피드 목록/배열에 있는 객체를 하나씩 호출]
        for(let i=0; i<feedList.length;i++){

            //배열내 하나의 게시물/피드 추출
            const feed=feedList[i]

            html+=`<div class="feed">
                        <div><img src="${feed.fimg}"/></div>
                        <div class="contentBox">
                            <div class="date">${feed.fdate}</div>
                            <div class="content">
                            ${feed.fcontent} 
                            </div>
                        </div> 
                        <div class="btnBox"> 
                            <div> 
                                <button onclick="수정페이지이동(${feed.fno})" type="button">수정</button>
                                <button onclick="피드삭제(${feed.fno})" type="button">삭제</button>
                                <button type="button">답글</button>
                            </div>
                            <div>
                                <span>👍 ${feed.fgood}</span>
                                <span>👎 ${feed.fbad}</span>
                            </div>
                        </div>
                        <div class="replyBox"> 
                           ${댓글출력(feed.fno)}
                        </div> 
                    </div>`
        }

    //출력
    feedBox.innerHTML=html;
}

//[2] 피드/게시물에 해당하는 모든 댓글 모두 출력하는 함수 정의 (1. 피드/게시물 출력시 같이)
function 댓글출력(fno){//매개변수 : 출력할 게시물 번호
    let html=``;
    //
    for( let i=0 ; i<replyList.length; i++){
        if(fno==replyList[i].fno){// 댓글목록에서 동일한 fno찾기
            html+=` <div class="reply">
                        <div>${replyList[i].rcontent}</div>
                        <div>
                            <span class="date">${replyList[i].rdate}</span>
                            <button type="button">X</button>
                        </div>
                    </div>`

        }
    }
    return html;
}

//[3] 삭제함수. (1. 삭제버튼을 클릭했을 때.)
function 피드삭제(fno){// 매개변수 : 삭제할 fno
    
    if( 패스워드확인(fno) ){return;}

    const feedList=JSON.parse(localStorage.getItem('feedList'));
    for(let i=0; i<feedList.length;i++){
        //2. 찾은 객체의 fpwd 와 입력받은 패스워드 일치여부
        if(feedList[i].fno == fno){
            feedList.splice(i,1); // 해당 게시물 삭제
            alert('삭제 완료');
            //!!! : 수정된 feedList 를 localStorage에도 적용
            localStorage.setItem('feedList',JSON.stringify(feedList));
            모든피드호출();
            //!!! 삭제는 1번
            return; //함수종료 [원하는 코드 실행 했으므로 종료] 
        }
    }
  
}
// [4] 수정페이지로 이동함수. ( 1.수정버튼을 클릭했을때.)
function 수정페이지이동( fno ){ // 매개변수 : 수정할 pno

    if( 패스워드확인(fno) ){ return; }

    // 페이지가 바뀌면 변수가 사라지니까. localStorage에 수정할 게시물번호를 보관하기.
    localStorage.setItem( 'updatefno' , JSON.stringify( fno ) ); 
    location.href="update.html";
} // f end 

// [5] 패스워드 검사 함수 ( 1.삭제/수정 했을때 )
function 패스워드확인( fno ){
    // 1. 확인패스워드 입력
    const pwdConfirm = prompt('피드의 비밀번호 확인');
    // 2. 패스워드 일치 여부 확인 
        // 1. 피드목록에서 fno에 객체/피드 찾기.
    const feedList = JSON.parse( localStorage.getItem('feedList') );
    for( let i = 0 ; i<feedList.length ; i++ ){
        // 2. 찾은 객체의 fpwd 와 입력받은 패스워드 일치여부
        if( feedList[i].fno == fno 
                && feedList[i].fpwd == pwdConfirm ){
            return false; // 패스워드 일치하면 false
        }
    };
    alert('비밀번호가 일치하지 않습니다.');
    return true; // 패스워드가 일치하지 않으면 true
} // f end 
