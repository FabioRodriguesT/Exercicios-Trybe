/* Exercício 1
    Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. É necessário que seu código tenha duas variáveis, num1 e num2, definidas no começo com os valores que serão operados. Escreva códigos para:

    Adição (num1 + num2)
    Subtração (num1 - num2)
    Multiplicação (num1 * num2)
    Divisão (num1 / num2)
    Módulo (num1 % num2)*/

    let num1 = 37;
    let num2 = 5;

    console.log(`A adiação de ${num1} e ${num2} é igual a ${num1 + num2}.`);
    console.log(`A subtração de ${num1} e ${num2} é igual a ${num1 - num2}.`);
    console.log(`A multiplicação de ${num1} e ${num2} é igual a ${num1 * num2}.`);
    console.log(`A divisão de ${num1} e ${num2} é igual a ${num1 / num2}.`);
    console.log(`O módulo de ${num1} e ${num2} é igual a ${num1 % num2}.`);


/*  Exercício 2
    Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas variáveis com os valores que serão comparados. */

    let num3 = 7000;
    let num4 = 7000;   

    if (num3 > num4) {
        var maior = num3;
    } else if (num3 < num4) {
        var maior = num4;
    } else {
        var maior = "nenhum, porque são iguais."
    }

    // Fixando operações ternarias.

    let maior2 = num3 > num4 ? num3 : num3 < num4 ? num4 : "nenhum, porque são iguais.";

    console.log(`\nO número maior entra ${num3} e ${num4} é ${maior}.`);
    console.log(`O número maior entra ${num3} e ${num4} é ${maior2}.`);

/*  Exercício 3
    Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três variáveis com os valores que serão comparados.*/

    let num5 = 5;
    let num6 = 17;
    let num7 = 1;
    
    if (num5 > num6 && num5 > num7) {
        var maior3 = num5;
    } else if (num6 > num5 && num6 > num7) {
        var maior3 = num6;
    } else {
        var maior3 = num7;
    }

    // Fixando operações ternarias.

    let maior4 = num5 > num6 && num5 > num7 ? num5 : num6 > num5 && num6 > num7 ? num6 : num7;

    console.log(`\nO número maior entre ${num5}, ${num6}, ${num7} é ${maior3}.`)
    console.log(`O número maior entre ${num5}, ${num6}, ${num7} é ${maior4}.`)

/*  Exercício 4
    Utilize if...else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.
    
    Dica: para os ângulos serem de um triângulo válido, a soma dos três ângulos deve ser 180 graus. Um ângulo será considerado inválido se não tiver um valor positivo.*/

    let angulo1 = 60;
    let angulo2 = 60;
    let angulo3 = 60;
    let message = "";

    if (angulo1 + angulo2 + angulo3 == 180) {
        message = "A figura é um triângulo.";
    } else if (angulo1 <= 0 || angulo2 <= 0 || angulo3 <= 0)  {
        message = "ERRO - Um dos ângulos é negativo ou zero.";
    } else {
        message = "A figura não é um triângulo.";
    }

    // Fixando operações ternarias.

    let message2 = angulo1 + angulo2 + angulo3 == 180 ? "A figura é um triângulo." : angulo1 <= 0 || angulo2 <= 0 || angulo3 <= 0 ? "ERRO - Um dos ângulos é negativo ou zero." : "A figura não é um triângulo."

    console.log("\n"+message);
    console.log(message2);

