/* 
페이지네이션 구현하기
기초 변수
let totalPage = 80;
let currentPageIndx = 0;
let currentPage = new URLSearchParams(location.search).get('page') || 1;

*/

const contentsCount = 800; // 게시글 총 수
const contentsPerPage = 10; // 페이지당 게시물 수
const pageCount = 10; // 화면에 보여지는 페이지 총 수

const maxPage = Math.floor(contentsCount / contentsPerPage); // 페이지 총 수
console.log(maxPage);

const pageIndex = 0; // 첫번째 페이지

const $navList = document.querySelector(".nav_list"); // 페이지 화면 전체
const $table = document.createElement("table"); // 페이지 리스트 전체
$ul.classList.add("nav");
$navList.prepend($table); // 자식 요소 중 맨 앞으로 이동되면서 담김

const $pagination = document.querySelector(".page_list");

const $next = document.querySelector(".btn_nav.next");
const $prev = document.querySelector(".btn_nav.pre");

// 페이지 우측으로 이동
function pageNext() {}

// 페이지 좌측으로 이동
function pagePrev() {}

$next.addEventListener("click", pageNext);
$prev.addEventListener("click", pagePrev);
