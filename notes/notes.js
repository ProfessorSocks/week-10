let buttonsByTag = document.getElementsByTagName('button');
console.log(buttonsByTag);


let button = document.getElementById('btn');
let content = document.getElementById('content');

button.addEventListener('click', () => {
    if (content.innerHTML == 'goodbye'){
        content.innerHTML = 'Hello';
    }else{
       content.innerHTML = 'goodbye'; 
    }
})

document.getElementById('remove').addEventListener('click', () => {
    let idremove = document.getElementById('remove-id').value;
    let elementRemove = document.getElementById(idremove);
    content.parentNode.removeChild(elementRemove);
    document.getElementById('remove-id').value = ''

});

let id = 0;

document.getElementById('add').addEventListener('click', ()=>{
    var parent = document.getElementById('paragraphs');
    var newElement = document.createElement('p');
    newElement.innerHTML = document.getElementById('new-text').value;
    newElement.setAttribute('id', id++);
    parent.appendChild(newElement)
    document.getElementById('new-text').value = ''
})