/* Exercício 5
   Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer.

   Se a peça passada for inválida, o código deve retornar uma mensagem de erro.

   ⭐️ Desafio extra, escreva um código para funcionar+ "."
   let movimentos = '';

   switch (peca.toLocaleLowerCase()) {
    case 'torre':
        movimentos = 'As torres se movimentam em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.'
        break;
    case 'cavalo':
        movimentos = 'Os cavalos é única peça que pode saltar sobre as outras peças do tabuleirose é conhecido por se movimentar em um-dois ou em L, pode andar duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal, uma na horizontal e duas na vertical.';
        break;
    case 'bispo':
        movimentos = 'Os bispos se movimentam na diagonal, quantas casas quiser.';
        break;
    case 'dama': 
    case 'rainha':
        movimentos = 'A dama ou rainha se movimenta em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres.';
        break;
    case 'rei':
        movimentos = 'O rei se movimenta qualquer direção, porém apenas uma casa por vez.';
        break;
    case 'peão':
        movimentos = 'Os peões se movimentam sempre uma casa para frente, exceto no primeiro movimento, quando podem mover-se duas casas. Os peões são a única peça que não pode retroceder e podendo capturar as peças que estejam uma fileira acima, mas nas colunas adjacentes a sua, ou seja, nas diagonais.';
        break;
    default:
        movimentos = 'ERRO - Essa não é um peça correspondente ao jogo de xadrez.';
   }

   console.log ('\n' + movimentos)

/*  6. Exercício 6: Há um par entre nós
    Utilize if...else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, o código deve retornar false.
    Faça esse exercício utilizando somente um if.*/

    let num61 = 18;
    let num62 = 33;
    let num63 = 29;
    let isPar = '';

    if (num61 % 2 == 0 || num62 % 2 == 0 || num63 % 2 == 0) {
        isPar = 'Um ou mais números são pares.';
    } else {
        isPar = 'Todos os números são ímpares.';
    }

    // Fixando operações ternarias

    let isPar2 = num61 % 2 == 0 || num62 % 2 == 0 || num63 % 2 == 0 ? 'Um ou mais números são pares.' : 'Todos os números são ímpares.'

    console.log('\n' + isPar);
    console.log(isPar2)

/*  Exercício 7

    Utilize if...else para escrever um código que, dado um salário bruto, calcule o salário líquido a ser recebido.

    Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS (Instituto Nacional do Seguro Social) e o IR (Imposto de Renda).

    ⭐️ A notação para um salário de R$1.500,10, por exemplo, deve ser 1500.10.

    Para as faixas de impostos, use as seguintes referências:

    INSS
    Salário bruto até R$ 1.556,94: alíquota de 8%;
    Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%;
    Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%;
    Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88.

    IR
    Até R$ 1.903,98: isento de imposto de renda;
    De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto;
    De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto;
    De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto;
    Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
    O cálculo deve ser o demonstrado a seguir
    O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para o INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
    
    Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
    
    Para calcular o valor do IR, considera-se um salário-base (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, em que a alíquota é de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, tem-se:
    
    R$ 2.670,00 - salário com INSS já deduzido;
    7.5% - alíquota de imposto de renda, que representa um desconto de R$ 200,25;
    R$ 142,80 - parcela a ser deduzida do imposto de renda.
    Para obter o valor do imposto de renda, calcula-se: R$ 200,25 (que representa 7,5% de R$ 2.670,00) - R$ 142,80 (dedução do imposto de renda) = R$ 57,45.
    
    Para obter o salário líquido, calcula-se: R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
    
    Resultado: R$ 2.612,55.
    
    👀 Dica: Que tal identificar as alíquotas com variáveis de nomes explicativos?*/

    let salBruto = 3000;
    let taxaINSS = 330; 

    if (salBruto < 1556.94) {
        taxaINSS = (salBruto * 8)/100;
    } else if (salBruto >= 1556.95 && salBruto < 2594.92) {
        taxaINSS = (salBruto * 9)/100;
    } else if (salBruto >= 2594.93 && salBruto < 5189.82) {
        taxaINSS = (salBruto * 11)/100;
    } else {
        taxaINSS = 570.88;
    }

    let salBase = salBruto - taxaINSS;

    let taxaIR;
    let parcelaIR;   

    if (salBase < 1903.98) {
        taxaIR = 0;
        parcelaIR = 0;        
    } else if (salBase >= 1903.99 && salBase < 2826.65) {
        taxaIR = 7.5;
        parcelaIR = 142.80;       
    } else if (salBase >= 2826.66 && salBase < 3751.05) {
        taxaIR = 15;
        parcelaIR = 354.80;
    } else if (salBase >= 3751.06 && salBase < 4664.68) {
        taxaIR = 22.5;
        parcelaIR = 636.13;
    } else {
        taxaIR = 27.5;
        parcelaIR = 869.36;
    }

    let valorIR = ((salBase * taxaIR)/100) - parcelaIR;

    let salLiquido = salBase - valorIR;

    console.log("\nSua taxa do INSS: " + taxaINSS.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + ".");
    console.log("Salário base: " + salBase.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + ".");
    console.log("Sua taxa do IR: " + taxaIR+"%");
    console.log("Sua parcela do IR: " + parcelaIR.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + ".");
    console.log("Seu valor a pagar do IR: " + valorIR.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + ".");
    console.log("Seu salário líquido: " + salLiquido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + ".");


