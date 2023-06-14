//1. Adicione a tag h1 com o texto TrybeTrip - Agência de Viagens como filho da tag body;

const bodyElement = document.querySelector('body');
const titleElement = document.createElement('h1');
titleElement.innerText = 'TrybeTrip - Agência de Viagens';

bodyElement.appendChild(titleElement);

//2. Adicione a tag main com a classe main-content como filho da tag body;

const mainElement = document.createElement('main');
mainElement.className = 'main-content';
bodyElement.appendChild(mainElement);

//3. Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

const centerSectionElement = document.createElement('section');
centerSectionElement.className = 'center-content';
mainElement.appendChild(centerSectionElement);

//4. Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

const textCenterSectionElement = document.createElement('p');
textCenterSectionElement.innerText = 'Algum texto na seção!!!';
centerSectionElement.appendChild(textCenterSectionElement);

//5. Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

const leftSectionElement = document.createElement('section');
leftSectionElement.className = 'left-content';
mainElement.appendChild(leftSectionElement);

//6. Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

const rightSectionElement = document.createElement('section');
rightSectionElement.className = 'right-content';
mainElement.appendChild(rightSectionElement);

//7. Adicione uma imagem com src configurado para valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;

const leftImageSectionElement = document.createElement('img');
leftImageSectionElement.src = 'https://picsum.photos/200';
leftImageSectionElement.className = 'small-image';
leftSectionElement.appendChild(leftImageSectionElement);

//8. Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, e assim por diante. Essa lista deve ser filha do section criado no passo 6;

const unorderedListElement = document.createElement('ul');
for (let index = 1; index < 11; index += 1) {
  const countListElement = document.createElement('li');
  countListElement.innerText = index;
  unorderedListElement.appendChild(countListElement);  
}

rightSectionElement.appendChild(unorderedListElement);

//9. Adicione 3 tags h3, todas filhas do main criado no passo 2.

const firstSubtitleElement = document.createElement('h3');
firstSubtitleElement.innerText = 'Primeiro Elemento h3';
const secondSubtitleElement = document.createElement('h3');
secondSubtitleElement.innerText = 'Segundo Elemento h3';
const thirdSubtitleElement = document.createElement('h3');
thirdSubtitleElement.innerText = 'Terceiro Elemento h3';

mainElement.appendChild(firstSubtitleElement);
mainElement.appendChild(secondSubtitleElement);
mainElement.appendChild(thirdSubtitleElement);

// 10. Adicione a classe title na tag h1 criada;

titleElement.className = 'title';

// 11. Adicione a classe description nas 3 tags h3 criadas;

const listOfH3 = document.querySelectorAll('h3');

for (let index = 0; index < listOfH3.length; index += 1) {
  listOfH3[index].className = 'description';  
}

//firstSubtitleElement.className = 'description';
//secondSubtitleElement.className = 'description';
//thirdSubtitleElement.className = 'description';

// 12. Remova a section criada no passo 5 (aquela que possui a classe left-content) por meio da função .removeChild();

mainElement.removeChild(leftSectionElement);

// 13. Centralize a section criada no passo 6 (aquela que possui a classe right-content).
// Dica 👀: Para centralizar a section, basta configurar o margin-right: auto da section.

rightSectionElement.style.marginRight = 'auto';

// 14. Troque a cor de fundo do elemento-pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;

centerSectionElement.parentElement.style.backgroundColor = 'green';

// 15. Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.

unorderedListElement.removeChild(unorderedListElement.lastElementChild);
unorderedListElement.removeChild(unorderedListElement.lastElementChild);


