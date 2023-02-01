/* 
레시피 재료 추가하기
*/

const $ingredient = document.querySelector("#ing");
const $weight = document.querySelector("#wei");
const $itemWrap = document.querySelector("table > tbody");
const $addBtn = document.querySelector("#add_list");
const $submitItemList = document.querySelector("#ingredient-list");
const $submitBtn = document.querySelector("#submit_button");

let finalist = [];
console.log(finalist);

function finallistSave(ing, wei, id) {
    const finallistObj = {
        ingre: ing,
        weig: wei,
        id: id,
    };
    finalist.push(finallistObj);
    console.log(finalist);
}

function callBackFunc(newObj) {
    finallistSave(newObj.ing, newObj.wei, newObj.id);
}

function addItem(e) {
    e.preventDefault();
    const $itemNewList = document.createElement("tr");
    $itemNewList.classList.add("tbody");

    const $newItem01 = document.createElement("td");
    const $newItem01_Input = document.createElement("input");

    const $newItem02 = document.createElement("td");
    const $newItem02_Input = document.createElement("input");

    const $newItem03 = document.createElement("td");

    $itemWrap.append($itemNewList);

    $itemNewList.append($newItem01);
    $newItem01.append($newItem01_Input);

    $itemNewList.append($newItem02);
    $newItem02.append($newItem02_Input);

    $itemNewList.append($newItem03);

    // console.log($itemWrap);

    $newItem01_Input.value = $ingredient.value;
    $newItem01_Input.readOnly = true;

    $newItem02_Input.value = $weight.value;
    $newItem02_Input.readOnly = true;

    $ingredient.value = ""; // 입력 후, 초기화
    $weight.value = ""; // 입력 후, 초기화

    const newObj = {
        ing: $newItem01_Input.value,
        wei: $newItem02_Input.value,
        id: Date.now(),
    };

    if (newObj.ing == "" && newObj.wei == "") {
        alert("재료명과 용량을 입력하세요");
    } else if (newObj.ing == "") {
        alert("재료명을 입력하세요.");
        $newItem01_Input.focus();
    } else if (newObj.wei == "") {
        alert("용량을 입력하세요.");
        $newItem02_Input.focus();
    } else {
        callBackFunc(newObj);
    }

    const $modifyBtn = document.createElement("button");
    const $completeBtn = document.createElement("button");
    const $deleteBtn = document.createElement("button");
    $newItem03.append($modifyBtn);
    $newItem03.append($completeBtn);
    $newItem03.append($deleteBtn);
    $completeBtn.style.display = "none";

    $modifyBtn.innerText = `수정`;
    $deleteBtn.innerText = `삭제`;
    $completeBtn.innerText = `완료`;

    function modifyItem(e) {
        $newItem01_Input.readOnly = false;
        $newItem02_Input.readOnly = false;
        const tr = e.target.parentElement.parentElement;
        console.log(tr);
        const ing = tr.querySelector("td:nth-child(1) > input");
        const wei = tr.querySelector("td:nth-child(2) > input");
        console.log(ing);
        console.log(wei);

        const modiList = {
            modi_ing: ing.value, // 수정 이전 값
            modi_wei: wei.value,
            modi_id: ing.id,
        };
        console.log(modiList.modi_wei);

        $modifyBtn.style.display = "none";
        $completeBtn.style.display = "inline-block";

        // if ($modifyBtn.innerText === `수정`) {
        //     $newItem01_Input.readOnly = false;
        //     $newItem02_Input.readOnly = false;
        //     $modifyBtn.innerText = `완료`;
        // } else if ($modifyBtn.innerText === `완료`) {
        //     $newItem01_Input.readOnly = true;
        //     $newItem02_Input.readOnly = true;
        //     $modifyBtn.innerText = `수정`;

        // }

        function modiComp() {
            $newItem01_Input.readOnly = true;
            $newItem02_Input.readOnly = true;
            for (let i = 0; i < finalist.length; i++) {
                if (
                    modiList.modi_ing == finalist[i].ingre &&
                    modiList.modi_wei == finalist[i].weig &&
                    modiList.modi_id == finalist[i].id
                ) {
                    finalist[i].ingre = ing.value;
                    finalist[i].weig = wei.value;
                }
                console.log(modiList.modi_wei);
            }

            modiList.modi_ing = ing.value;
            modiList.modi_wei = wei.value;
        }

        console.log(modiList.modi_wei);
        console.log(finalist);

        $completeBtn.addEventListener("click", modiComp);
    }

    function deleteItem() {
        $itemNewList.remove();
    }

    $modifyBtn.addEventListener("click", modifyItem);
    $deleteBtn.addEventListener("click", deleteItem);
}

function submitItem(e) {
    const tbody = document.querySelectorAll(".tbody");
    console.log(tbody);

    for (let i = 0; i < finalist.length; i++) {
        const $submitItemContents = document.createElement("li");
        const $submitItemText = document.createElement("span");
        // $submitItemList
        $submitItemText.innerText = `재료 : ${finalist[i].ingre} / 무게 : ${finalist[i].weig}`;

        $submitItemContents.append($submitItemText);
        $submitItemList.append($submitItemContents);
    }

    finalist = [];

    for (let i = 0; i < tbody.length; i++) {
        tbody[i].remove();
    }

    console.log(finalist.length);
}

$submitBtn.addEventListener("click", submitItem);
$addBtn.addEventListener("click", addItem);
