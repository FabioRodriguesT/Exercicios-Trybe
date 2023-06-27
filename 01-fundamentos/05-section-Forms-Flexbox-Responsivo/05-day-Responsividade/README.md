# PARTE I - Exercicios - Criando layouts para dispositivos móveis e para impressão

🚀 Se liga neste foguete!

Os exercícios com o ícone 🚀 são fundamentais para ir bem no projeto! 👀 Todos os exercícios vão contribuir com a sua formação.

Agora que você aprendeu como criar layouts específicos para diferentes tamanhos de tela, vamos colocar as mãos na massa! 💻📲

1. Criando layouts para dispositivos móveis e impressão
Para iniciar o exercício, crie os arquivos kitten-kare.html e kitten-kare.css e cole os códigos abaixo:

```HTML
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Kitten Kare</title>
  <link rel="stylesheet" href="kitten-kare.css" />
</head>
<body>
  <div id="container">
    <header id="header">
      <h1>
        Kitten Kare
      </h1>
    </header>
    <nav id="navigation">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
      </ul>
    </nav>
    <main id="content-container">
      <article id="content">
        <h2>
          Welcome!
        </h2>
        <img src="https://placekitten.com/400/400">
        <p>The domestic cat (Felis catus or Felis silvestris catus, informally Felis domesticus) is a
          small, usually furry, domesticated, carnivorous mammal. It is often called the housecat when kept as an indoor
          pet, or simply the cat when there is no need to distinguish it from other felids and felines. Cats are
          valued by humans for companionship and ability to hunt vermin and household pests. They are primarily
          nocturnal.
        </p>
        <p>Cats are similar in anatomy to the other felids, with strong, flexible bodies, quick reflexes, sharp
          retractable claws, and teeth adapted to killing small prey. As crepuscular predators, cats use their acute
          hearing and ability to see in near darkness to locate prey. Not only can cats hear sounds too faint for human
          ears, they can also hear sounds higher in frequency than humans can perceive. This is because the usual prey
          of cats (particularly rodents such as mice) make high frequency noises, so the hearing of the cat has evolved
          to pinpoint these faint high-pitched sounds. Cats also have a much better sense of smell than humans.
        </p>
        <p>Despite being solitary hunters, cats are a social species, and cat communication includes the use of a
          variety of vocalizations (meowing, purring, trilling, hissing, growling and grunting) as well as pheromones
          and types of cat-specific body language.
        </p>
      </article>
      <aside id="aside">
        <h3>
          Cat Body Types
        </h3>
        <ul>
          <li>Oriental</li>
          <li>Foreign</li>
          <li>Semi-Foreign</li>
          <li>Semi-Cobby</li>
          <li>Cobby</li>
        </ul>
      </aside>
    </main>
    <footer id="footer">
      Copyright © Kitten Kare, 2019
    </footer>
  </div>
</body>
</html>
```

```CSS
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

#container {
  margin: 0 auto;
  width: 100%;
  background: #fff;
}

#header {
  background: #ccc;
  padding: 20px;
}

#header h1 {
  margin: 0;
}

#navigation {
  width: 100%;
  background: #333;
}

#navigation ul {
  display: flex;
  margin: 0;
  padding: 0;
}

#navigation ul li {
  list-style-type: none;
  display: flex;
}

#navigation li a {
  padding: 5px 10px;
  color: #fff;
  text-decoration: none;
  width: 100%;
}

#navigation li a:hover {
  background: #383;
}

#content-container {
  width: 100%;
  background: #FFF;
  display: flex;
}

#content {
  width: 60%;
  padding: 20px 0;
  margin: 0 0 0 4%;
}

#content h2 {
  margin: 0;
}

#aside {
  width: 33%;
  padding: 20px 0;
  margin: 0 3% 0 0;
}

#aside h3 {
  margin: 5px;
}

#footer {
  background: #ccc;
  text-align: right;
  padding: 20px;
  height: 1%;
}
```
O objetivo desse exercício é usar media queries para fazer a página acima ficar diferente na hora da impressão e em diferentes tamanhos de tela.

2. Crie uma versão de layout para impressão
Os elementos id header, navigation e footer devem desaparecer.
O elemento id='aside' deve ser mostrado abaixo do conteúdo principal.
A versão de layout deve se parecer com a imagem abaixo:

link: https://content-assets.betrybe.com/prod/acb43bcd-38e1-480c-9009-1c9cdea930d6-Visualiza%C3%A7%C3%A3o%20da%20p%C3%A1gina%20antes%20da%20impress%C3%A3o.png

#### Dica: Você pode visualizar como ficará a impressão por meio do atalho Ctrl+P no Linux ou Cmd+P no Mac.

3. Crie uma versão de layout para telas pequenas
O elemento id='aside' deve desaparecer.
As imagens não devem exceder a largura da tela.
Os itens dentro do elemento navigation devem aparecer cada um em sua própria linha.
O elemento id header deve ser fixo, de forma que fique aparecendo sempre no topo da tela, mesmo após a pessoa usuária rolar a página.
A versão de layout para telas pequenas deve se parecer com a imagem abaixo:

link: https://content-assets.betrybe.com/prod/acb43bcd-38e1-480c-9009-1c9cdea930d6-240x320:%20tela%20pequena%20.png
