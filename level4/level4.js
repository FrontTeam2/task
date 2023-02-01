/* 
페이지네이션 구현하기
기초 변수
let totalPage = 80;
let currentPageIndx = 0;
let currentPage = new URLSearchParams(location.search).get('page') || 1;

*/
const contents = document.querySelector(".content_list"); // 데이터 리스트
const buttons = document.querySelector(".nav_list"); // 버튼 리스트

let totalCount = 81; // 총 데이터 개수
let currentPage = 1; // 현재 페이지
let pageCount = 10; // 화면에 나타날 페이지 개수
let limit = 10; // 한 페이지 당 나타낼 데이터 개수

const makeContent = (id) => {
    const content = document.createElement("li");
    content.classList.add("content");
    content.innerHTML = `
    <span class="content__id">${id}</span>
    <span class="content__title">게시물 제목</span>
    <span class="content__author">작성자</span>
    <span class="content__date">2022.01.01</span>
    `;
};

let totalPage = Math.ceil(totalCount / limit); // 총 페이지 개수 9
let pageGroup = Math.ceil(currentPage / pageCount); // 현재 페이지 그룹 1

let lastNumber = pageGroup * pageCount; //10
if (lastNumber > totalPage) {
    lastNumber = totalPage; //9
}
let firstNumber = lastNumber - (pageCount - 1); // 10 - (10 - 1) = 1

const next = lastNumber + 1;
const prev = firstNumber - 1;

for (let i = firstNumber; i < lastNumber; i++) {
    html += `<button class="pageNumber" id="page_${i}">${i}</button>`;
}
