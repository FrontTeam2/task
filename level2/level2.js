import { RESERVATION_LIST } from "./reservation .js";
console.log(RESERVATION_LIST);

const $userName = document.querySelector("#user_name");
const $userTel = document.querySelector("#user_tel");
const $userFindBtn = document.querySelector("#user_find");
const $reserNum = document.querySelector("#reservation-number");
console.log($reserNum);

function comparisonData(e) {
    e.preventDefault();

    let newArray = [];
    RESERVATION_LIST.filter((item) => {
        if ($userName.value === item.name) {
            if ($userTel.value === item.phone) {
                newArray.push(item);
            }
        }
    });
    console.log(newArray);
    if (!(newArray === "")) {
        // ===를 사용하였을 때, 타입(어떤 타입이 다른지 확인하면 해결 완료)이
        // 다르기 때문에 false를 반환하여 else문이 호출됨 -> number는 빈 배열에 없기 때문에
        // undefined로 error가 생김
        $reserNum.innerText = "예약정보와 일치하지 않습니다.";
    } else {
        $reserNum.innerText = newArray[0].number;
    }
    console.log(newArray);
    // for (let i = 0; i < RESERVATION_LIST.length; i++) {
    //     if (
    //         $userName.value === RESERVATION_LIST[i].name &&
    //         $userTel.value === RESERVATION_LIST[i].phone
    //     ) {
    //         $reserNum.innerText = `${RESERVATION_LIST[i].number}`;
    //         break;
    //     } else {
    //         $reserNum.innerText = "예약정보가 일치하지 않습니다.";
    //     }
    // }
}

$userFindBtn.addEventListener("click", comparisonData);

/* 
예약 고객확인하기
*/
