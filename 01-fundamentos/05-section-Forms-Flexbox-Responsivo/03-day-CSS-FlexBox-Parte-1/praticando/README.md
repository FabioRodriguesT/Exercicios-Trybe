# PARTE I - Introdução-flex-direction, flex-wrap, flex-flow e reverse

### Para fixar
Chegou o momento de testar os conhecimentos apresentados no conteúdo do dia. Vamos nessa?

Para realizar os exercícios propostos copie o código abaixo:

```HTML
<!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flexbox - Flex Flow</title>
    <style>
      .box {
        color: #9069EF;
        background-color: rgb(243, 243, 243);
        border: 2px solid #232525;
        font-size: 50px;
        height: 60px;
        margin: 10px 5px;
        text-align: center;
        width: 30%;
      }

      .box-container {
        background-color: #0fa36b;
        display: flex;
        /* ADICIONE AQUI SEUS TESTES */
      }
    </style>

  </head>
  <body>
    <div class="box-container">
      <div class="box">1</div>
      <div class="box">2</div>
      <div class="box">3</div>
      <div class="box">4</div>
      <div class="box">5</div>
    </div>
  </body>
</html>
```

1. Teste as possibilidades da propriedade flex-direction.
2. Teste as possibilidades para a propriedade flex-wrap.
3. Teste as possibilidades para a propriedade flex-flow.

# PARTE II - Propriedades: justify-content, align-items e align-content

Para fixar
Interessante quantas possibilidades para manipular o posicionamento de elementos o flex-box nos traz, não é? Chegou o momento de testar os conhecimentos apresentados no conteúdo do dia. Vamos nessa?

Para realizar os exercícios propostos copie o código abaixo:

1. Teste as possibilidades para a propriedade justify-content.

```HTML
<!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flexbox - Justify Content</title>
    <style>
      .box {
        color: #9069EF;
        background-color: rgb(243, 243, 243);
        border: 2px solid #232525;
        font-size: 50px;
        height: 60px;
        margin: 10px 5px;
        text-align: center;
        width: 20%;
      }

      .box-container {
        background-color: #0fa36b;
        display: flex;
        /* ADICIONE AQUI SEUS TESTES */
      }
    </style>

  </head>
  <body>
    <div class="box-container">
      <div class="box">1</div>
      <div class="box">2</div>
      <div class="box">3</div>
    </div>
  </body>
</html>
```

2. Teste as possibilidades para a propriedade align-items.

Para realizar os exercícios propostos copie o código abaixo:

```HTML
<!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flexbox - Align Content</title>
    <style>
      .box {
        color: #9069EF;
        background-color: rgb(243, 243, 243);
        border: 2px solid #232525;
        font-size: 50px;
        min-height: 60px;
        margin: 10px 5px;
        text-align: center;
        width: 30%;
      }

      .box-container {
        /* ADICIONE AQUI SEUS TESTES */
        background-color: #0fa36b;
        display: flex;
        flex-wrap: wrap;
        height: 600px;
      }
    </style>

  </head>
  <body>
    <div class="box-container">
      <div class="box">1</div>
      <div class="box">2</div>
      <div class="box">3</div>
      <div class="box">4</div>
      <div class="box">5</div>
      <div class="box">6</div>
      <div class="box">7</div>
      <div class="box">8</div>
      <div class="box">9</div>
    </div>
  </body>
</html>
```

3. Teste as possibilidades para a propriedade align-content.

