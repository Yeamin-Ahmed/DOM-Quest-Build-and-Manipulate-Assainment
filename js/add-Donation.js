document.getElementById("add-donation")
.addEventListener("click", function(event)
{
    event.preventDefault();

    const addMoney = getInputValueById('input-add-money');

   
    if (isNaN(addMoney)){
        alert('টাকা দেন ভাই');
        return;
    }
const balance = getTextValueById('donate-balance1');

const newBal = balance + addMoney;

document.getElementById('donate-balance1').innerText = newBal;


});
// *************************


// main balance theke taka kata!

document.getElementById("add-donation").addEventListener("click", function(event) {
    event.preventDefault(); 

    const addMoney = getInputValueById('input-add-money');

    
    if (isNaN(addMoney)) {
        alert('টাকা দেন ভাই'); 
        return;
    }

    const balance = getTextValueById('account-balance'); 

    
    if (addMoney > balance) {
        alert('ভাই তুই কি নিজেরে হাতিম তাই ভাবস');
        return;
    }

   
    const newBalance = balance - addMoney;
    document.getElementById('account-balance').innerText = newBalance; 
});


function getInputValueById(id) {
    const inputValue = document.getElementById(id).value; 
    return ; 
}


function getTextValueById(id) {
    const textValue = document.getElementById(id).innerText; 
    return; 
}

