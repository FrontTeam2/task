import { RESERVATION_LIST } from "./reservation .js";
console.log(RESERVATION_LIST);

/* 
예약 고객확인하기
*/
var name = document.getElementsByName('user-name')[0];
var phone = document.getElementsByName('user-phone')[0];
var number = document.getElementById('reservation-number');
// function checkNumber(){
//     for(let i = 0; i < RESERVATION_LIST.length; i++){
//         if(name.value == RESERVATION_LIST[i].name && phone.value == RESERVATION_LIST[i].phone){
//             number.innerText = RESERVATION_LIST[i].number;
//         }else{
//             number.innerText = "예약번호가 없습니다.";
//         }
//     }
// }

// document.getElementById('btn').addEventListener('click', checkNumber);

document.getElementById('form').onsubmit = function(){
    for(let i = 0; i < RESERVATION_LIST.length; i++){
        if(name.value === RESERVATION_LIST[i].name && phone.value === RESERVATION_LIST[i].phone){
            number.innerText = RESERVATION_LIST[i].number;
        }else{
            number.innerText = "예약번호가 없습니다.";
        }
    }
    console.log(name.value);
    console.log(phone.value);
    console.log(RESERVATION_LIST[0].name);

    return false;
}