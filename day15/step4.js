const 날짜목록 = []
const 항목= []
const 금액 = []


//1. 등록 함수: 매개변수, 리턴X
function 등록함수(){
    console.log('등록함수()실행');
    //1. 입력
    const day = document.querySelector('#day').value;
    const content = document.querySelector('#content').value;
    const pay = document.querySelector('#pay').value;

    날짜목록.push(day)
    항목.push(content)
    금액.push(pay)

    document.querySelector('#content, #day, #pay').value=''; alert('등록 성공')
    출력함수()
}
//4. 출력 함수
function 출력함수(){
    const tbody=document.querySelector('#tbody');
    let html = '';
    for(let i=0; i<날짜목록.length;i++){
        html +=` <tr>
                    <td>${날짜목록[i]}</td>
                    <td>${항목[i]}</td>
                    <td>${금액[i]}원</td>
                    <td><input onclick="삭제함수(${i})" type="button" value="삭제"/></td>
                </tr>`
    }
    합계()
    tbody.innerHTML = html;
}

//3. 삭제 함수: 매개변수=변경할인덱스, 리턴X
function 삭제함수(삭제할인덱스){
    console.log('삭제함수()실행' + 삭제할인덱스);
    //1. 입력 X
    //2. 처리 
    if (confirm('삭제할까요?')) {
        alert('삭제 성공');
        날짜목록.splice(삭제할인덱스,1);
        항목.splice(삭제할인덱스,1);
        금액.splice(삭제할인덱스,1);
    }
    출력함수()
}
function 합계(){
    let html = Number();
    for(let i=0; i<금액.length; i++){
        html += 금액[i]*1
    }
    document.querySelector('#total').innerHTML=html
}
