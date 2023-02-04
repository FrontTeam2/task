/* 
페이지네이션 구현하기
기초 변수
let totalPage = 80;
let currentPageIndx = 0;
let currentPage = new URLSearchParams(location.search).get('page') || 1;

*/
const $posts = document.querySelector(".post_list"); // 데이터 리스트
const $buttons = document.querySelector(".page_list"); // 버튼 리스트
const $nav = document.querySelector(".nav_list"); // 버튼 리스트 부모
const $pre = document.querySelector(".btn_nav.pre");
const $next = document.querySelector(".btn_nav.next");

const totalCount = 271; // 총 게시물 개수

const pageCount = 10; // 화면에 나타날 페이지(버튼) 개수
const postCount = 10; // 한 페이지 당 나타낼 게시물 개수

const maxPage = Math.ceil(totalCount / pageCount); // 최대 페이지 수

let page = 1; // 현재 페이지

const makePost = (num) => {
    const post = document.createElement("li");

    const post_num = document.createElement("span");
    post_num.innerText = num;
    post_num.classList = "post_num";

    const post_title = document.createElement("span");
    post_title.innerText = "게시물 제목";
    post_title.classList = "post_title";

    const post_content = document.createElement("span");
    post_content.innerText = "게시물 내용";
    post_content.classList = "post_content";

    const post_author = document.createElement("span");
    post_author.innerText = "작성자";
    post_author.classList = "post_author";

    const post_date = document.createElement("span");
    post_date.innerText = "2022.01.01";
    post_date.classList = "post_date";

    post.appendChild(post_num);
    post.appendChild(post_title);
    post.appendChild(post_content);
    post.appendChild(post_author);
    post.appendChild(post_date);

    return post;
};

const makeButton = (num) => {
    const button = document.createElement("button");
    button.classList.add("nav_page");
    button.dataset.num = num;
    button.innerText = num;

    button.addEventListener("click", (e) => {
        for (let i = 0; i < $buttons.children.length; i++) {
            if (button.dataset.num) {
                $buttons.children[i].classList.remove("active");
            }
        }
        e.target.classList.add("active");
        renderContent(parseInt(e.target.dataset.num)); // parseInt 붙이지 않으면 string 값이 나옴
    });

    return button;
};

const renderContent = (page) => {
    while ($posts.hasChildNodes()) {
        $posts.removeChild($posts.lastChild);
    }
    for (
        let num = (page - 1) * postCount + 1;
        num <= page * postCount && num <= totalCount; // &&가 참이면 뒤의 값 return
        num++
    ) {
        $posts.appendChild(makePost(num));
    }
};

const renderButton = (page) => {
    while ($buttons.hasChildNodes()) {
        $buttons.removeChild($buttons.lastChild);
    }
    for (let num = page; num < page + pageCount && num <= maxPage; num++) {
        $buttons.appendChild(makeButton(num));
    }
    $buttons.children[0].classList.add("active");
    console.log($buttons.children[0]);
};

$pre.addEventListener("click", () => {
    console.log(page);
    page -= pageCount;
    if (page < 1) {
        page = parseInt(maxPage / 10) * 10 + 1; // maxPage만 쓰면 마지막 버튼만 화면에 보임
        render(page);
    } else {
        render(page);
    }
});

$next.addEventListener("click", () => {
    page += pageCount;
    if (page > maxPage) {
        page = 1;
        render(page);
    } else {
        render(page);
    }
    console.log(page);
});

const render = (page) => {
    renderButton(page);
    renderContent(page);
};
render(page);
