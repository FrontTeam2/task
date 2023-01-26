/* 
레시피 재료 추가하기

*/

/*
추가 버튼을 클릭하게 되면
input value값이 생성된 tr > td에 담겨야 합니다.

제출 버튼을 클릭하게 되면
td에 담겨있는 innerText가 ul > li에 담겨야 합니다.
*/

/*
1. input필드에 접근
2. input.value를 innerText로 td에 담습니다.


*/

const $ingredient = document.querySelector("#ing");
const $weight = document.querySelector("#wei");
const $itemWrap = document.querySelector("table > tbody");
const $addBtn = document.querySelector("#add_list");
const $submitItemList = document.querySelector("#ingredient-list");
const $submitBtn = document.querySelector("#submit_button");

function addItem(e) {
    e.preventDefault();
    const $itemNewList = document.createElement("tr");
    $itemNewList.classList.add("tbody");

    const $newItem01 = document.createElement("td");
    $newItem01.classList.add("saveItem");
    const $newItem01_Input = document.createElement("input");

    const $newItem02 = document.createElement("td");
    $newItem02.classList.add("saveItem");
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

    $newItem01_Input.append($ingredient.value);
    $newItem02_Input.append($weight.value);

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

    function submitItem() {
        // let $submitNewArr = [];
        let $submitArr = [
            {
                ing: $newItem01_Input.value,
                wei: $newItem02_Input.value,
            },
        ];
        console.log($submitArr);

        const $submitList = document.querySelectorAll(".tbody");

        // for (const el of $submitArr) {
        //     $submitNewArr.push($submitArr[0]);
        // }

        // console.log($submitNewArr);
        // ul > li안에 재료와 무게가 객체로 담겨야한다.
        // 제출을 클릭했을 때, ul를 반복생성하여 li 2개에 담거나
        // 제출을 클릭했을 때, li > innerHTML -> p 2개에 담거나

        // for (let i = 0; $submitList.length; i++) {
        //     const $submitItemContents = document.createElement("li");
        //     // $submitItemContents.classList.add("ingredient-item");
        //     $submitItemList.append($submitItemContents);

        //     $submitItemContents.innerHTML = `<p>${$newItem01_Input.value}</p><p>${$newItem02_Input.value}</p>`;
        //     // 배열 속 객체를 for문으로 돌려야합니다. 수정 !
        // }
    }

    $submitBtn.addEventListener("click", submitItem);
}

$addBtn.addEventListener("click", addItem);
