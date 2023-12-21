글목록();
console.log('글목록()함수')
function 글목록(){
    console.log('글목록()함수')
    // 어디에
    const list = document.querySelector('tbody');
    console.log('list')
    // 무엇을
    let listArray= JSON.parse(localStorage.getItem('listArray'));
    let html=``;
        for(let i=0; i<listArray.length;i++){
            html+=`<tr onclick="view(${i})"> 
                        <th>${i+1}</th> 
                        <th>${listArray[i].title}</th> 
                        <th>${listArray[i].writer}</th>
                    </tr>`;
        }
    // 출력
    console.log('list')
    list.innerHTML=html;
}

function view(index){
    console.log('view()함수')
    const list={list:index}
    localStorage.setItem('viewArray',JSON.stringify(list));
    location.href="view.html" 
}
