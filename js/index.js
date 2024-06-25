document.addEventListener("DOMContentLoaded", function() {fetchBooks()});

function fetchBooks(){
    fetch('http://localhost:3000/books')
    .then(resp => resp.json())
    .then(booksArray => booksArray.map(displayBooks))
}


function displayBookDetails(selectedBook){
    fetch(`http://localhost:3000/books/${selectedBook}`)
    .then(resp => resp.json())
    .then(bookInfo => {
    let thumbnail = document.createElement('img')
    thumbnail.src = bookInfo['img_url']
    let title = document.createElement('h4')
    title.textContent = bookInfo.title
    let subtitle = document.createElement('h4')
    subtitle.textContent = bookInfo.subtitle
    let author = document.createElement('h4')
    author.textContent = bookInfo.author
    let description = bookInfo.description
    let likesUsers = bookInfo.likesUsers
    const detailPanel = document.getElementById('show-panel')
detailPanel.append(thumbnail, title, subtitle, author, description, likesUsers)
        })
    }
 
function displayBooks(book){
    const list = document.getElementById('list')
    let li= document.createElement('li')
    li.innerText = book.title
    li.id = book.id
    li.addEventListener('click', (e) => {
        let selectedBook = e.target.id
        displayBookDetails(selectedBook)})
    list.appendChild(li)
    
}