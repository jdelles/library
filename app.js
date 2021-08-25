/**
 * An array containing the books in this library
 */
let myLibrary = [];

/**
 * Gets the addBook button which will be used by the user to add a new book to the library
 */
const newBook = document.querySelector("#newBook");

/**
 * Gets the form to toggle on and off when newBook is clicked
 */
const addForm = document.querySelector("#form");

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
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.index = size;

    /**
     * Gets a string containing information about the book
     * @returns a string containing information about the book
     */
    this.info = function () {
      return `${title} by ${author}, ${pages}, ${read}`;
    };
  }
}

/**
 * Adds a new book to the library and updates the display table with the new book
 * @param {*} title the title of the book
 * @param {*} author the author of the book
 * @param {*} pages the number of pages in the book
 * @param {*} read was the book read or not yet
 */
function addBookToLibrary(title, author, pages, read) {
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
  size++;
  libraryDisplay();
}

/**
 * Removes a book from the library and updates the display table to remove the book
 * @param {*} book the Book object to remove
 */
function removeBookFromLibrary(id) {
  if (size >= 0) {
    myLibrary.splice(id, 1);
    size--;
  } else if (size === -1) {
    myLibrary = [];
  }
  save();
  libraryDisplay();
}

/**
 * Loops through each book in the libarry to build the display table
 */
function libraryDisplay() {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";
  myLibrary.forEach((book) => {
    const index = myLibrary.indexOf(book);
    const row = document.createElement("tr");
    row.setAttribute("id", index);

    const tdTitle = document.createElement("td");
    tdTitle.textContent = book.title;

    const tdAuthor = document.createElement("td");
    tdAuthor.textContent = book.author;

    const tdPages = document.createElement("td");
    tdPages.textContent = book.pages;

    const tdRead = document.createElement("td");
    const readButton = document.createElement("button");
    readButton.textContent = book.read;
    readButton.addEventListener("click", () => {
      if (book.read === "Read") {
        book.read = "Not Read";
      } else {
        book.read = "Read";
      }
      libraryDisplay();
    });
    tdRead.appendChild(readButton);

    const tdRemove = document.createElement("td");
    const removeButton = document.createElement("button");
    removeButton.textContent = "Delete";
    removeButton.addEventListener("click", () => {
      removeBookFromLibrary(index);
    });
    tdRemove.appendChild(removeButton);

    row.appendChild(tdTitle);
    row.appendChild(tdAuthor);
    row.appendChild(tdPages);
    row.appendChild(tdRead);
    row.appendChild(tdRemove);

    tbody.appendChild(row);
    if (storageAvailable("localStorage")) {
      save();
    }
  });
}

/**
 * Tests whether storage is supported by the user's browser
 * Source: https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
 * @param {*} type The type of storage to test
 * @returns True or an exception
 */
function storageAvailable(type) {
  var storage;
  try {
    storage = window[type];
    var x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

/**
 * Saves the library to local storage
 */
function save() {
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}

/**
 * Loads the library from local storage on page load
 */
function load() {
  if (localStorage.myLibrary) {
    let data = localStorage.getItem("myLibrary");
    myLibrary = JSON.parse(data);
    libraryDisplay();
  }
}

/**
 * Adds an event listener to the new book button which toggles the form display
 */
newBook.addEventListener("click", () => {
  const formSection = document.querySelector("#form");
  if (formSection.style.display === "none") {
    formSection.style.display = "block";
  } else {
    formSection.style.display = "none";
  }
});

/**
 * Adds an event listener to the submit button which overrides the default submit
 * behavior and instead captures the form data and calls addBookToLibrary
 */
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.querySelector("#title").value;
  document.querySelector("#title").value = "";
  const author = document.querySelector("#author").value;
  document.querySelector("#author").value = "";
  const pages = document.querySelector("#pages").value;
  document.querySelector("#pages").value = "";
  const read = document.querySelector("#read").value;
  document.querySelector("#read").value = "";

  addBookToLibrary(title, author, pages, read);
  const formSection = document.querySelector("#form");
  formSection.style.display = "none";
});

/**
 * Checks localStorage for data from a previous session
 */
load();
