// Get input field value

function getInputValueById(inputId){
    const inputFieldValue = document.getElementById(inputId);
    const inputValueString = inputFieldValue.value;
    const inputValue = parseFloat(inputValueString);
    inputFieldValue.value= '';
    return inputValue;
}


// Get text field value 

function getTextValueById(textId){
    const textFieldValue = document.getElementById(textId);
    const textValueString = textFieldValue.innerText;
    const textValue = parseFloat(textValueString);
    return textValue;
}

function setTextValueById(textId, newValue){
    const textFieldValue = document.getElementById(textId);
    textFieldValue.innerText = newValue;
}