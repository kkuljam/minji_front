//1. js가 head에 있으므로 body 생성되기전에 호출이므로 오류발생

//2. js기 head에 있으나 DOMContentLoaded 이벤트를 사용했으므로 오류발생
document.addEventListener('DOMContentLoaded', function(){
    const recte = document.querySelectorAll('.rect');
    for(let i=0; i<recte.length; i++){
        const width = (i+1)*100
        const src=`http://placekitten.com/${width}/250`
        // recte[i].setAttribute('src',src)
        recte[i].src = src; // 표준속성
    }

    //318
    const divs = document.querySelectorAll('body > div')
    console.log(divs)
    for(let i=0; i<divs.length; i++){
        console.log(i, divs[i]);
        const val = i*10;
        divs[i].style.height = '10px'
        divs[i].style.backgroundColor = `rgba(${val}, ${val}, ${val})`
    }

    //320 요소 만들기
    const header = document.createElement('h1'); // h1요소 요소 생성 [1.생성]

        header.textContent = '문서객체 동적으로 생성하기'
        header.setAttribute('date-custom' , '사용자 정의 속성') // html 표준에 없는 속성을 추가
        header.style.color = 'white'
        header.style.backgroundColor = 'black';

    document.body.appendChild(header); //[위치 지정해서 대입한다]
    document.body.innerHTML += `<h1></h1>`;
    document.body.innerHTML += header;
});