// 276: Math 객체

const num = Math.random(); // 0이상~1미만 사이 난수
console.log(num);

//0이상 ~10미만 사이의 난수
console.log(num*10);
//0이상 ~50미만 사이의 난수
console.log(num*50);

//0이상 ~51미만 사이의 난수
console.log(num*50+1);

//-5이상 ~5미만 사이의 난수
console.log(num*50-5);

//-25이상 ~25미만 사이의 난수
console.log(num*50-25);

console.log(Math.floor(3.78));  //Math.floor : 소수점 버림
console.log(parseInt(3.14));    //parseInt() : 정수로 변환
console.log( 3.14.toFixed(0));  //반올림

//-5이상 ~5미만 사이의 정수
console.log(Math.floor(num*50-5));
//-25이상 ~25미만 사이의 정수
console.log(Math.floor(num*50-25));

//291 : 객체 속성 여부 확인
const object={
    name:'혼자 공부하는 파이썬',
    price:18000,
    publisher:'한빛미디어'
}
// - 변수/상수 이름 정의할때 주의할점 1:숫자시작X 2:일부특수문자가능 3:띄어쓰기X 4.키워드X

if(object.name !== undefined){console.log('name 속성 존재');}
else(console.log('name 속성 없음'))

if(object.author !== undefined){console.log('author 속성 존재');}
else{console.log('author 속성 없음');}