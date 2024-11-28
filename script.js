// https://jsonplaceholder.typicode.com/posts
const postsContainer = document.querySelector('.posts-container')
const btn = document.querySelector('button')
const getPostData = async () => {
    try {
        const postRes = await fetch('https://jsonplaceholder.typicode.com/posts?limit=10')
        if (postRes.ok) {
            const postData = await postRes.json()
            console.log(postData);
            return postData
        }
    } catch (error) {
        console.error(error.message);

    }

}
const displayData = async (index, offset) => {
    // let index = 0;
    let condition = index + offset
    const postData = await getPostData()
    for (index; index < condition; index++) {
        if (index < 5) {
            const postContainer = document.createElement('div')
            const postTitle = document.createElement('h3')
            postTitle.innerText = postData[index].title
            const postBody = document.createElement('p')
            postBody.innerText = postData[index].body
            postsContainer.append(postContainer)
            postContainer.append(postTitle, postBody)
        }
    }

}
displayData(0, 5);
let index = 0;
const nextPage = () => {
    postsContainer.innerHTML = '';
    let offset = 5;
    index += offset
    console.log(index);

    displayData(index, offset)

}
btn.addEventListener('click', nextPage)
