# Instalando e utilizando o Jest

Utilizando o Jest

1. Para testar sua instalação, crie um arquivo chamado sum.test.js e cole o código abaixo dentro dele:

```Javascript
const sum = (a, b) => a + b;

test('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
});
```

2. Depois disso, digite no terminal npm test. Se você receber uma resposta parecida com a resposta a seguir, significa que está tudo certo com a instalação!

link: https://content-assets.betrybe.com/prod/0efc9a1c-a5bd-4b11-8a2c-f21eec72669c-Teste%20de%20instala%C3%A7%C3%A3o.png

3. Caso você não veja a tela acima, reveja os passos dados, observe se você entrou na nova pasta que criou, verifique se não há a pasta node_modules já instalada em sua home ou na pasta-raiz e verifique o arquivo-exemplo e o nome do arquivo. Caso o arquivo não tenha .test ou .spec no nome, o Jest não o lerá, porque não o reconhece como um arquivo de teste! Isso será explicado melhor durante o conteúdo de hoje.
