# PARTE I - Buscando elementos

Entendeu? Então, vamos praticar! Adicione o código a seguir a uma página HTML e adicione uma tag script. Você deverá fazer tudo usando somente JavaScript.

Adicione o código a seguir a uma página HTML e adicione uma tag script. Você deverá fazer tudo usando somente JavaScript.

```HTML
<main id="parent-of-parent">
  <section id="parent">
    <section id="first-child"></section>
    <section id="where-are-you">
      <section id="first-child-of-child"></section>
    </section>
    Attention!
    <section id="third-child"></section>
    <section id="fourth-and-last-child"></section>
  </section>
</main>
```

1. Acesse o elemento where-are-you.
2. Acesse parent a partir de where-are-you e adicione uma color a ele.
3. Acesse o first-child-of-child e adicione um texto a ele. Você se lembra dos vídeos da aula anterior? Eles ensinam como fazer isso.
4. Acesse o first-child a partir de parent.
5. Acesse o first-child a partir de where-are-you.
6. Acesse o texto Attention! a partir de where-are-you.
7. Acesse o third-child a partir de where-are-you.
8. Acesse o third-child a partir de parent.

# PARTE II - Criando elementos

🚀 Se liga nesse foguete!

Os exercícios destacados com 🚀 são os fundamentais pra você ir bem no projeto! Todos os exercícios vão contribuir com sua formação, mas fique de olho nesses! 👀

🚀E a prática? Aqui!

```HTML
<main id="paiDoPai">
  <section id="pai">
    <section id="primeiroFilho"></section>
    <section id="elementoOndeVoceEsta">
      <section id="primeiroFilhoDoFilho"></section>
      <section id="segundoEUltimoFilhoDoFilho"></section>
    </section>
    Atenção!
    <section id="terceiroFilho"></section>
    <section id="quartoEUltimoFilho"></section>
  </section>
</main>
```

1. Crie um irmão para elementoOndeVoceEsta.
2. Crie um filho para elementoOndeVoceEsta.
3. Crie um filho para primeiroFilhoDoFilho.
4. A partir desse filho criado, acesse terceiroFilho.

# PARTE III - Removendo Elementos

```HTML
<main id="father-of-father">
  <section id="parent">
    <section id="first-child">
      <h2>Primeiro Filho</h2>
    </section>
    <section id="where-are-you">
      <h2>Elemento que você deve remover</h2>
    </section>
    <section id="third-child">
      <h2>Terceiro Filho</h2>
    </section>
    <section id="quartoEUltimoFilho">
      <h2>Quarto Filho</h2>
    </section>      
  </section>
</main>
```

1. Remova a tag h2, filha do elemento where-are-you.