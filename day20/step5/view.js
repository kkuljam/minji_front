view();
console.log('view()함수');
function view(){
    console.log('view()함수');
    // 어디에
    const boardBox = document.querySelector('#boardBox');
    //  무엇을
    const viewArray=JSON.parse(localStorage.getItem('viewArray'));
    const listArray=JSON.parse(localStorage.getItem('listArray'));
 
    let html=`<div> 작성자 : ${listArray[viewArray].writer}</div>
    <div> 제목 : ${listArray[viewArray].title}</div>
    <div> 내용 : ${listArray[viewArray].content.replaceAll('\n' , '<br/>')}</div>
    `;
    boardBox.innerHTML=html; 
    
}


    // 출력
    