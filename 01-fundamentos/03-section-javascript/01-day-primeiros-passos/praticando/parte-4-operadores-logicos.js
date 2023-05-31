let currentHour = 3;
let message = "";

if (currentHour >= 22) {
    message = "Não deveríamos comer nada, é hora de dormir"
} else if (currentHour < 22 && currentHour >= 18) {
    message = "Rango da noite, vamos jantar :D"
} else if (currentHour < 18 && currentHour >= 14) {
    message = "Vamos fazer um bolo pro café da tarde?"
} else if (currentHour < 14 && currentHour >= 11) {
    message = "Hora do almoço!!!"
} else if (currentHour < 11 && currentHour >= 4) {
    message = "Hmmm, cheiro de café recém-passado"
} else {
    message = "É madrugada, não deveríamos comer nada."
}

// Operações ternarias - construção feita apensa para fixar o aprendizado, sei que o código ficar pior de ler assim, por causa do tando de else is nas condições estabelecidas.
let message2 = currentHour >= 22 ? "Não deveríamos comer nada, é hora de dormir" : currentHour < 22 && currentHour >= 18 ? "Rango da noite, vamos jantar :D" : currentHour < 18 && currentHour >= 14 ? "Vamos fazer um bolo pro café da tarde?" : currentHour < 14 && currentHour >= 11 ? "Hora do almoço!!!" : currentHour < 11 && currentHour >= 4 ? "Hmmm, cheiro de café recém-passado" : "É madrugada, não deveríamos comer nada."


console.log(message);
console.log(message2);

