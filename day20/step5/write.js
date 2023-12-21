
function 글쓰기(){
    console.log('글쓰기(함수');
    //어디에
    const writer = document.querySelector('#writer').value;
    const password = document.querySelector('#password').value;
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;
        console.log(writer)
    //무엇을
    const list = {
        writer:writer,
        password:password,
        title:title,
        content:content,
    }
    let listArray = JSON.parse(localStorage.getItem('listArray'));
    console.log(listArray);
    if(listArray==null){listArray=[]}
    listArray.push(list);
    localStorage.setItem('listArray',JSON.stringify(listArray));
    //출력
    alert('등록성공');
    location.href="list.html"
}