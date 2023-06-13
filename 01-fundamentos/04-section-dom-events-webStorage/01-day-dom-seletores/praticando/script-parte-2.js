document.body.style.color = "white";

//1. Altere a cor de fundo do header para rgb(0, 176, 105);
document.querySelector('#header-container').style.backgroundColor = "rgb(0, 176, 105)";

//2. Altere a cor de fundo da div das tarefas que são Urgentes e Importantes para rgb(255, 159, 132);

let urgentTaskDiv = document.querySelectorAll('.emergency-tasks div');

for (let index = 0; index < urgentTaskDiv.length; index += 1) {
  urgentTaskDiv[index].style.backgroundColor = "rgb(255, 159, 132)";
}


//3. Altere a cor de fundo do título das das tarefas que são Urgentes e Importantes para rgb(165, 0, 243);

let urgentTaskTitle = document.querySelectorAll('.emergency-tasks h3');

for (let index = 0; index < urgentTaskTitle.length; index += 1) {
  urgentTaskTitle[index].style.backgroundColor = "rgb(165, 0 , 243)";
}

//4. Altere a cor de fundo da div das tarefas que não são Urgentes e Importantes para rgb(249, 219, 94);

let noUrgentTaskDiv = document.querySelectorAll('.no-emergency-tasks div');

for (let index = 0; index < noUrgentTaskDiv.length; index += 1) {
  noUrgentTaskDiv[index].style.backgroundColor = "rgb(249, 216, 94)";
}


//5. Altere a cor de fundo do título das das tarefas que não são Urgentes e Importantes para rgb(35, 37, 37);

let noUrgentTaskTitle = document.querySelectorAll('.no-emergency-tasks h3');

for (let index = 0; index < noUrgentTaskTitle.length; index += 1) {
  noUrgentTaskTitle[index].style.backgroundColor = "rgb(35, 37, 37)";
}

//6. Altere a cor de fundo do footer para rgb(0, 53, 51).

document.querySelector('footer').style.backgroundColor = "rgb(0, 53, 51)";
