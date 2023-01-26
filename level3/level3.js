/* 
레시피 재료 추가하기

*/
const ingredient = document.getElementsByName('ingredient')[0];
const weight = document.getElementsByName('weight')[0];

const add_button = document.getElementById('add_button');
const submit_button = document.getElementById('submit_button');

const ul = document.getElementById('ingredient-list');

let sumbitData = new Array();
let ingredientData;
let weightData;
function add(e){
    e.preventDefault();

    const table = document.getElementById('table');
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const input1 = document.createElement('input');
    const input2 = document.createElement('input');
    const modi_btn = document.createElement('button');
    const del_btn = document.createElement('button');

    table.appendChild(tr);

    tr.appendChild(td1);
    input1.value = ingredient.value;
    input1.readOnly = true;
    td1.appendChild(input1);

    tr.appendChild(td2);
    input2.value = weight.value;
    input2.readOnly = true;
    td2.appendChild(input2);

    tr.appendChild(td3);
    modi_btn.innerText = '수정';
    del_btn.innerText = '삭제';
    td3.appendChild(modi_btn);
    td3.appendChild(del_btn);

    modi_btn.addEventListener('click', ()=>{
        if(modi_btn.innerText == '수정'){
            input1.readOnly = false;
            input2.readOnly = false;
            modi_btn.innerText = '완료';
        } else if(modi_btn.innerText == '완료'){
            input1.readOnly = true;
            input2.readOnly = true;
            modi_btn.innerText = '수정';
        }
        console.log(input1.value);
    });
    del_btn.addEventListener('click', ()=>{
        tr.remove();
    });

    function submit(e){
        e.preventDefault();
        
        sumbitData.push({
            ingredientData : input1.value,
            weightData : input2.value
        });
        console.log(sumbitData);
        for(let i = 0;i<sumbitData.length;i++){
            const li = document.createElement('li');
            ul.appendChild(li);
            li.innerText = sumbitData[i].ingredientData+'/'+sumbitData[i].weightData;
            console.log(i);
            console.log(sumbitData[i].ingredientData);
        }
    }
    submit_button.addEventListener('click', submit);
}
add_button.addEventListener('click', add);

