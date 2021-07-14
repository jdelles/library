# library
A library application created with JavaScript using Firebase Realtime Database


From [The Odin Project](https://www.theodinproject.com)  
[Play Here](https://jdelles.github.io/library/)

## Introduction
This is the first project in the JavaScript track at The Odin Project. It uses Object Oriented Programming to create 'book' objects and stores them in a library which can return various information about the books to the user. 

## Skill
- JavaScript
- CSS
- HTML
- Firebase DB 

## Tools
- VSCode
- Live Server
- Git / GitHub

## Resources
- [MDN Web Docs - Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- [Firebase - Getting started with Firebase Realtime Database](https://www.youtube.com/watch?v=noB98K6A0TY)


## To do 
- [X] If you haven’t already, set up your project with skeleton HTML/CSS and JS files.
- [X] Create book object and constructor
- [X] Create library array to hold books and add book to library
- [X] Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. 
- [X] Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read and anything else you might want.
- [X] Add a button on each book’s display to remove the book from the library.
- [X] Add a button on each book’s display to change its read status.
- [X] (Optional) localStorage - Set up a function that saves the whole library array to localStorage every time a new book is created, and another function that looks for that array in localStorage when your app is first loaded. 
- [ ] (Optional) Firebase
- [ ] Style points - make prettier
- [X] Publish to GitHub

## Log
7/12/2021 - Created a bug with the display() function. Every time it ran, the library display was duplicated. Solutions I considered were: 1. Delete the display every time it refreshes since the library array was not duplicating only the display. 2. Find a way to update the list 1 at a time instead of using forEach to grab everything from the library. I went with option 2 and built a table directly into my index.html and then used JavaScript to insertRow() to add the new book. 

7/12/2021 Part 2 - Created an New Book button and built a form with JavaScript that appears on click. Submitting the form is broken and seems to just reset the webpage though its not throwing any errors. I'll get back to debuggin this tomrorow. 

7/13/2021 Rethinking my decisions yesterday and playing with embedding the form directly into the html. 

7/13/2021 Got the display working! Got the toggle working to display/hide the new book form

7/14/2021 Finished the requirements of the library project. Like my other project submissions, the design elements could use work. I will revisit them after getting through React and Node units. 