export default function createAppend(element,innerText) {
    let newElement = document.createElement(element);  
    if(element == 'img') {
        newElement.src = innerText;
    } else{
    newElement.innerHTML = innerText; 
    }
    return newElement;
}