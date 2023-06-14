// 1. Acesse o elemento where-are-you.

const whereAreYou = document.querySelector('#where-are-you');

// 2. Acesse parent a partir de where-are-you e adicione uma color a ele.

const parent = whereAreYou.parentElement;
parent.style.backgroundColor = 'rgb(255, 150, 0)';

// 3. Acesse o first-child-of-child e adicione um texto a ele. Você se lembra dos vídeos da aula anterior? Eles ensinam como fazer isso.

const firstChildOfChild = whereAreYou.firstElementChild;
firstChildOfChild.innerHTML= '<p>Você se lembra dos vídeos da aula anterior? Eles ensinam como fazer isso.</p>';

// 4. Acesse o first-child a partir de parent.

const firstChild = parent.firstElementChild;

// 5. Acesse o first-child a partir de where-are-you.

const previousElement = whereAreYou.previousElementSibling;

// 6. Acesse o texto Attention! a partir de where-are-you.

const attentionText = whereAreYou.nextSibling;// esse acessa qualquer coisa que estive na frente.

// 7. Acesse o third-child a partir de where-are-you.

const thirdChildWhereAreYou = whereAreYou.nextElementSibling;// esse acessa o proximo elemento.

// 8. Acesse o third-child a partir de parent.

const thirdChildParent = parent.lastElementChild.previousElementSibling;