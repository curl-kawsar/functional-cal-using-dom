function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}

function getElementValueById(elementId) {
    const textElement = document.getElementById(elementId);
    const textElementString = textElement.innerText;
    const textElementValue = parseFloat(textElementString);
    return textElementValue;
}


function triangleArea(base, height) {
    const triangleArea = (0.5 * base * height).toFixed(2);
    return triangleArea;
}


function rectangleArea (width, height){
    const rectangleArea = (width * height).toFixed(2);
    return rectangleArea;
}


function parallelogramArea(base, height){
    const parallelogramArea = (base * height).toFixed(2);
    return parallelogramArea;
}


function rhombusArea(d1 , d2){
    const rhombusArea =((d1*d2)/2).toFixed(2);
    return rhombusArea;
}


function pentagoneArea(p,b){
    const pentagoneArea = (0.5 * p * b).toFixed(2);
    return pentagoneArea;
}


function elipseArea(a,b){
    const elipseArea = (3.1416 * a * b).toFixed(2);
    return elipseArea;
}

function setTextElementById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;

}



