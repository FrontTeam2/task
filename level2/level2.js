import { RESERVATION_LIST } from './reservation .js';
console.log(RESERVATION_LIST);

/* 
예약 고객확인하기


*/
const name = document.querySelector('form > p:nth-child(1) > input');
const phone = document.querySelector('form > p:nth-child(2) > input');
const resultlist = document.getElementById('reservation-number');
const checkbtn = document.querySelector('form > button');

function cusfilter(e) {
    e.preventDefault();
    const result = RESERVATION_LIST.filter(function (item) {
        // for (let i = 0; i < item.name.length; i++) {
        if (item.name == name.value) {
            if (item.phone == phone.value) {
                return item;
            }
            // }
        }
    });
    console.log(result);
    if (result == '') {
        resultlist.innerText = `일치하는 정보가 없음`;
    } else {
        resultlist.innerText = result[0].number;
    }
}

checkbtn.addEventListener('click', cusfilter);
