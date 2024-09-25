// noakhali 
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

    // history
const  div = document.createElement('div');
div.classList.add ('text-2xl','font-bold','box-border',);

const historyTime = new Date();
const formattedDateTime = historyTime.toLocaleString();

div.innerHTML =`

<p>${addMoney} BDT. for Flood at Noakhali, Bangladesh</p>
<p class = "font-light"><strong>Date:</strong> ${formattedDateTime}</p>

`
document.getElementById('history-container').appendChild(div);

// else{
//     alert('gotten')
// }





});

// feni

// *******************************************



document.getElementById("add-donation1")
.addEventListener("click", function(event)
{
    event.preventDefault();

    const addMoney = getInputValueById('input-add-money1');

   
    if (isNaN(addMoney)){
        alert('টাকা দেন ভাই');
        return;
    }
const balance = getTextValueById('donate-balance2');

const newBal = balance + addMoney;

document.getElementById('donate-balance2').innerText = newBal;


});
// *************************


// main balance theke taka kata!

document.getElementById("add-donation1").addEventListener("click", function(event) {
    event.preventDefault(); 

    const addMoney = getInputValueById('input-add-money1');

    
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

    // history
const  div = document.createElement('div');
div.classList.add ('text-2xl','font-bold','box-border',);

const historyTime = new Date();
const formattedDateTime = historyTime.toLocaleString();

div.innerHTML =`

<p>${addMoney} BDT. for Flood at Feni, Bangladesh</p>
<p class = "font-light"><strong>Date:</strong> ${formattedDateTime}</p>

`
document.getElementById('history-container').appendChild(div);

// else{
//     alert('gotten')
// }





});



// quota 
// *******************************************



document.getElementById("add-donation2")
.addEventListener("click", function(event)
{
    event.preventDefault();

    const addMoney = getInputValueById('input-add-money2');

   
    if (isNaN(addMoney)){
        alert('টাকা দেন ভাই');
        return;
    }
const balance = getTextValueById('donate-balance3');

const newBal = balance + addMoney;

document.getElementById('donate-balance3').innerText = newBal;


});
// *************************


// main balance theke taka kata!

document.getElementById("add-donation2").addEventListener("click", function(event) {
    event.preventDefault(); 

    const addMoney = getInputValueById('input-add-money2');

    
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

    // history
const  div = document.createElement('div');
div.classList.add ('text-2xl','font-bold','box-border',);

const historyTime = new Date();
const formattedDateTime = historyTime.toLocaleString();

div.innerHTML =`

<p>${addMoney} BDT. for Flood at Feni, Bangladesh</p>
<p class = "font-light"><strong>Date:</strong> ${formattedDateTime}</p>

`
document.getElementById('history-container').appendChild(div);

// else{
//     alert('gotten')
// }





});

