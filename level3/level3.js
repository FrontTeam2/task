/* 
레시피 재료 추가하기

*/

const form = document.getElementById('ingredient-form');
const prd = form.querySelector('p:nth-child(1) > input');
const weight = form.querySelector('p:nth-child(2) > input');
const btn = form.querySelector('button');
const table = document.querySelector('table');

const ul = document.getElementById('ingredient-list');
function deleteing(event) {
    const tr = event.target.parentElement.parentElement;
    tr.remove(); //td3    // tr class tbody
}
function modifying(event) {
    const tr = event.target.parentElement.parentElement;

    const wei = tr.querySelector('td:nth-child(2)');
}

function paint(newlist) {
    const tr = document.createElement('tr');
    tr.classList.add('tbody');
    table.appendChild(tr);

    const td1 = document.createElement('td'); // 재료명
    const td2 = document.createElement('td'); // 용량
    const td3 = document.createElement('td'); // 관리
    td1.innerText = newlist.ing;
    td2.innerText = newlist.wei;

    const modi = document.createElement('button');
    modi.innerText = '수정';

    const del = document.createElement('button');
    del.innerText = '삭제';
    td3.appendChild(modi);
    td3.appendChild(del);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    del.addEventListener('click', deleteing);
    modi.addEventListener('click', modifying);
}
function inputIng(event) {
    event.preventDefault();
    const newlist = {
        ing: prd.value,
        wei: weight.value,
    };
    paint(newlist);
}

btn.addEventListener('click', inputIng);
