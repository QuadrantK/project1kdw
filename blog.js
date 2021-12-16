
// Kevin: My pseudo code - What I am aiming to do here is to collect text input from the user and display it as a new comment on the blog page. I would like to have the user name field, email field and comment field be displayed as a paragraph using a template literal to display something along the lines of `${name} at ${email} posted ${comment}`.



const formElement = document.querySelector(#nameForm);
const pElement = document.querySelector('ul');    

formElement.addEventListener('submit', function (event) {
    // Kevin: Prevent Default
    event.preventDefault();

    //Kevin: Here we are getting the task from our input.
    const inputElement = document.querySelector('input');
    //Kevin: Declaring blogEntry as = the inputElement variable and its input value.

    const blogEntry = inputElement.value;

    if (blogEntry) {

    // add the blogEntry as a paragraph
    const listItemElement = document.createElement('li');
    listItemElement.appendChild(document.createTextNode(blogEntry));

    // add the new list-item element as a child to the unordered list
    const ulElement = document.querySelector('ul');
    ulElement.appendChild(listItemElement);

    // clear the input field to an empty string
        inputElement.value = '';
    }

});


ulElement.addEventListener("click", function (event) {

    if (event.target.tagName === 'I') {
        // tasks to perform
        updateToDo(event.target);
    }

});



console.log(userName);





    
    // = document.querySelector('form') 
    // console.log (nameInput);
    


