/* 
레시피 재료 추가하기

*/

const form = document.getElementById('ingredient-form');
const prd = form.querySelector('p:nth-child(1) > input');
const weight = form.querySelector('p:nth-child(2) > input');
const btn = form.querySelector('button');
const table = document.querySelector('table');

const ul = document.getElementById('ingredient-list');
const finalbtn = document.getElementById('submit_button');

let finallist = []; // 제출전 마지막 데이터 담을 배열.
// 만든 이유...? 함수 내에서 사용된 변수는 return을 하지 않을 경우 해당 변수는 종료 즉시 사라짐.
// 그래서 재료명과 리스트들을 관리하기 위해서는 전역에서 사용할 변수를 만들어주고 함수 내에서 변화된 변수의 값을
// 반영시키기 위해..

function finallistsave(ing, wei) {
    const finallistObj = {
        ingredient: ing,
        weight: wei,
    };
    finallist.push(finallistObj);
    //기존에 있던 값들을 수정 할때는 어떻게 초기화 해줘야할까?
    //1. 삭제할때 (완료)
    //2. 수정할때 (완료)
    // 삭제 및 수정을 할때 동일한 재료명과 동일한 무게가 2개 (a,b)이상 있을시 a,b 초기화가 되는 경우가 발생 =>
    //  ex)  수박 20개(a)
    //      수박 20개 (b)
    //  a만 10개로 수정했을때 화면상에는 a만 수박 10개로 수정 되어 있지만 finallist에서는 b도 동일하게 10개로 수정됨.
    //  이럴때 각 배열에 고유번호를 부여해서 고유번호까지 일치하는 조건을 달아줘서 관리하면 될듯..
    //  일단 테이블에는 입고날짜 및 고유번호가 없기때문에 작성은 안하는걸로^
}

function deleteing(event) {
    const tr = event.target.parentElement.parentElement; // td1 td2 td3의 부모인 tr
    const ing = tr.querySelector('td:nth-child(1)> input');
    const wei = tr.querySelector('td:nth-child(2) > input');

    // 최종리스트 내용과 삭제할 목록이 일치하지 않은것만 반환해서 초기화
    finallist = finallist.filter(
        (finallistObj) =>
            finallistObj.ingredient != ing.value &&
            finallistObj.weight != wei.value
    );
    //finallistObj는 finallist에 담겨있는 배열의 객체.
    // ing.value와 wei.value는 삭제 버튼을 클릭했을시 해당되는 tr의 재료와 무게의 값

    // if (finallistObj.ingredient != ing.value) {
    //     if (finallistObj.wei !== wei.value) {
    //         return finallistObj;
    //     }
    // }
    tr.remove();
    console.log(finallist);
}
function modifying(event) {
    const tr = event.target.parentElement.parentElement;
    const ing = tr.querySelector('td:nth-child(1)> input');
    const wei = tr.querySelector('td:nth-child(2) > input');

    const modilist = {
        // 수정전 값 초기화
        ing: ing.value,
        wei: wei.value,
    };

    const manage = tr.querySelector('td:nth-child(3)');
    const modi = manage.querySelector('button:first-child'); // 수정 버튼 숨기기
    modi.style.display = 'none';
    const modiOkay = manage.querySelector('button:nth-child(2)'); // 수정하기 버튼 및 수정취소 버튼 나타내기
    modiOkay.style.display = 'inline-block';
    const modino = manage.querySelector('button:nth-child(3)');
    modino.style.display = 'inline-block';

    ing.readOnly = false; //readonly 해제
    wei.readOnly = false;
    ing.focus(); //

    function okaymodi() {
        ing.readOnly = true;
        wei.readOnly = true;
        for (let i = 0; i < finallist.length; i++) {
            // finallist 배열 값 초기화
            if (
                finallist[i].ingredient == modilist.ing &&
                finallist[i].weight == modilist.wei
            ) {
                finallist[i].ingredient = ing.value;
                finallist[i].weight = wei.value;
            }
        }
        modilist.ing = ing.value; // 수정후 값으로 초기화
        modilist.wei = wei.value;
        changebtn();
        console.log(finallist);
    }
    function cancelmodi() {
        ing.readOnly = true;
        wei.readOnly = true;
        ing.value = modilist.ing; // 수정전 값으로 되돌리기 // 수정된 값이 없기때문에 finallist 변화를 줄 필요는 없음.
        wei.value = modilist.wei;
        changebtn();
    }
    function changebtn() {
        //중복내용 간소화
        modi.style.display = 'inline-block';
        modiOkay.style.display = 'none';
        modino.style.display = 'none';
    }
    modino.addEventListener('click', cancelmodi); // 취소 클릭시 이벤트 발생
    modiOkay.addEventListener('click', okaymodi); // 완료 클릭시 이벤트 발생
}

