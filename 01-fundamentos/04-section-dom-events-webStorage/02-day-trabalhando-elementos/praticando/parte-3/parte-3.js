// Remova a tag h2, filha do elemento where-are-you.

const whereAreYou = document.querySelector('#where-are-you');
const childRemoved = whereAreYou.firstElementChild;

whereAreYou.removeChild(childRemoved);

document.getElementById('cars').firstElementChild.remove()

