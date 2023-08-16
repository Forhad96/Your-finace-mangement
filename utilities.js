// get input field value function
function getInputFieldById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = ''
    return inputFieldValue;
}


// get deposit and withdraw value function
function getElementValueById(elementValueId){
    const elementTotal = document.getElementById(elementValueId);
    const previousElementTotalString = elementTotal.innerText;
    const previousElementTotal = parseFloat(previousElementTotalString);
    return previousElementTotal
}

// set deposit/withdraw/balance value
function setElementValueById(elementId,newValue){
    const elementText = document.getElementById(elementId);
     elementText.innerText = newValue;
}