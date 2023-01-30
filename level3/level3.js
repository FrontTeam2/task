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

function finallistSave(ing, wei) {
    const finallistObj = {
        ingre: ing,
        weig: wei,
    };
    finalist.push(finallistObj);
    console.log(finalist);
}

function callBackFunc(newObj) {
    finallistSave(newObj.ing, newObj.wei);
}

function addItem(e) {
    e.preventDefault();
    const $itemNewList = document.createElement("tr");

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
    const $deleteBtn = document.createElement("button");
    $newItem03.append($modifyBtn);
    $newItem03.append($deleteBtn);

    $modifyBtn.innerText = `수정`;
    $deleteBtn.innerText = `삭제`;

    function modifyItem() {
        if ($modifyBtn.innerText === `수정`) {
            $newItem01_Input.readOnly = false;
            $newItem02_Input.readOnly = false;
            $modifyBtn.innerText = `완료`;
        } else if ($modifyBtn.innerText === `완료`) {
            $newItem01_Input.readOnly = true;
            $newItem02_Input.readOnly = true;
            $modifyBtn.innerText = `수정`;
        }
    }

    function deleteItem() {
        $itemNewList.remove();
    }

    $modifyBtn.addEventListener("click", modifyItem);
    $deleteBtn.addEventListener("click", deleteItem);

    function submitItem(e) {
        for (let i = 0; i < finalist.length; i++) {
            const $submitItemContents = document.createElement("li");
            const $submitItemText = document.createElement("span");
            // $submitItemList
            $submitItemText.innerText = `재료 : ${finalist[i].ingre} / 무게 : ${finalist[i].weig}`;

            $submitItemContents.append($submitItemText);
            $submitItemList.append($submitItemContents);
        }
        $itemNewList.remove();
        console.log(finalist.length);
    }

    $submitBtn.addEventListener("click", submitItem);
}

$addBtn.addEventListener("click", addItem);
