# PARTE I - Input tag, types e attributes

### Para fixar
Chegou o momento de testar os conhecimentos apresentados no conteúdo do dia. Vamos criar uma tela de login?

1. Adicione os campos de entrada para e-mail e senha.

2. Adicione um checkbox com o texto “Lembre-me”.

3. Adicione um botão com o texto “Entrar”.

4. Adicione os placeholder “Digite seu e-mail“ e “Digite sua senha” para os campos de e-mail e senha.

5. Adicione o atributo required para os campos de e-mail e senha.

Adicione o atributo autocomplete="off" para o campo de e-mail.

Adicione o atributo autofocus para o campo de e-mail.

# PARTE II - Entenda o prevent Default

### Para fixar
Chegou o momento de testar os conhecimentos apresentados no conteúdo do dia. Vamos nessa?

Antes de dar início aos exercícios, siga as instruções:

1. Crie um arquivo HTML index.html;
2. Crie um arquivo JavaScript script.js;

3. Em seu arquivo HTML: adicione o <script src="script.js"></script> no final do body do HTML;
4. Copie esses três elementos em sua página, a saber a, input type="text", checkbox.

```HTML
<!-- elemento para copiar -->
<a href="www.betrybe.com" target="_blank" id="href">TRYBE</a>
<input type="text" id="input-text"/>
<input type="checkbox" id="input-checkbox" />
```

5. Em seu arquivo Javascript, adicione os seletores abaixo no começo do arquivo.

```Javascript
// SELETORES
const inputText = document.querySelector("#input-text");
const inputCheckbox = document.querySelector("#input-checkbox");
const hrefLink = document.querySelector("#href");
```

6. Adicione um evento click no elemento a que possui o id href. Na função do evento, implemente o método preventDefault para prevenir o comportamento padrão do elemento. Ou seja, ao clicar no link, nada deve acontecer.

7. Adicione um evento click no elemento checkbox que possui o id input-checkbox. Na função do evento, implemente o método preventDefault para prevenir o comportamento padrão do elemento. Ou seja, ao clicar na caixinha, nada deve acontecer.

8. Adicione um evento keypress no elemento input type="text" que possui o id input-text. Na função do evento, implemente o método preventDefault de forma que somente o caractere a (letra “a” minúscula) possa ser digitado na caixinha.

### Dica:  para capturar a tecla digitada, utilize o event.key.

Saiba mais 💡: Para entender mais sobre o comportamento do método preventDefault, acesse a documentação do MDN ou a página da w3schools.

