/* 
레시피 재료 추가하기

*/
const ingredient = document.getElementsByName("ingredient")[0];
const weight = document.getElementsByName("weight")[0];

const add_button = document.getElementById("add_button");
const submit_button = document.getElementById("submit_button");

const ul = document.getElementById("ingredient-list");
const table = document.getElementById("table");
// let saveData = new Array();
let submitData = [];

function save(ing, wei, id) {
    const saveData = {
        ingredient: ing,
        weight: wei,
        id: id,
    };
    submitData.push(saveData);
}

function add(e) {
    e.preventDefault();
    if (ingredient.value == "") {
        alert("재료를 입력해주세요");
    } else if (weight.value == "") {
        alert("용량을 입력해주세요");
    } else {
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        const input1 = document.createElement("input");
        const input2 = document.createElement("input");
        const modi_btn = document.createElement("button");
        const ok_btn = document.createElement("button");
        const del_btn = document.createElement("button");
        const savelist = {
            ingredient: ingredient.value,
            weight: weight.value,
            id: Date.now(),
        };

        table.appendChild(tr);
        tr.classList.add("tbody");

        tr.appendChild(td1);
        input1.setAttribute("type", "text");
        input1.setAttribute("value", savelist.ingredient);
        input1.setAttribute("id", savelist.id);
        input1.setAttribute("readonly", true);
        td1.appendChild(input1);

        tr.appendChild(td2);
        input2.value = weight.value;
        input2.readOnly = true;
        td2.appendChild(input2);

        tr.appendChild(td3);
        modi_btn.innerText = "수정";
        ok_btn.innerText = "완료";
        ok_btn.style.display = "none";
        del_btn.innerText = "삭제";
        td3.appendChild(modi_btn);
        td3.appendChild(ok_btn);
        td3.appendChild(del_btn);

        save(savelist.ingredient, savelist.weight, savelist.id);
        ingredient.value = "";
        weight.value = "";

        modi_btn.addEventListener("click", modify);

        del_btn.addEventListener("click", del);
    }
}
add_button.addEventListener("click", add);

function del(e) {
    e.preventDefault();

    const tr = e.target.parentElement.parentElement;
    const ing = tr.querySelector("td:nth-child(1)> input");
    const wei = tr.querySelector("td:nth-child(2) > input");
    console.log(ing.value);
    submitData = submitData.filter(
        (data) => data.ingredient != ing.value && data.weight != wei.value
    );
    console.log(submitData);
    tr.remove();
}

function modify(e) {
    e.preventDefault();

    const tr = e.target.parentElement.parentElement;
    const ing = tr.querySelector("td:nth-child(1) > input");
    const wei = tr.querySelector("td:nth-child(2) > input");
    const modi_btn = tr.querySelector("td:nth-child(3) > button:nth-child(1)");
    const ok_btn = tr.querySelector("td:nth-child(3) > button:nth-child(2)");

    const modi_list = {
        ing: ing.value,
        wei: wei.value,
        id: ing.id,
    };
    console.log(modi_list);

    modi_btn.style.display = "none";
    ok_btn.style.display = "inline-block";

    ing.readOnly = false;
    wei.readOnly = false;

    function ok_modify() {
        ing.readOnly = true;
        wei.readOnly = true;
        console.log(modi_list.wei);
        for (let i = 0; i < submitData.length; i++) {
            if (
                modi_list.ing == submitData[i].ingredient &&
                modi_list.wei == submitData[i].weight &&
                modi_list.id == submitData[i].id
            ) {
                submitData[i].ingredient = ing.value;
                submitData[i].weight = wei.value;
                console.log(submitData[i].ingredient);
            }
        }
        modi_list.ing = ing.value;
        modi_list.wei = wei.value;
        modi_btn.style.display = "inline-block";
        ok_btn.style.display = "none";
    }
    ok_btn.addEventListener("click", ok_modify);
}

function submit(e) {
    e.preventDefault();
    const $tbody = table.querySelectorAll(".tbody");
    console.log(submitData);
    console.log($tbody);

    for (let i = 0; i < submitData.length; i++) {
        const li = document.createElement("li");
        ul.appendChild(li);
        li.innerText = submitData[i].ingredient + "/" + submitData[i].weight;
    }

    for (let i = 0; i < $tbody.length; i++) {
        $tbody[i].remove();
    }

    submitData = [];
}
submit_button.addEventListener("click", submit);
