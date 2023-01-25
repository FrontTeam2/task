/* 
레시피 재료 추가하기

*/
const ingredient = document.getElementsByName('ingredient')[0];
const weight = document.getElementsByName('weight')[0];
const add_button = document.getElementById('add_button');
const submit_button = document.getElementById('submit_button');
const table = document.getElementById('table');
const tr = document.createElement('tr');
const td = document.createElement('td');

const ul = document.getElementById('ingredient-list');
const li = document.createElement('li');

function add(e){
    e.preventDefault();
    const table = document.getElementById('table');
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    table.appendChild(tr);
    tr.appendChild(td1);
    td1.innerText=ingredient.value;
    tr.appendChild(td2);
    td2.innerText=weight.value;
    tr.appendChild(td3);
    
    console.log(ingredient.value);
    console.log(weight.value);
}
add_button.addEventListener('click', add);

function submit(e){
    e.preventDefault();
}

submit_button.addEventListener('click', submit);