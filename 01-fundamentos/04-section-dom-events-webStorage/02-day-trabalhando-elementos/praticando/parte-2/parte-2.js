// 1. Crie um irmão para elementoOndeVoceEsta.

const newBrotherElement = document.createElement('section');

newBrotherElement.innerHTML = '<b>Um novo irmão.</b>';

let parent = document.querySelector('#elementoOndeVoceEsta').parentElement;

parent.appendChild(newBrotherElement);

// 2. Crie um filho para elementoOndeVoceEsta.

const newChildElement = document.createElement('section');

newChildElement.innerText = 'Uma nova criança.'

let elementReceiveNewChild = document.querySelector('#elementoOndeVoceEsta');

elementReceiveNewChild.appendChild(newChildElement);

// 3. Crie um filho para primeiroFilhoDoFilho.

const newChildFirstSon = document.createElement('p');

newChildFirstSon.innerText = 'Primeiro filho do filho!';

let firstSonOfSon = elementReceiveNewChild.firstElementChild;

firstSonOfSon.appendChild(newChildFirstSon);

// 4. A partir desse filho criado, acesse terceiroFilho.

const parentfirstSonOfSon = newChildFirstSon.parentElement.parentElement;

const thirdChild = parentfirstSonOfSon.nextElementSibling;