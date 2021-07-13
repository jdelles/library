/**
 * An array containing the books in this library
 */
let myLibrary = []; 

/**
 * Gets the display id which is used to build the table of book info
 */
const libraryDisplay = document.querySelector('#display'); 

/**
 * Gets the addBook button which will be used by the user to add a new book to the library
 */
const newBook = document.querySelector('#newBook'); 

/**
 * Tracks the size of the myLibrary array
 */
let size = 0; 

/**
 * Creates a book object to store in the myLibrary array.
 * @param {*} title the title of the book
 * @param {*} author the author of the book
 * @param {*} pages the number of pages in the book
 * @param {*} read was the book read or not yet
 */
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author; 
    this.pages = pages; 
    this.read = read; 
    this.index = size; 

    /**
     * Gets a string containing information about the book
     * @returns a string containing information about the book
     */
    this.info = function() {
        return `${title} by ${author}, ${pages}, ${read}`; 
    }
}

/**
 * Adds a new book to the myLibrary array and updates the webpage display table with the new book
 * @param {*} title the title of the book
 * @param {*} author the author of the book
 * @param {*} pages the number of pages in the book
 * @param {*} read was the book read or not yet
 */
function addBookToLibrary(title, author, pages, read) {

    /**
     * Creates the new book object and adds it to the library
     */
    let book = new Book(title, author, pages, read); 
    myLibrary.push(book);
    size++; 

    /**
     * Adds the book to the table on the website
     */
    const table = document.querySelector('table'); 
    const row = table.insertRow(); 
    const cell1 = row.insertCell(0);  
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    cell1.textContent = title; 
    cell2.textContent = author; 
    cell3.textContent = pages; 
    cell4.textContent = read; 
}

newBook.addEventListener('click', () => {
    const formSection = document.querySelector('#form'); 
    const form = document.createElement('form');

    const title = document.createElement('input'); 
    title.setAttribute("type", "text"); 
    title.setAttribute("name", "title");
    title.setAttribute("placeholder", "title");  
    
    const author = document.createElement('input'); 
    author.setAttribute("type", "text"); 
    author.setAttribute("name", "author");
    author.setAttribute("placeholder", "author");  
    
    const pages = document.createElement('input'); 
    pages.setAttribute("type", "text"); 
    pages.setAttribute("name", "pages");
    pages.setAttribute("placeholder", "pages");  
    
    const read = document.createElement('input'); 
    read.setAttribute("type", "text"); 
    read.setAttribute("name", "title");
    read.setAttribute("placeholder", "read");  

    const submit = document.createElement('input'); 
    submit.setAttribute("type", "submit"); 
    submit.setAttribute("value", "submit"); 

    form.appendChild(title);
    form.appendChild(author);
    form.appendChild(pages);
    form.appendChild(read);
    form.appendChild(submit); 
    
    form.setAttribute(onsubmit, addBookToLibrary(title, author, pages, read)); 
    formSection.appendChild(form); 
});