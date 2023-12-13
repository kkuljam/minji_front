

let output=``;
/*
//문제1
const value = Number(prompt('문제1 수 입력'));
for(let i = 1; i<=value; i++){// -i는 1부터 입력받은 수까지 1씩 증가
    output+=`*`
}//for end
console.log(output);

//문제2
output=``;
const value2 = Number(prompt('문제2 수 입력'));
for(let i =1; i<=value2; i++){
    // -만약 i가 3배수이면 줄바꿈 처리
    if(i%3==0){output+=`\n`}
}//for end
console.log(output);

//문제3
output=``;
const line3 = Number(prompt('문제3 수 입력')); 
for(let i=1; i<=line3; i++ ){
    for(let s=1; s<=i;s++){
        output+=`*`;
    }
    output+=`\n`
}
console.log(output);

//문제4
output=``;
const line4 = Number(prompt('문제4 수 입력')); 
for(let i=1; i<=line4; i++){
    for(let s=1; s<=line4-i+1; s++){
        output+=`*`;
    }
    output+=`\n`
}
console.log(output);

//문제5
output=``;
const line5 = Number(prompt('문제5 수 입력')); 
for(let i=1; i<=line5;i++){
    for(let t=1; t<=line5-i; t++){
        output+=' ';
    }
    for(let s=1; s<=i;s++){
        output+=`*`;
    }
    output+=`\n`
}
console.log(output);

//문제6
output=``;
const line6 = Number(prompt('문제6 수 입력')); 
for(let i=1; i<=line6;i++){
    for(let t=1; t<=i-1; t++){
        output+=' ';
    }
    for(let s=1; s<=line6-i+1; s++){
        output+=`*`;
    }
   
    output+=`\n`
}
console.log(output);

//문제7
output=``;
const line7 = Number(prompt('문제7 수 입력')); 
for(let i=1; i<=line7;i++){
    for(let t=1; t<=line7-i; t++){
        output+=' ';
    }
    for(let s=1; s<=i*2-1;s++){
        output+=`*`;
    }
    output+=`\n`
}
console.log(output);

//문제8
output=``;
const line8 = Number(prompt('문제8 수 입력')); 
for(let i=line8; i>=1;i--){
    for(let t=1; t<=line8-i; t++){
        output+=' ';
    }
    for(let s=1; s<=i*2-1; s++){
        output+=`*`;
    }
   
    output+=`\n`
}
console.log(output);

//문제9
output=``;
const line9 = Number(prompt('문제9 수 입력'))/2;
for(let i=1; i<=line9;i++){
    for(let t=1; t<=line9-i; t++){
        output+=' ';
    }
    for(let s=1; s<=i*2-1;s++){
        output+=`*`;
    }
    output+=`\n`
}
for(let i=line9; i>=1;i--){
    for(let t=1; t<=line9-i; t++){
        output+=' ';
    }
    for(let s=1; s<=i*2-1; s++){
        output+=`*`;
    }
   
    output+=`\n`
}
console.log(output);


//문제 10
output=``;
const line10 = Number(prompt('문제10 수 입력'));
//[행]      <tr>
for(let r=1; r<=line10; r++){
    //[열]      <td>
    for(let c =1 ; c<=line10; c++){
        //[조건1 = 행과 열이 같으면]
        if(r==c){output +='*';}
        //[조건2 = 행과 열을 더한 값이 입력받은 값+1]
        else if(r+c==line10+1){output +='*'}
        //아니면 공백
        else{output+=' '}
    }
    output+=`\n`
}
console.log(output);

*/
function 문제10(){
    const line = Number(document.querySelector('#line10').value)
    let html=``;
        for(let r=1; r<=line; r++){
            html += `<tr>`;

            for(let c=1; c<=line; c++){
                if(c==r){html += `<td>★</td>`}
                else if(c+r==line+1){html += `<td>★</td>`}
                else{html += `<td>☆</td>`}
            }
            html +=`</tr>`;
        }
    const tableObj = document.querySelector('table');
    tableObj.innerHTML=html;
    console.log(tableObj)
}

function 문제9(){// f s
    //입력
    const line9 = Number(document.querySelector('#line9').value)/2
    //처리
    let html=``;
        //행
        for(let i=1; i<=line9;i++){
            html += `<tr>`;
            //열
            for(let t=1; t<=(line9+1)-i; t++){
                html += `<td>  </td>`;
            }
            for(let s=1; s<=i*2-1;s++){
                html += `<td>*</td>`;
            }
            html +=`</tr>`;
        }
        //행
        for(let i=line9+1; i>=1;i--){
            html += `<tr>`;
            //열
            for(let t=1; t<=(line9+1)-i; t++){
                html += `<td>  </td>`;
            }
            for(let s=1; s<=i*2-2; s++){
                html += `<td>*</td>`;
            }
            html +=`</tr>`;
        }
    //처리    
    const tableObj = document.querySelector('#table9');
    tableObj.innerHTML=html;
    console.log(tableObj)
}
/*
*     *
 *   *
  * *
   *
  * *
 *   *
*     *


   *
  * *
 *   *
*     *
*/
/*
// 문제1) 입력받은 수 만큼 * 출력 
// 문제2) 입력받은 수 만큼 * 출력 [  - 3줄(3배수)마다 줄바꿈 ]
// 문제3) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
*
**         
***      
****   
*****
// 문제4) 입력받은 줄 수 만큼 * 출력 [ ex) 5 ]
*****
****
***
**
*
// 문제5) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
    *
   **
  ***
 ****
*****
// 문제6) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
*****
 ****
  ***
   **
    *
// 문제7) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
    *
   ***
  *****
 *******
*********
// 문제8) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
*********
 *******
  *****
   ***
    *
// 문제9) 입력받은 줄 수 만큼 * 출력  [ ex) 10 ]
    *
   ***
  *****
 *******
*********
*********
 *******
  *****
   ***
    *
// 문제10) 입력받은 줄 수 만큼 * 출력  [ ex) 7 ]
*     *
 *   *
  * *
   *
  * *
 *   *
*     *
*/