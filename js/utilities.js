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
