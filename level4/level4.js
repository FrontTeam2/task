const contents = 825; //총 게시글수

const showContent = 10; // 1page당 보여지는 게시글수 10개
const showPage = 10; // 화면에 보여지는 페이지 수 10개

const maxPage = Math.ceil(contents / showContent); // 최대 페이지수

let page = 1; // 현재 페이지 > 1페이지부터 시작

const $nav_list = document.querySelector('.nav_list'); // 전체 div 불러오기

const $page_list = $nav_list.querySelector('.page_list'); // 페이지버튼 부모 불러오기

const $table = $nav_list.querySelector('table'); // 테이블 불러오기

const $next = $nav_list.querySelector('.btn_nav.next');
const $prev = $nav_list.querySelector('.btn_nav.pre');
console.log($next);
console.log($prev);

// prev 버튼 불러오기

const makeHead = () => {
    //번호 작성자 제목 작성일 테이블 헤드
    const $table_head = document.createElement('tr');
    $table_head.classList.add('thead');

    const $thead_number = document.createElement('th');
    $thead_number.innerText = '번호';
    const $thead_writer = document.createElement('th');
    $thead_writer.innerText = '작성자';
    const $thead_title = document.createElement('th');
    $thead_title.innerText = '제목';
    const $thead_date = document.createElement('th');
    $thead_date.innerText = '작성일';

    $table_head.appendChild($thead_number);
    $table_head.appendChild($thead_writer);
    $table_head.appendChild($thead_title);
    $table_head.appendChild($thead_date);

    return $table_head;
};

const makeContent = (num) => {
    // 테이블 몸통 > 내용물 정보
    const $table_body = document.createElement('tr');
    $table_body.classList.add('tbody');

    const $tbody_num = document.createElement('td');
    $tbody_num.innerText = num; // 번호를 부여해줄 매개변수 불러오기
    const $tbody_writer = document.createElement('td');
    $tbody_writer.innerText = '테스트작성자';
    const $tbody_title = document.createElement('td');
    $tbody_title.innerText = '테스트제목입니다';
    const $tbody_date = document.createElement('td');
    $tbody_date.innerText = ' 2023-01-30';

    $table_body.appendChild($tbody_num);
    $table_body.appendChild($tbody_writer);
    $table_body.appendChild($tbody_title);
    $table_body.appendChild($tbody_date);

    return $table_body;
};

const makePage = (num) => {
    const pages = document.createElement('li');
    pages.classList.add('nav_page'); // 페이지 버튼 만들기
    pages.dataset.num = num;
    pages.innerText = num;

    pages.addEventListener('click', (e) => {
        // 페이지버튼을 클릭했을때
        for (let i = 0; i < showPage; i++) {
            if (pages.dataset.num) {
                $page_list.children[i].classList.remove('active');
            }
        }
        e.target.classList.add('active');
        paintContent(parseInt(e.target.dataset.num));
    });

    return pages;
};

const paintContent = (page) => {
    // 1페이지에서 2페이지를 누를때 1페이지 내용이 화면에 사라지고 2페이지 내용을 화면에 띄워야함

    while ($table.hasChildNodes()) {
        $table.removeChild($table.lastChild); // 테이블의 자식들을 while문을 통해 삭제
    }
    $table.appendChild(makeHead()); // thead를 table에 자식으로 넣고 생성.

    for (
        let num = (page - 1) * showContent + 1;
        num <= page * showContent && num <= contents; // 한 화면당 10개의 게시물을 보이게 제약을 줌
        num++
    ) {
        $table.appendChild(makeContent(num));
    } // 1page당 게시글의 번호는 1~10식으로   1page 1~10 2page 11~20
};

const painPage = (page) => {
    // 화면에 띄워진 1~10페이지에서 다음 페이지구간으로 넘어갈때 기존 1~10페이지가 사라지고 11~20페이지 띄우기
    while ($page_list.hasChildNodes()) {
        $page_list.removeChild($page_list.lastChild);
    }

    for (let num = page; num < page + showPage && num <= maxPage; num++) {
        // 11페이지 이상 구현은 next및 prev 버튼에서 매개변수로 받아옴
        // 화면에 10개 페이지만 나타나게
        $page_list.appendChild(makePage(num)); //
    }

    $page_list.children[0].classList.add('active'); // 첫 페이지를 active 시켜줌
};

//next 버튼 누를떄
$next.addEventListener('click', () => {
    page += showPage; // 1페이지에서 11페이지 가기 page = 1 + 10 >11 11페이지에서 21페이지 page = 11+10 >21
    if (page > maxPage) {
        // maxpage에서 다음 페이지를 누르면 1페이지로 넘어가게 page를 1로 초기화
        page = 1;
        render(page);
    } else {
        render(page);
    }
});

//prev 버튼 누를떄

$prev.addEventListener('click', () => {
    page -= showPage;
    if (page < 1) {
        // 1페이지에서 뒤페이지를 누르면 81페이지부터 보여줘야함 그러기 위해선 page를 81로 만들어줘야함
        page = parseInt(maxPage / 10) * 10 + 1; // 83/10= 8.3 정수화 > 8> 8*10+1 > 81
        render(page);
    } else {
        render(page);
    }
});

const render = (page) => {
    paintContent(page);
    painPage(page);
};
render(page);
