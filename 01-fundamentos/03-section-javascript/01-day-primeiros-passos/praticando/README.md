# PARTE I - Variáveis e tipos

# Tipos de variáveis
1. O exemplo abaixo apresenta as informações de uma pessoa paciente. Utilize o operador typeof para imprimir o tipo das variáveis patientId, isEnrolled e patientEmail.

# INICIO DO CÓDIGO DE JAVASCRIPT

let patientId = 50;
let isEnrolled = true;
let patientEmail = 'ana@email.com';

# FIM DO CÓDIGO DE JAVASCRIPT

2. Exemplo:

console.log(typeof patientId); // number

3. O que aconteceria se tentássemos checar o tipo da variável patientAge? Experimente executar o comando:

console.log(typeof patientAge);

4. Essa variável não foi declarada, não é mesmo? É exatamente por esse motivo que o seu tipo é undefined. Além disso, experimente trocar o valor de patientId = 50 para patientId = '50'. Execute novamente um console.log() para imprimir o tipo dessa variável após a modificação. Você vai ver que agora o retorno é uma string, visto que foi colocado o número 50 dentro das aspas. Assim, o JavaScript interpreta como string tudo o que estiver entre aspas.

# Dica: Se liga nesse foguete!
Embora todos os exercícios contribuam para sua formação, fique de olho nos destacados com 🚀, pois são fundamentais para que você vá bem no projeto!! 👀

# Para fixar
# Vamos praticar o que aprendemos! 💪

# Dica: com o plugin Code Runner que vimos no vídeo, você pode executar o seu código no VS Code com o atalho (Linux: Ctrl + Alt + n / MacOs: Ctrl + Option + n). Aqui você encontra mais informações sobre o Code Runner!

# Dica: Nos exercícios de fixação você poderá fazer diretamente pela ferramenta abaixo. Para carregar a ferramenta, clique em Run Project. Siga as instruções que aparecerão do lado direito e divirta-se!

6. Crie uma constante chamada myName e atribua a ela o seu nome (Exemplo: Carolina);
7. Crie uma constante chamada birthCity e atribua a ela a sua cidade natal;
8. Crie uma constante chamada birthYear e atribua a ela o ano em que você nasceu;
9. Utilize o console.log() para imprimir as variáveis que você criou.

## PARTE II - Operações aritméticas

# Para fixar
# Vamos fazer algumas operações simples para encontrarmos a área e o perímetro de um retângulo de base 5 e altura 8.

1. Crie uma constante chamada base e atribua a ela o valor 5;
2. Crie uma constante chamada height e atribua a ela o valor 8;
3. Crie uma constante chamada area e atribua a ela o resultado da multiplicação da base pela height;
4. Crie uma constante chamada perimeter e atribua a ela o resultado da soma de todos os lados de um retângulo.

## PARTE III - Operações condicionais

# Para fixar

1. Criar estruturas condicionais com operadores if/else e operadores lógicos será muito comum em sua carreira de pessoa desenvolvedora. Então, vamos praticar essa habilidade!
2. Crie uma variável chamada grade que receba a nota de uma pessoa candidata em um desafio técnico e atribua um valor entre 1 e 100;
3. Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se está na lista de espera. Para isso, considere estas informações.
4. Se grade for maior ou igual a 80, armazene na variável message: “Parabéns, você faz parte do grupo de pessoas aprovadas!”;
5. Se grade for menor que 80 e maior ou igual a 60, armazene na variável message: “Você está na nossa lista de espera.”;
6. Se grade for menor que 60, armazene na variável message: “Infelizmente, você reprovou.”.
7. ➡️ Crie uma estrutura condicional utilizando if, else if e else para criar o seu algoritmo e os operadores lógicos que se aplicam a cada situação.
8. ➡️ Altere o valor da nota para verificar se as condições que você implementou funcionam.

## PARTE IV - Operadores lógicos

# Para fixar
1. Crie uma variável chamada currentHour que receba um número entre 1 e 24, conforme sua escolha, para representar as horas do dia;

2. Crie uma variável chamada message que inicialmente seja uma string vazia;

3. Implemente as seguintes condicionais:

4. Se o horário for maior ou igual a 22, insira “Não deveríamos comer nada, é hora de dormir” na variável message;

5. Se o horário for maior ou igual a 18 e menor que 22, insira “Rango da noite, vamos jantar :D” na variável message;

6. Se o horário for maior ou igual a 14 e menor que 18, insira “Vamos fazer um bolo pro café da tarde?” na variável message;

7. Se o horário for maior ou igual a 11 e menor que 14, insira “Hora do almoço!!!” na variável message;

8. Se o horário estiver entre 4 e 11, insira “Hmmm, cheiro de café recém-passado” na variável message.

9. Agora, imprima a variável message fora das suas condições.
