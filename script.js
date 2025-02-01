const booksContainer = document.getElementById("books-container");
const addNewBookBtn = document.getElementById("add-new-book-btn");
const addBtn =document.getElementById("add-book-btn");
const addNewBookModal = document.getElementById("add-new-book-modal");
const titleInput = document.getElementById("title-input");
const descriptionInput = document.getElementById("description-input");
const pagesInput = document.getElementById("pages-input");
const authorInput = document.getElementById("author-input");
const hasReadInput = document.getElementById("has-read-input");
const closeFormBtn = document.getElementById("close-form-btn");

function Book(title, author, pages, description,hasRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.description = description
    this.hasRead = hasRead;
}

const myLibrary = [];

function addBookToLibrary() {
    const hasRead = hasReadInput.checked;
    const newBook = new Book(titleInput.value, authorInput.value, pagesInput.value, descriptionInput.value, hasRead);
    myLibrary.push(newBook);
    updateBookContainer();
    cleanInputs();
}


function updateBookContainer(){
    booksContainer.innerHTML="";
    myLibrary.forEach(({title, author, description, pages,hasRead}) => {
        (booksContainer.innerHTML +=`
            <div class="book-card">
                <p>Title: ${title}</p>
                <p>Author: ${author}</p>
                <p>Pages: ${pages}</p>
                <p>Description: ${description}</p>
                <p>${hasRead? "Has read" : "Not yet"}</p>
            </div>
            `)
    });
}
function cleanInputs(){
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    descriptionInput.value = "";
    hasReadInput.checked = false;
}

addNewBookBtn.addEventListener("click", ()=>{
    addNewBookModal.showModal();
})

addBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    addBookToLibrary();
})

closeFormBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    addNewBookModal.close()
})