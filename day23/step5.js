// 문서 객체를 가져옴
document.addEventListener('DOMContentLoaded',function(){
    const input= document.querySelector('#todo');
    const todoList = document.querySelector('#todo-list');
    const addButton = document.querySelector('#add-button');

    // 변수 선언
    let keyCount = 0 // 이후에 removeTodo() 함수에서 문서 객체를 쉽게 제거하기 위한 용도로 만든 변수

    // 함수선언
    const addTodo= function(){
        // 입력 양식에 내용이 없으면 추가하지 않음
        if(input.value.trim()===''){// trim : 앞뒤쪽 공백 제거 함수
            alert('할 일을 입력해주세요.');
            return;
        }

        // 문서 객체를 설정
        const item = document.createElement('div');
        const checkbox = document.createElement('input');
        const text =document.createElement('span');
        const button= document.createElement('button');

        // 문서 객체를 식별할 키를 생성합니다.
        const key = keyCount
        console.log(key)
        keyCount += 1 // 이후에 removeTodo() 함수에서 문서 객체를 쉽게 제거하기 위한 용도로 만든 변수

        //item 객체를 조작하고 주가합니다.
        item.setAttribute('data-key',key);
        item.appendChild(checkbox);
        item.appendChild(text);
        item.appendChild(button);
        todoList.appendChild(item);

        //checkbox 객체를 조작합니다.
        checkbox.type ='checkbox'
        checkbox.addEventListener('change',function(event){
            item.style.textDecoration=event.target.checked ? 'line-through' : '' // 체크박스 클릭하면 선 그어줌
        })

        // text 객체를 조작
        text.textContent=input.value; // span 글자 형태 구성

        // button 객체를 조작
        button.textContent='제거하기'
        button.addEventListener('click',function(){
            removeTodo(key);
        })

        // 입력 양식의 내용을 비움
        input.value=''
    }

    const removeTodo=function(key){
        const item = document.querySelector(`[data-key="${key}"]`)
        todoList.removeChild(item)
    }

    // 이벤트 연결
    addButton.addEventListener('click',addTodo)
    input.addEventListener('keyup',function(event){
        const ENTER= 13
        if(event.keycode===ENTER){
            addTodo()
        }
    });
});