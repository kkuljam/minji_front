console.log(localStorage.getItem('이름'))
// console(_object.이름); // JS 는 html  새로고침/ 바뀌면 초기화 되므로 호출X
//_object is not defined
const 회원정보목록 = (localStorage.getItem('회원정보목록'));
console.log(회원정보목록);
console.log(회원정보목록[0].이름); //undefined

const 회원정보목록2 = JSON.parse(localStorage.getItem('회원정보목록'));
console.log(회원정보목록2);         // (2)[{...},{...}]
console.log(회원정보목록2[0].이름); //유재석