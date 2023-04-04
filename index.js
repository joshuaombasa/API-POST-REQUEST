const blogTitle = document.getElementById("blog-title")
const blogForm = document.getElementById("blog-form")
const blogContent = document.getElementById("blog-content")
const submitBtn = document.getElementById("submit-btn")

const url = 'https://us-central1-open-classrooms-js-for-the-web.cloudfunctions.net/widgets';

blogForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const post = {
        title: blogTitle.value,
        content: blogContent.value
    }

    console.log(post)
})

function makeRequest(data) {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest()
        request.open('POST', url + '/create-post')
    })
}