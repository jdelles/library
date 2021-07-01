let myLibrary = []; 
const libraryDisplay = document.querySelector('#display'); 

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author; 
    this.pages = pages; 
    this.read = read; 

    this.info = function() {
        return `${title} by ${author}, ${pages}, ${read}`; 
    }
}

function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read); 
    myLibrary.push(book); 
    console.log(book.info()); 
    display(); 
}

function display() {
    myLibrary.forEach((book) => {
        const div = document.createElement('div'); 
        div.textContent = book.info(); 
        libraryDisplay.appendChild(div); 
    })
}

