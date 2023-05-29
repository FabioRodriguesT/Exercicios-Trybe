## PARTE I - Elementos de bloco e elementos inline

# Para fixar

1. Para realizar o exercício, leia atentamente o enunciado. Após entender o que foi pedido, desenvolva a solução e então verifique se você conseguiu cumprir com o que foi solicitado.

2. Para realizar este exercício copie o código HTML abaixo. Em seguida, faça a implementação das propriedades CSS e, se necessário, faça adições à estrutura HTML existente, para que o resultado final seja similar à imagem referência.
Lembre-se que a estrutura da página deve ser mantida para que a semântica do código seja preservada.

3. Link imagem: https://content-assets.betrybe.com/prod/222a0c4b-11a9-4b0e-b72c-b631216c6cff-Podium%20and%20prizes%20final%20structure.png
ou /praticando/exemplo.webp

# INICIO CÓDIGO HTML

<!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ranking</title>
    <style>
      h1 {
        text-align: center;
      }

      .first {
        background-color: rgb(235, 200, 84);
        font-size: 20px;
        height: 50px;
        text-align: center;
        width: 200px;
      }

      .second {
        background-color: rgb(219, 219, 219);
        font-size: 20px;
        height: 50px;
        text-align: center;
        width: 300px;
      }

      .third {
        background-color: rgb(170, 142, 106);
        font-size: 20px;
        height: 50px;
        text-align: center;
        width: 300px;
      }

    </style>
  </head>
  <body>
    <header>
      <h1>Hackathon Results</h1>
    </header>
    <section>
      <ul>
        <li class="first">1º - Equipe 1</li>
        <li class="second">2º - Equipe 2</li>
        <li class="third">3º - Equipe 3</li>
      </ul>
    </section>
    <section class="premiacao">
      <h3>Premiação Primeiro Lugar:</h3>
      <ul>
        <li>| R$ 1000,00 por integrante da equipe |</li>
        <li>| Bootcamp de 2 meses com possibilidade de contratação |</li>
      </ul>
      <h3>Premiação Segundo Lugar:</h3>
      <ul>
        <li>| R$ 600,00 por integrante da equipe |</li>
        <li>| Participação no processo seletivo para o Bootcamp |</li>
      </ul>
      <h3>Premiação Terceiro Lugar:</h3>
      <ul>
        <li>| R$ 300,00 por integrante da equipe |</li>
        <li>| Participação no processo seletivo para o Bootcamp |</li>
      </ul>
    </section>
  </body>
</html>

# FIM CÓDIGO HTML

# Dica:Links de referência para os novos elementos semânticos do HTML 5 (Opcional)

4. Apesar desses artigos possuírem uma versão em português, recomendamos que você o leia em inglês por ser mais completo. Todos os links devem ser consumidos apenas até a seção Examples.

5. Estes são alguns dos elementos semânticos que você mais utilizará em sua jornada como pessoa desenvolvedora:

6. header : O elemento header representa um cabeçalho contendo texto introdutório. Clique no link para ler mais sobre o elemento header

7. nav : O elemento nav representa um conjunto de links de navegação. Clique no link para ler mais sobre o elemento nav

8. aside : O elemento aside representa um conteúdo que é relacionado ao conteúdo principal da nossa página, mas tem objetivo diferente. Ou seja, o conteúdo dentro do elemento aside está ao lado do texto principal. A tradução literal pro português seria “à parte”, “de lado”, o que traz o sentindo semântico. Alguns exemplos de sua utilização são: barras laterais, que podem ser explicações laterais, como a definição de um glossário de acordo com a documentação do elemento aside

9. article : O elemento article representa um conteúdo autocontido. Ou seja, todo o conteúdo presente dentro de um article provê as informações necessárias para sua compreensão, podendo ser reusado em outras páginas. Clique no link para ler mais sobre o elemento article

10. section : O elemento section representa uma seção do documento, agrupando conteúdos relacionados. Clique no link para ler mais sobre o elemento section

11. footer : O elemento footer representa o rodapé do documento e/ou de uma seção. Clique no link para ler mais sobre o elemento footer