// https://jsonplaceholder.typicode.com/posts
const postsContainer = document.querySelector('.posts-container')
const btnNext = document.querySelector('#btnNext')
const btnPrevious = document.querySelector('#btnPrevious')
const pagination_element = document.querySelector("#pagination")
const getPostData = async () => {
    try {
        const postRes = await fetch('https://jsonplaceholder.typicode.com/posts?limit=10')
        if (postRes.ok) {
            const postData = await postRes.json()
            // console.log(postData);
            return postData
        }
    } catch (error) {
        console.error(error.message);

    }

}
let current_page = 1; // staring page
const rows = 5; // rows_per_page

const displayPosts = async () => {
    const postData = await getPostData()
    const startIndx = (current_page - 1) * rows
    const endIndx = current_page * rows
    const pageData = postData.slice(startIndx, endIndx)
    displayPages(pageData, postData, endIndx);
}

const displayPages = (pageData, postData, endIndx) => {

    pageData.forEach((el) => {
        const postContainer = document.createElement('div')
        const postTitle = document.createElement('h3')
        postTitle.innerText = `${el.title} ID ${el.id}`
        const postBody = document.createElement('p')
        postBody.innerText = el.body
        postsContainer.append(postContainer)
        postContainer.append(postTitle, postBody)

    })
    if (endIndx > postData.length - 1) {
        btnNext.disabled = true;
    } else btnNext.disabled = false;
    if (current_page === 1) {
        btnPrevious.disabled = true;
    } else btnPrevious.disabled = false;

}

displayPosts();

const handleClickNext = () => {
    postsContainer.innerHTML = "";
    current_page += 1;
    displayPosts();

}
const handleClickPrevious = () => {
    if (current_page > 1) {
        postsContainer.innerHTML = "";
        current_page -= 1;
        displayPosts();

    }
}
btnNext.addEventListener('click', handleClickNext)
btnPrevious.addEventListener('click', handleClickPrevious)












// const displayList = (items, wrapper, rows_per_page, page) => {
//     wrapper.innerHTML = "";
//     page--;
//     const start = rows_per_page * page; // staring length
//     const end = start + rows_per_page; // last index??
//     const paginatedItems = items.slice(start, end) // our data
//     for (const item of paginatedItems) {
//         const item_element = document.createElement('div')
//         item_element.innerText = item;
//         wrapper.append(item_element)
//     }
// }

// const setupPagination = (items, wrapper, rows_per_page) => {
//     wrapper.innerHTML = "";
//     const page_count = Math.ceil(items.length / rows_per_page);
//     for (let i = 1; i < page_count + 1; i++) {
//         const btn = paginationButton(i, items);
//         wrapper.append(btn)
//     }
// }
// const paginationButton = (page, items) => {
//     const button = document.createElement("button")
//     button.innerText = page;
//     if (current_page === page) button.classList.add("active")
//     button.addEventListener('click', () => {
//         current_page = page;
//         displayList(items, list_element, rows, current_page)
//         const current_btn = document.querySelector('.pagenumbers button.active')
//         current_btn.classList.remove('active')
//         button.classList.add('active')
//     })
//     return button;
// }