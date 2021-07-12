let myLibrary = []; 
const libraryDisplay = document.querySelector('#display'); 
let index = 0; 

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author; 
    this.pages = pages; 
    this.read = read; 
    this.index = index; 
    index++; 

    this.info = function() {
        return `${title} by ${author}, ${pages}, ${read}`; 
    }
}

function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read); 
    myLibrary.push(book);
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