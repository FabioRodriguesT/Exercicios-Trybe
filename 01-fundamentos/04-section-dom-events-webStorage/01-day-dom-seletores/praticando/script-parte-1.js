
// 1- Recupere o elemento que contém o título da página e altere para o nome de um filme da sua escolha.

document.getElementsByTagName("h1")[0].innerText = "Asterix & Obelix: O Reino do Meio";


// 2- Recupere o primeiro parágrafo e altere o texto para o resumo do seu filme favorito.

document.getElementById("resumo").innerText = "Asterix e Obelix viajam até a China a fim de ajudar uma imperatriz colocada em risco por um abominável golpista. Do outro lado do mundo, eles terão de encarar a ameaça do usurpador e ainda as hordas do Império Romano.";

// 3- Recupere o subtítulo e altere-o para: Principais informações.
document.getElementsByTagName("h2")[0].innerText = "Principais informações.";

// 4- Recupere os parágrafos usando getElementsByClassName, e altere a fonte do primeiro parágrafo para itálico.

document.getElementsByClassName("paragrafo")[0].style.fontStyle = "italic";

// 5- Recupere o segundo parágrafo e coloque as informações principais: Exemplo: Direção: Nome da pessoa que dirigiu o filme, Roteirista: Nome da(s) pessoa(s) responsável(is) pelo roteiro

document.getElementById("principais-informacoes").innerText =
  "Direção: Guillaume Canet, Título original: Astérix & Obélix: LEmpire du Milieu, Gênero: Aventura, Comédia, Família, Ano: 2023, País de origem: França"

// 6- Recupere o subtítulo utilizando o getElementsByTagName e altere a cor da fonte para alguma de sua escolha.

document.getElementsByTagName("h2")[0].style.color = "red";