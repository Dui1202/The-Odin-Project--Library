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
    const newBook = new Book(
        titleInput.value.trim(),
        authorInput.value.trim(),
        pagesInput.value.trim(),
        descriptionInput.value.trim(),
        hasReadInput.checked
    );
    myLibrary.push(newBook);
    updateBookContainer();
    cleanInputs();
}
 

function updateBookContainer(){
    const frag = document.createDocumentFragment();
    myLibrary.forEach(({title, author, description, pages,hasRead}) => {
        const card = document.createElement("div");
        card.classList.add("book-card");
        card.innerHTML = `
            <p>Title: ${title}</p>
            <p>Author: ${author}</p>
            <p>Pages: ${pages}</p>
            <p>Description: ${description}</p>
            <p>${hasRead? "Has read" : "Not yet"}</p>
        `;
        frag.appendChild(card);
    });
    booksContainer.appendChild(frag);
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