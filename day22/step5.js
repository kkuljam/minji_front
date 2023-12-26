document.addEventListener('DOMContentLoaded', () => {
    let counter=0;
    let isConnect = false;

    const h1 = document.querySelector('h1');
    const p = document.querySelector('p');
    const connectButton = document.querySelector('#connect');
    const disconnectButton = document.querySelector('#disconnect');

    const listener = (event) => {// 이벤트를 제거하려면 이벤트 리스너를 변수 또는 상수로 가지고 있어야 한다
        h1.textContent = `클릭 횟수:${counter++}`
    }
    
    connectButton.addEventListener('click', () => {
        if( isConnect === false){
            h1.addEventListener('click', listener) // 해체할 때 이벤트 리스너를 사용함
            p.textContent = '이벤트 연결 상태: 연결'
            isConnect = true;
        }
        
    })

    disconnectButton.addEventListener('click', () => {
        if( isConnect ===true){
            h1.removeEventListener('click', listener)
            p.textContent = '이벤트 연결 상태: 해제'
            isConnect = false;
        }
        
    })

})