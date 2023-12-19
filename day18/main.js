//식별자 : 절대적으로 식별할 수 있는 고정 값+ 중복 없어도 한다 
//=!!!! : 배열의 인덱스는 절대적인 식별자 역할 할 수 없다 
// - 주민등록번호, 사번, 학번, 제품번호, 등등
/*
    1. *분류작업
    2. 중복 최소화하고 코드/식별자 생성
    3. 코드

*/
const 전국=[ 
    {지점코드: 1, 지점명:'센트럴락', 주소:'고잔로108', 
    영화:[
        {영화코드: 1, 영화이름:'서울의봄', 시간테이블:[{관:'1관', 시간:'12:45'},{관:'3관', 시간:'13:45'}]},
        {영화코드: 2, 영화이름:'노량', 시간테이블:[{관:'2관', 시간:'12:45'},{관:'5관', 시간:'13:45'}]},
        {영화코드: 3, 영화이름:'싱글인서울', 시간테이블:[{관:'3관', 시간:'12:45'},{관:'6관', 시간:'13:45'}]},
    ]}, 


    {지점코드: 2, 지점명:'안산고잔', 주소:'고잔로108', 영화:['아쿠아맨','노량',]}, 
    {지점코드: 3, 지점명:'안산롯데시네마', 주소:'고잔로108', 영화:['싱글인서울']}
]


전국영화관출력구역(); // 함수호출
function 전국영화관출력구역(){  //함수선언 [실행조건 : js 가 열렸을 때 최초로 1번 실행]
    //1어디에
    let 전국영화관출력구역 = document.querySelector('#전국영화관출력구역');
    //무엇을
    let html='';
        // = 하나 출력 X, 여러개 출력할때
        for(let i=0; i<전국.length; i++){
            html+=`<span style="margin=10px 0px;" onclick="영화출력(${전국[i].지점코드})" >${전국[i].지점명}</span><br/>`
        }
    //출력
    전국영화관출력구역.innerHTML=html;
}

function 영화출력(선택한지점코드){
    //어디에
    let 영화출력구역 = document.querySelector('#영화출력구역')
    //무엇을
    let html=``;
        //1 선택한 지점 코드 찾기
        for(let i=0; i<전국.length; i++){ 
            //만약에 전국내 지점코드 중에 내가 선택한 지점코드와 같으면
            if(전국[i].지점코드==선택한지점코드){
               //찾았으면 해당 지점의 영화 출력
               for(let j=0; j<전국[i].영화.length; j++){
                      html+=`<span style="margin=10px 0px;" onclick="시간출력(${선택한지점코드},${전국[i].영화[j].영화코드})" >
                                 ${전국[i].영화[j].영화이름}</span><br/>`
               } 
               
            }
        }
    //출력
    영화출력구역.innerHTML=html;
}

function 시간출력(선택한지점코드,선택한영화코드){
    //어디에\
    const  시간출력구역 =  document.querySelector('#시간출력구역')
    //무엇을
    let html=``;
        for(let i=0; i<전국.length; i++){
            if(전국[i].지점코드==선택한지점코드){
                for(let j=0; j<전국[i].영화.length; j++){
                    if(전국[i].영화[j].영화코드==선택한지점코드){
                        for(let t=0; t<전국[i].영화[j].시간테이블.length; t++){
                            console.log(전국[i].영화[j].시간테이블[t].관)
                            html+=`<span style="margin=10px 0px;">
                                 ${전국[i].영화[j].시간테이블[t].시간} ->
                                 ${전국[i].영화[j].시간테이블[t].관}
                                 </span><br/>`
                        }
                    }

                }
            }
        }
        
    //출력
    시간출력구역.innerHTML=html;
    return 0;
}



