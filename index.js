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
        request.onreadystatechange(() => {
            if (request.readyState === 4) {
                if (request.status === 201) {
                    resolve(JSON.parse(request.response))
                } else {
                    reject(JSON.parse(request.response))
                }
            }
        })
        request.setRequestHeader('Content-Type', 'application/json')
        request.send(JSON.stringify(data))
    })
}

async function submitFormData(post) {
    try {
        const requestPromise = makeRequest(post)
        const response = await requestPromise
    } catch (errorResponse) {
        
    }
}