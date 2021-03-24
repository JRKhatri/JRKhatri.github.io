("use strict");

let library = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 }
];
// eslint-disable-next-line valid-jsdoc
/**
 * 
 */
function pageLoad(){
     document.getElementById("addBook").onclick = addBrowserBook();

    document.getElementById("titlesBtn").onclick = findTitles;
    
    document.getElementById("authorBtn").onclick = findAuthors;
    document.getElementById("idsBtn").onclick = findIDs;
    document.getElementById("allBtn").onclick = displayAll;

}

// eslint-disable-next-line valid-jsdoc
/**
 * 
 * @returns undefined;
 */
function addBrowserBook(){
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let libraryID = document.getElementById("id").value;
     const newBook = {title, author, libraryID};
    addBook(newBook);
    let textArea = document.getElementById("displayArea");
     textArea.innerHTML = "Book Added. Thanks!";
     clearInput();
    
    return;
     
 }

 // eslint-disable-next-line valid-jsdoc
 /**
  * 
  */
 function clearInput(){
     document.getElementById("title").value ="";
    document.getElementById("author").value ="";
     document.getElementById("id").value ="";
   return;
 }
 
 /**
  * 
  * @param {Object} book new book to be added in library;
  * @returns{Object} the book added;
  */
 function addBook(book){
     library.push(book);
     return book;
 
 }

 // eslint-disable-next-line valid-jsdoc
 /**
  * 
  * @returns undefined;
  */
function displayAll(){
    let allBooks = getAllContent();
    let textArea= document.getElementById("displayArea");
    textArea.innerHTML = allBooks;
    return;
    
}

// eslint-disable-next-line valid-jsdoc
/**
 * 
 * @returns undefined;
 */
function getAllContent(){
    let content =[];
    for(let details of library){
        for(let key in details)
        content.push(details[key])
    }
    let str = content.join("\n");
    return str;
}



// eslint-disable-next-line valid-jsdoc
/**
 * 
 * @returns undefined;
 */
function findTitles() {
  let titles = showTitle();
  const titleString = titles.join("\n");
  let textArea = document.getElementById("displayArea");
  textArea.innerHTML= titleString;
  return;
}

// eslint-disable-next-line valid-jsdoc
/**
 * 
 * @returns undefined;
 */
  function showTitle(){
    let titles =[];
    for(let element of library){
        titles.push(element.title);
           }
       titles.sort();
      
    return titles;
        
} 

// eslint-disable-next-line valid-jsdoc
/**
 * 
 * @returns undefined
 */
function findAuthors(){
    let authors = getAuthors();
    const authorString = authors.join("\n") ;
    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = authorString;
    
    return;
}

// eslint-disable-next-line valid-jsdoc
/**
 * 
 * @returns undefined;
 */
function getAuthors(){
    let authorArray =[];
    for(let element of library ){
       authorArray.push(element.author)
            }
        authorArray.sort();
        return authorArray;
}

// eslint-disable-next-line valid-jsdoc
/**
 * 
 * @returns undefined;
 */
function findIDs(){
    let bookIds = getBookID();
    const idString = bookIds.join("\n");
    document.getElementById("displayArea").innerHTML= idString;
    return;

}

// eslint-disable-next-line valid-jsdoc
/**
 * 
 * @returns undefined;
 */
function getBookID(){
    let ids =[];
    for(let element of library){
        ids.push(element.libraryID);
            }
        ids.sort();
    return ids;
}





window.onload = pageLoad;


//module.exports ={findTitles,findAuthors,findIDs};

 /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

// const titles = findTitles();

/*need to sort and then join the titles still (e.g., someArray.join("\n")  */
// titles.sort();
//      const titleString = titles.join("\n");

//     let textArea = document.getElementById("displayArea");
//    textArea.innerHTML = titleString;
// }

