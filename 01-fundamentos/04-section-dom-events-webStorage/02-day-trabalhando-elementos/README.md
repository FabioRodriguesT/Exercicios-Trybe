# Parte I - Exercícios – Aprofunde seu conhecimento

🚀 Se liga nesse foguete!

Os exercícios destacados com 🚀 são os fundamentais pra você ir bem no projeto! Todos os exercícios vão contribuir para sua formação, mas fique de olho nesses! 👀

Imagine que você trabalha em uma agência de viagens e sua liderança informa que você será a pessoa responsável por dar início à nova página inicial (landing page) da empresa.

Seu objetivo nesse novo desafio é criar tags HTML usando a manipulação do DOM com JavaScript. Para isso, utilize a estrutura inicial apresentada a seguir.

Observação 🔎: Há um estilo inicial definido na estrutura a seguir para que você possa visualizar se os elementos na página foram criados. Ao final do exercício, fique à vontade para usar sua criatividade e mudar o texto e os estilos da página.

```HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Exercício</title>
    <style>
      section {
        border-color: black;
        border-style: solid;
      }

      .title {
        text-align: center;
      }

      .main-content {
        background-color: yellow;
      }

      .main-content .center-content {
        background-color: red;
        width: 50%;
        margin-left: auto;
        margin-right: auto;
      }

      .main-content .center-content p {
        font-style: italic;
      }

      .main-content .left-content {
        background-color: green;
        width: 60%;
        margin-left: 0;
        margin-right: auto;
      }

      .main-content .left-content .small-image {
        display: block;
        margin-left: auto;
        margin-right: auto;
        border-radius: 100%;
      }

      .main-content .right-content {
        background-color: blue;
        width: 60%;
        margin-left: auto;
        margin-right: 0;
      }

      .main-content .description {
        text-align: center;
      }
    </style>
  </head>
  <body>
    <script>
      // COLOQUE SEU CÓDIGO AQUI
    </script>
  </body>
</html>
```

Para criar a página inicial da agência de viagens, você deve utilizar apenas código JavaScript, o qual deve ser inserido entre as tags <script> e </script>.

Para dar início à página, você deve criar algumas tags, conforme o passo a passo indicado a seguir:

1. Adicione a tag h1 com o texto TrybeTrip - Agência de Viagens como filho da tag body;
2. Adicione a tag main com a classe main-content como filho da tag body;
3. Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
4. Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
5. Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
6. Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
7. Adicione uma imagem com src configurado para valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;
8. Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, e assim por diante. Essa lista deve ser filha do section criado no passo 6;
9. Adicione 3 tags h3, todas filhas do main criado no passo 2.


### Bônus

Suponha que, depois da criação das tags indicadas, sua liderança tenha visualizado a estrutura inicial da página e pedido a você que fizesse as seguintes alterações:

10. Adicione a classe title na tag h1 criada;
11. Adicione a classe description nas 3 tags h3 criadas;
12. Remova a section criada no passo 5 (aquela que possui a classe left-content) por meio da função .removeChild();
13. Centralize a section criada no passo 6 (aquela que possui a classe right-content).
### Dica 👀: Para centralizar a section, basta configurar o margin-right: auto da section.
14. Troque a cor de fundo do elemento-pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;
15. Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.