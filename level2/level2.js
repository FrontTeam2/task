import { RESERVATION_LIST } from "./reservation .js";
console.log(RESERVATION_LIST);

const $userName = document.querySelector("#user_name");
const $userTel = document.querySelector("#user_tel");
const $userFindBtn = document.querySelector("#user_find");
const $reserNum = document.querySelector("#reservation-number");
console.log($reserNum);

function comparisonData() {
    // 필터를 돌릴 경우, 함수에 맞는 결과가 나와야되는디...

    RESERVATION_LIST.filter((item) => {
        if ($userName.value === item.name && $userTel.value === item.phone) {
            return ($reserNum.innerText = `${item.number}`);
        }

        if ($userName.value !== item.name && $userTel.value !== item.phone) {
            return ($reserNum.innerText = "예약정보가 일치하지 않습니다.");
        }
    });
    // for (let i = 0; i < RESERVATION_LIST.length; i++) {
    //     if (
    //         $userName.value === RESERVATION_LIST[i].name &&
    //         $userTel.value === RESERVATION_LIST[i].phone
    //     ) {
    //         $reserNum.innerText = `${RESERVATION_LIST[i].number}`;
    //         alert($reserNum.innerText);
    //     } else {
    //         alert("예약정보가 일치하지 않습니다.");
    //     }
    // }
}

$userFindBtn.addEventListener("click", comparisonData);

/* 
예약 고객확인하기


*/
