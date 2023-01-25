import { RESERVATION_LIST } from "./reservation .js";
console.log(RESERVATION_LIST);

/* 
예약 고객확인하기
*/
const name = document.getElementsByName('user-name')[0];
const phone = document.getElementsByName('user-phone')[0];
const number = document.getElementById('reservation-number');
const btn = document.getElementById('btn');

function checkNumber(e){
    e.preventDefault();
    for(let i = 0; i < RESERVATION_LIST.length; i++){
        if(name.value == RESERVATION_LIST[i].name && phone.value == RESERVATION_LIST[i].phone){
            number.innerText = RESERVATION_LIST[i].number;
            break;
        }else{
            number.innerText = "예약번호가 없습니다.";
        }
    }
}
btn.addEventListener('click', checkNumber);
/* <form>안에 <button>태그가 있는 경우에는 <button>클릭시 기본적으로 페이지가 reload된다. <button>의 기본 타입이 submit.
이를 막기 위해서는 아래와 같이 자바스크립트 preventDefault 로 기본동작을 막을 수 있다.

function(e)) {
    e.preventDefault();
}
혹은 

button 태그에 type속성을 button으로 주면 페이지가 새로고침되지 않는다.
<button type="button"></button> */


// const form = document.getElementById('form');

// form.onsubmit = function(){
//     for(let i = 0; i < RESERVATION_LIST.length; i++){
//         if(name.value === RESERVATION_LIST[i].name && phone.value === RESERVATION_LIST[i].phone){
//             number.innerText = RESERVATION_LIST[i].number;
//             break;
//         }else{
//             number.innerText = "예약번호가 없습니다.";
//         }
//     }
//     return false;
// }