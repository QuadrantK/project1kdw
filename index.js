// Basic Dropdown and Selection is returned/displayed to the user

const userChoice = document.querySelector('.favList');
    
userChoice.addEventListener('change', (event) => {
    const favOutput = document.querySelector('.favOutput');
    favOutput.textContent = `Thank you for enjoying Willow's ${event.target.value} section!`;
});



// selectElement.addEventLi
//     document.getElementById('favourite').value = favList.options[mylist.selectedIndex].text;
