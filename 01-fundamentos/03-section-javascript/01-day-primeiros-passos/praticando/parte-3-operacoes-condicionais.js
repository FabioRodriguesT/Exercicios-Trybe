let grade = 80;
let resultado = "";
let count1 = 2;

if (grade >= 80) {
    resultado = "Parabéns, você faz parte do grupo de pessoas aprovadas!"
} else if (grade < 80 && grade >= 60) {
    resultado = "Você está na nossa lista de espera."
} else {
    resultado = "Infelizmente, você reprovou."
}

// Operação ternaria.
let resultado2 = grade >= 80 ? "Parabéns, você faz parte do grupo de pessoas aprovadas!" : grade < 80 && grade >= 60 ? "Você está na nossa lista de espera." : "Infelizmente, você reprovou."

let count2 = count1 === 1 ? "Número 1" : count1 === 2 ? "Número 2" : "Não é número 1 nem 2"; 

console.log(resultado);
console.log(resultado2);
console.log(count2);