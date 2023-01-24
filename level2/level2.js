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
    let arr = [];
    e.preventDefault();
    const result = RESERVATION_LIST.filter((item) => {
        for (let i = 0; i < item.name.length; i++) {
            if (item.name == name.value) {
                if (item.phone === phone.value) {
                    return item.number;
                } else {
                    return '휴대폰 번호를 확인하세요';
                }
            } else {
                return '일치하는 결과가 없습니다';
            }
        }
    });
    console.log(result);
    resultlist.innerText = result[1];
}

checkbtn.addEventListener('click', cusfilter);
