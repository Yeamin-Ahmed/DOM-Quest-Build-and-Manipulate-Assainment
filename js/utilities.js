// function1
function getInputValueById(id) {
    const inputValue = document.getElementById(id).value; 
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}


// function2


function getTextValueById(id) {
    const textValue = document.getElementById(id).innerText; 
    const inputNumber = parseFloat(textValue); 
    return inputNumber; 
}


// function 3

function showSectionById(id){
    document.getElementById('Donate-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById('blog-section').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}