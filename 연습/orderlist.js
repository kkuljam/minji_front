//주문내역 스크립트 작성_김민지

/*      
        카트     :[{메뉴번호,개수}]
        주문내역 :[{주문번호,메뉴번호,주문날짜,주문상태, 총가격, 개수}]
*/

/*
    주문번호 : 카트 인덱스 번호
    메뉴번호 : 카트 객체의 번호 받기
    주문날짜 : 날짜 찾아보기
    개수 : 카트 객체의 개수 받기
    가격 : 카트 객체의 메뉴번호를 받아서 메뉴 번호의 해당 가격 * 카트 객체의 개수
*/

// let cartArray=[{pno:2,count:4},{pno:3,count:4},{pno:1,count:2},{pno:3,count:1}] //카트에 담긴 배열 가정
// let productArray=[
//     {pno:1, pname:'몬스터와퍼', pprice:9500, pimg:'몬스터와퍼.png', cno:3},
//     {pno:2, pname:'블랙바비큐와퍼', pprice:10500, pimg:'블랙바비큐와퍼.png', cno:2},
//     {pno:3, pname:'블랙바비큐콰트로치즈와퍼', pprice:13500, pimg:'블랙바비큐콰트로치즈와퍼.png', cno:1},
// ]
// let cart=[{pno:2,count:4},{pno:3,count:4}]
// cartArray.push(cart);
// let cartArray = JSON.parse(localStorage.getItem('cartArray'));
// let productArray = JSON.parse(localStorage.getItem('productArray'));

// const orderArray=[] //주문내역 페이지에 넘어올 카트 배열을 저장할 배열\
let orderArray = JSON.parse(localStorage.getItem('orderArray')); //localStorage에 orderArray 배열 만듦
if( orderArray == null ){ orderArray = [] };

//--------함수 1--------------------
function order(){// 주문하기 눌렀을 때 실행될 함수
    let cartArray = JSON.parse(localStorage.getItem('cartArray')); // 로컬에 있는 카트 배열 불러옴
    let list = orderArray.length < 1 ?  1 : orderArray[orderArray.length-1].list+1 // order 배열의 길이가 1보다 작으면 1 아니면 마지막 list 번호에 +1
    for(let i=0; i<cartArray.length;i++){
        //cartArray 있는 배열의 객체마다 리스트 번호를 추가
        cartArray[i].list=list
        let cart=cartArray[i]
        //객체 개별로 orderArray에 저장
      
        orderArray.push(cart) //order 배열에 추가
        localStorage.setItem('orderArray',JSON.stringify(orderArray)); // 로컬 배열에도 추가
    }
    console.log(orderArray);
    
    cartArray=[] // orderArray push가 끝나면 cartArray는 초기화
    localStorage.setItem('cartArray',JSON.stringify(cartArray)); // 로컬에도 초기화 저장 
    order내역();
 }

//--------함수 2------------------
function order내역(){
    let productArray = JSON.parse(localStorage.getItem('productArray')); //로컬에서 불러오기
    let orderArray = JSON.parse(localStorage.getItem('orderArray'));

    const order내역창 = document.querySelector('tbody') //어디에
    let html=``;
    
    for(let i=0; i<orderArray.length;i++){ // order 배열에 있는거 다 출력
        for(let j=0; j<productArray.length; j++){ // 제품 배열 반복
            if(orderArray[i].pno==productArray[j].pno){ // order 배열의 pno과 제품 pno 일치 찾기
                html+=` <tr>
                            <th>${orderArray[i].list}</th> 
                            <th>${productArray[j].pname}</th>
                            <th>${new Date().toLocaleDateString()}</th> 
                            <th>
                                <select>
                                    <option>결제완료</option>
                                    <option>조리중</option>
                                    <option>픽업완료</option>
                                </select>
                            </th>
                            <th>${productArray[j].pprice*orderArray[i].count}</th>
                            <th>${orderArray[i].count}</th>
                         </tr>`
            }
        }
    }
    order내역창.innerHTML=html; 
  
}