function paint(newlist) {
    const tr = document.createElement('tr');
    tr.classList.add('tbody');
    table.appendChild(tr);

    const td1 = document.createElement('td'); // 재료명 영역
    const inginput = document.createElement('input');
    inginput.setAttribute('type', 'text');
    inginput.setAttribute('value', `${newlist.ing}`);
    inginput.setAttribute('readonly', true);
    td1.appendChild(inginput);
    const td2 = document.createElement('td'); // 용량 영역
    const weiinput = document.createElement('input');
    weiinput.setAttribute('type', 'text');
    weiinput.setAttribute('value', `${newlist.wei}`);
    weiinput.setAttribute('readonly', true);
    td2.appendChild(weiinput);

    const td3 = document.createElement('td'); // 관리 영역
    const modi = document.createElement('button');
    modi.innerText = '수정';

    const modiOkay = document.createElement('button');
    modiOkay.innerText = '완료';
    modiOkay.style.display = 'none';
    const modino = document.createElement('button');
    modino.innerText = '취소';
    modino.style.display = 'none';

    const del = document.createElement('button');
    del.innerText = '삭제';

    td3.appendChild(modi);
    td3.appendChild(modiOkay);
    td3.appendChild(modino);
    td3.appendChild(del);

    tr.appendChild(td1); // 테이블에 입력한 재료명 용량 및 관리버튼 넘겨주기.
    tr.appendChild(td2);
    tr.appendChild(td3);
    finallistsave(newlist.ing, newlist.wei); // 최초 서버에 저장..?
    console.log(finallist);
    del.addEventListener('click', deleteing); //삭제이벤트
    modi.addEventListener('click', modifying); // 수정 이벤트
}
function inputIng(event) {
    event.preventDefault();
    const newing = prd.value;
    const newwei = weight.value;
    prd.value = ''; // 입력후 value값 초기화
    weight.value = '';
    const newlist = {
        ing: newing,
        wei: newwei,
    };

    if (newlist.ing == '' && newlist.wei == '') {
        // 재료명과 용량 미입력시
        alert('재료명과 용량을 입력하세요');
    } else if (newlist.ing == '') {
        // 용량만 입력시
        alert('재료명을 입력하세요');
        prd.focus();
    } else if (newlist.wei == '') {
        //재료명만 입력시
        alert('용량을 입력하세요');
        weight.focus();
    } else {
        // 재료명과 용량을 입력 했을 경우 paint 함수 실행
        paint(newlist);
    }
    prd.focus();
}
function finalsubmit() {
    const tbody = Array.from(document.querySelectorAll('.tbody'));
    const tbodymom = document.querySelectorAll('.tbody');
    console.log(tbody);
    if (tbody == '') {
        alert('제출할 내용이 없습니다');
    } else if (finallist != null && finallist != undefined) {
        for (let i = 0; i < finallist.length; i++) {
            // for문을 통해 최종배열속 내용을 순서대로 제출
            const li = document.createElement('li');

            const span = document.createElement('span');
            console.log(finallist[i].ingredient);
            span.innerText = `재료명 : ${finallist[i].ingredient}
                                용량 : ${finallist[i].weight}`;

            li.appendChild(span);
            ul.appendChild(li);
        }
        finallist = []; // 제출 된 뒤 최종 배열 삭제
        for (let i = 0; i < tbodymom.length; i++) {
            tbodymom[i].remove();
        }
    }
}
btn.addEventListener('click', inputIng);

finalbtn.addEventListener('click', finalsubmit);
