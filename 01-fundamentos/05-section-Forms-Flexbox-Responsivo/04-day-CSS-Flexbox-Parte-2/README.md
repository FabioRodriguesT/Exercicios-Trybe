# PARTE I - Vamos praticar!

Para realizar os exercícios a seguir, crie um arquivo HTML e um arquivo CSS, e utilize os códigos abaixo:

```HTML
<!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TRYFLIX</title>
    <link rel="stylesheet" href="./style.css">
  </head>
  <body>
    <header class="header-container">
      <nav class="menu-container">
        <ul>
          <li>Cadastre-se</li>
          <li>Conecte-se</li>
          <li>Sobre</li>
        </ul>
      </nav>
      <section class="logo-container">
        <img
          src="https://fontmeme.com/permalink/201215/2044acc483426f38dc2c79c3c84ab998.png"
          alt="Website Logo"
        />
      </section>
    </header>
  </body>
</html>
```

```CSS
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Ubuntu';
}

body {
  background-color: rgb(247, 247, 247);
}

.header-container {
  background-color: #5C687C;
  display: flex;
}

.logo-container {
  display: flex;
  justify-content: center;
}

.menu-container {
  display: flex;
}

.menu-container ul {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.menu-container li {
  color: white;
  font-weight: 500;
  font-size: 1.3rem;
  list-style: none;
  margin-right: 10px;
}
```

1. Adicione uma propriedade flex-basis aos containers:

Do logotipo com o tamanho de 268px;
Do container do menu com o tamanho de 500px.
Após aplicar as propriedades, o header deverá estar similar à imagem abaixo:

link: https://content-assets.betrybe.com/prod/c80d8457-1b86-4f0a-a7d2-ee6628f8e573-exercicio-1.jpeg

2. Adicione uma propriedade Flexbox que modifica a ordem em que o logo e os itens do menu aparecem na tela. Após aplicar a propriedade, o header deverá estar similar à imagem abaixo:

link: https://content-assets.betrybe.com/prod/568c1814-b408-434a-a686-7f72943d0c78-exercicio-2.jpeg

3. Adicione uma propriedade Flexbox que faça o container do menu crescer, quando houver espaço disponível. Após aplicar a propriedade, o header deverá estar similar à imagem abaixo:

link: https://content-assets.betrybe.com/prod/0f5d837b-4fcd-4082-b8f9-e107768a205c-exercicio-3.jpeg

4. Utilize a propriedade align-self no elemento correto para que o header da página tenha o seguinte comportamento:

link: https://content-assets.betrybe.com/prod/3dd32cd4-de52-40df-8a51-c070553601a0-exercicio-4.jpeg

# PARTE I.II

5. Para continuar a prática, vamos acrescentar mais alguns elementos aos nossos arquivos HTML e CSS. Para isso copie os trechos a seguir e aplique no seu código:

```HTML
<!-- ... -->
    <!-- </section>
  </header> -->
    <main class="main-container"> -
      <section class="movie-container">
        <section>
          <h2>Assista hoje</h2>
          <div class="card-container">
            <div>FILMES 1</div>
            <div>FILMES 2</div>
            <div>FILMES 3</div>
            <div>FILMES 4</div>
            <div>FILMES 5</div>
            <div>FILMES 6</div>
            <div>FILMES 7</div>
            <div>FILMES 8</div>
            <div>FILMES 9</div>
          </div>
        </section>
        <article>
          <h2>Mais assistidos</h2>
          <div class="card-container">
            <div>FILMES 1</div>
            <div>FILMES 2</div>
            <div>FILMES 3</div>
            <div>FILMES 4</div>
            <div>FILMES 5</div>
            <div>FILMES 6</div>
            <div>FILMES 7</div>
            <div>FILMES 8</div>
            <div>FILMES 9</div>
          </div>
        </article>
      </section>
  <aside class="aside-container">
    <h3>Últimas notícias</h3>

    <h4>Title</h4>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet officia in provident esse excepturi ipsam!</p>

    <h4>Title</h4>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet officia in provident esse excepturi ipsam!</p>

    <h4>Title</h4>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet officia in provident esse excepturi ipsam!</p>
  </aside>
</main>
  <!-- </body>
</html> -->
```
```CSS
.main-container {
  display: flex;
  flex-wrap: wrap;
}

.movie-container {
  display: flex;
  flex-direction: column;
}

.movie-container h2 {
  margin: 40px 0;
  text-align: center;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.card-container div {
  align-items: center;
  background-color: #5C687C;
  border: black solid 1px;
  display: flex;
  height: 150px;
  justify-content: center;
  margin: 10px;
}

.aside-container {
  display: flex;
  flex-direction: column;
  margin: 20px;
}

.aside-container h3, h4 {
  margin-bottom: 10px;
  text-align: center;
}

.aside-container p {
  margin: 10px 0;
  text-align: justify;
}
```

6. Aplique no seu container aside uma base de 350px. Deverá ficar similar à imagem abaixo:

link: https://content-assets.betrybe.com/prod/2b59ec30-f9b3-4e4d-b281-f7291d8689a0-exercicio-part2-1.png

7. Nos elemento aside, centralize e expanda seu conteúdo. Seu aside deve apresentar o seguinte comportamento:

link: https://content-assets.betrybe.com/prod/3e167205-0678-493e-a812-a6eb1f397eda-exercicio-part2-2.png

8. Adicione uma propriedade ao seu container de filmes para que ele tenha uma base de 700px. Também adicione para os elementos filhos do seu card uma base de 16%. Deve ficar similar à imagem abaixo:

link: https://content-assets.betrybe.com/prod/4d759609-4b84-4450-8319-8142475226c1-exercicio-part2-3.png

9. No container de filmes aplique uma propriedade para expandi-lo, essa propriedade deve ter o valor 10. Deve ficar similar à imagem abaixo:

link: https://content-assets.betrybe.com/prod/7b0ee4c8-5f2a-4fda-90b3-b8eb2185d6e3-exercicio-part2-4.png

10. Faça com que suas div do container de filmes ocupe todo o espaço em branco. Deve ficar similar à imagem abaixo:

link: https://content-assets.betrybe.com/prod/9fb88616-b7d4-4b18-b766-58aa5ce6b5a2-exercicio-part2-5.png

#### Extra (opcional)
Para finalizar, escolha alguns exercícios antigos, como, por exemplo, o portfólio ou até mesmo os projetos de HTML, CSS e JavaScript e estruture as páginas utilizando Flexbox.