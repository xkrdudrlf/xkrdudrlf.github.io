// Take DOM elements needed for pagination.
const grid = document.getElementById('grid');
const gridItems = document.getElementsByClassName('grid-posts-item');
const paginationBox = document.getElementsByClassName('pagination')[0];

let current_page = 1;
let items_per_page = 3;

function DisplayItems(items, items_per_page, page) {
  page--;

  let start = items_per_page * page;
  let end = start + items_per_page;
  let paginatedItems = items.slice(start, end);

  paginatedItems.forEach((item) => item.classList.remove('invisible'));
}

function SetupPagination(items, wrapper, items_per_page) {
  wrapper.innerHTML = '';

  let leftArrow = document.createElement('i');
  leftArrow.classList.add('fas', 'fa-chevron-left');
  wrapper.append(leftArrow);

  let page_count = Math.ceil(items.length / items_per_page);
  for (let i = 1; i < page_count + 1; i++) {
    let btn = PaginationButton(i);
    wrapper.appendChild(btn);
  }

  let rightArrow = document.createElement('i');
  rightArrow.classList.add('fas', 'fa-chevron-right');
  wrapper.append(rightArrow);
}

function PaginationButton(page) {
  let pageBtn = document.createElement('button');
  pageBtn.classList.add('pagination-btn');
  pageBtn.innerText = page;

  if (current_page == page) pageBtn.classList.add('active');

  return pageBtn;
}

DisplayItems([...gridItems], items_per_page, 1);
SetupPagination([...gridItems], paginationBox, items_per_page);
