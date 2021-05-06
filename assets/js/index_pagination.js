// 1. Take DOM elements needed for pagination.
const grid = document.getElementById('index-grid');
const gridItems = document.getElementsByClassName('grid-posts-item');
const paginationBox = document.getElementsByClassName('pagination')[0];
const paginationBoxButtons = [];

// 2. Configure Pagination Settings
let current_page = 1;
let items_per_page = 3;
let max_page = 1;

/*
  Hide items on the given page
*/
function HideItems(items, page) {
  page--;

  let start = items_per_page * page;
  let end = start + items_per_page;
  let paginatedItems = items.slice(start, end);

  paginatedItems.forEach((item) => item.classList.add('invisible'));
  paginationBoxButtons[page].classList.remove('active');
}

/*
  Show items on the given page
*/
function DisplayItems(items, page) {
  page--;

  let start = items_per_page * page;
  let end = start + items_per_page;
  let paginatedItems = items.slice(start, end);

  paginatedItems.forEach((item) => item.classList.remove('invisible'));
  paginationBoxButtons[page].classList.add('active');
}

/*
  Create a Left Arrow Button
*/
function LeftArrowBtn() {
  let leftArrow = document.createElement('i');
  leftArrow.classList.add('fas', 'fa-chevron-left');
  leftArrow.addEventListener('click', () => {
    if (current_page > 1) {
      HideItems([...gridItems], current_page);
      current_page--;
      DisplayItems([...gridItems], current_page);
    }
  });
  return leftArrow;
}

/*
  Create a Right Arrow Button
*/
function RightArrowBtn() {
  let rightArrow = document.createElement('i');
  rightArrow.classList.add('fas', 'fa-chevron-right');
  rightArrow.addEventListener('click', () => {
    if (current_page < max_page) {
      HideItems([...gridItems], current_page);
      current_page++;
      DisplayItems([...gridItems], current_page);
    }
  });
  return rightArrow;
}

/*
  Create a Pagination Button
*/
function PaginationButton(page) {
  let pageBtn = document.createElement('button');
  pageBtn.classList.add('pagination-btn');
  pageBtn.innerText = page;
  pageBtn.addEventListener('click', (e) => {
    HideItems([...gridItems], current_page);
    current_page = e.target.innerText;
    DisplayItems([...gridItems], current_page);
  });
  paginationBoxButtons.push(pageBtn);

  if (current_page == page) pageBtn.classList.add('active');

  return pageBtn;
}

/*
  Create & Add a pagination box with buttons to the wrapper.
*/
function SetupPagination(items, wrapper) {
  wrapper.innerHTML = '';

  wrapper.append(LeftArrowBtn());

  max_page = Math.ceil(items.length / items_per_page);
  for (let i = 1; i < max_page + 1; i++) {
    wrapper.appendChild(PaginationButton(i));
  }

  wrapper.append(RightArrowBtn());
}

SetupPagination([...gridItems], paginationBox);
DisplayItems([...gridItems], 1);
