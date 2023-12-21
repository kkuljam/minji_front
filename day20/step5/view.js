view();
console.log('view()함수');
function view(){
    console.log('view()함수');
    // 어디에
    const boardBox = document.querySelector('#boardBox');
    //  무엇을
    const viewArray=JSON.parse(localStorage.getItem('viewArray'));
    const listArray=JSON.parse(localStorage.getItem('listArray'));
         console.log(viewArray);
         console.log(listArray);
    for(let i=0; i<listArray.length;i++){
        if(viewArray[i].list==listArray[i]){
            let html=`<div> 작성자 : ${listArray[i].writer} 조회수 : ${boardArray[index].조회수}</div>
            <div> 제목 : ${listArray[i].title}</div>
            <div> 내용 : ${listArray[i].content.replaceAll('\n' , '<br/>')}</div>
            `;
            boardBox.innerHTML=html;
        }
    }
}


    // 출력
    