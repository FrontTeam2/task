/* 
페이지네이션 구현하기
기초 변수
let totalPage = 80;
let currentPageIndx = 0;
let currentPage = new URLSearchParams(location.search).get('page') || 1;

*/
const numofcontent = 812; // 총 게시글수
const showcontent = 10; // 한 페이지당 보여질 게시글 수
const showpage = 10; // 한 화면에 보여질 페이지 수

const maxpage = Math.ceil(numofcontent / showcontent); // 총 페이지수
const pre = document.querySelector('.btn_nav.pre'); // 이전 페이지
const next = document.querySelector('.btn_nav.next'); // 다음 페이지

let page = 1; //현재 페이지 (시작 페이지 = 1)

console.log(maxpage);

const $nav_list = document.querySelector('.nav_list');
const $table = $nav_list.querySelector('table');

const makeHead = () => {
    const $thead = document.createElement('tr'); // 번호 작성자 제목 작성일자 헤더
    $thead.classList.add('thead');
    const $thead_number = document.createElement('th');
    $thead_number.innerText = '번호';
    const $thead_writer = document.createElement('th');
    $thead_writer.innerText = '작성자';
    const $thead_title = document.createElement('th');
    $thead_title.innerText = '제목';
    const $thead_date = document.createElement('th');
    $thead_date.innerText = '2023-01-30';

    $thead.appendChild($thead_number);
    $thead.appendChild($thead_writer);
    $thead.appendChild($thead_title);
    $thead.appendChild($thead_date);

    return $thead;
};
const makeContent = (num) => {
    const $tbody = document.createElement('tr'); // tr 생성
    $tbody.classList.add('tbody');

    const $number = document.createElement('td'); // 번호
    $number.innerText = num;
    $tbody.appendChild($number);
    const $writer = document.createElement('td'); // 작성자
    $writer.innerText = `테스트`;
    $tbody.appendChild($writer);
    const $title = document.createElement('td'); // 제목
    $title.innerText = `테스트입니다`;
    $tbody.appendChild($title);
    const $date = document.createElement('td'); // 작성일
    $date.innerText = `2023.1.30`;
    $tbody.appendChild($date);

    return $tbody;
};
const $page_list = document.querySelector('.page_list');

const makepage = (num) => {
    const li = document.createElement('li');
    li.classList.add('nav_page');
    li.dataset.num = num;
    li.innerText = num;

    li.addEventListener('click', (e) => {
        for (let i = 0; i < showpage; i++) {
            if ($page_list.children[i].dataset.num) {
                $page_list.children[i].classList.remove('active');
            }
        }

        // Array.prototype.forEach.call($page_list.children, (li) => { foreach 방식
        //     if (li.dataset.num) li.classList.remove('active');
        // });
        e.target.classList.add('active');
        paintcontent(parseInt(e.target.dataset.num));
    });
    return li;
};

const paintcontent = (page) => {
    while ($table.hasChildNodes()) {
        $table.removeChild($table.lastChild);
    }
    $table.appendChild(makeHead());
    for (
        let num = (page - 1) * showcontent + 1; //
        num <= page * showcontent && num <= numofcontent;
        num++
    ) {
        $table.appendChild(makeContent(num));
    }
};

const paintpage = (page) => {
    while ($page_list.hasChildNodes()) {
        $page_list.removeChild($page_list.lastChild);
    }
    for (let num = page; num < page + showpage && num <= maxpage; num++) {
        $page_list.appendChild(makepage(num));
    }
    $page_list.children[0].classList.add('active');
};

pre.addEventListener('click', () => {
    page -= showpage;
    if (page < 1) {
        page = parseInt(maxpage / 10) * 10 + 1;
        render(page);
    } else {
        render(page);
    }
});

next.addEventListener('click', () => {
    page += showpage;
    if (page > maxpage) {
        page = 1;
        render(page);
    } else {
        render(page);
    }
});

const render = (page) => {
    paintcontent(page);
    paintpage(page);
};
render(page);
