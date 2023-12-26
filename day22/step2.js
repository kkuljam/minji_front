//HTML를 모두 읽었을 때. 해당 함수 실행
document.addEventListener('DOMContentLoaded' , function(){

    //2.
    const header = document.querySelector('h1');
    // document.querySelector('h1');            해당 요소를 객체로 호출
    // document.querySelector('h1').value;      해당 요소의 입력된 값 호출 
        // [* 단 Value 속성 가지는 요소만 가능] : input, select, textarea 등 / div, h1, span [x]
    // document.querySelector('h1').innerHTML;  해당 요소 사이의 HTML를 텍스트 호출 [HTML 코드 자체]


    header.textContent = 'HEADERS';         //DOM객체명.textContent : 텍스트 호출 [ HTML 렌더링 결과물]
    header.style.color= 'white';            //DOM객체명.style.css속서명 = '값';
    header.style.backgroundColor= 'black';
    header.style.padding='10px'
        // css : background-color vs js: backgroundColor : 카멜표기법

    //3. 313
    //.querySelectorAll() 를 이용한 h1 dom객체를 여러개/ 배열로 반환
    const headers = document.querySelectorAll('h1'); console.log(headers);
    for(let i=0 ; i<header.length ; i++){
        //i는 0부터 배열의 길이만큼 1씩증가 반복

        //[조건] ----- 강사님 코드 복붙 할거임
        headers[i].textContent = 'HEADERS';
        headers[i].style.color= 'white';            //DOM객체명.style.css속서명 = '값';
        headers[i].style.backgroundColor= 'black';
        headers[i].style.padding='10px'

    }

    //4. 314
    const a = document.querySelector('#a');
    const b = document.querySelector('#b');

    a.textContent = `<h1>textContent</h1>`;     //문자 그대로
    b.innerHTML = `<h1>innerHTML</h1>`;         //문자 HTML 형식
});

