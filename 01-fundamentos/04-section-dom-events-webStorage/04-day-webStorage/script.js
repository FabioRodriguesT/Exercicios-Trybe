window.onload = () => {
  const setBackgroundColor = (color) => {
    let content = document.querySelector(".content")
    content.style.backgroundColor = color;
    //1. Armazene a cor de fundo escolhida pela pessoa usuária no navegador.
    localStorage.setItem('backgroundColor', color);
  }

  const setFontColor = (color) => {
    let paragraphs = document.querySelectorAll(".paragraph")
    for (let index = 0; index < paragraphs.length; index += 1) {
      paragraphs[index].style.color = color
    }
    //2. Armazene a cor do texto escolhida pela pessoa usuária no navegador.
    localStorage.setItem('textColor', color);
  }

  const setFontSize = (size) => {
    let paragraphs = document.querySelectorAll(".paragraph")
    for (let index = 0; index < paragraphs.length; index += 1) {
      paragraphs[index].style.fontSize = size
    }
    //3. Armazene o tamanho da fonte escolhida pela pessoa usuária no navegador.
    localStorage.setItem('fontSize', size);

  }

  const setLineHeight = (height) => {
    let paragraphs = document.querySelectorAll(".paragraph")
    for (let index = 0; index < paragraphs.length; index += 1) {
      paragraphs[index].style.lineHeight = height
    }
    //4. Armazene o espaçamento entre as linhas do texto escolhido pela pessoa usuária no navegador.
    localStorage.setItem('lineSpacing', height);
  }

  const setFontFamily = (family) => {
    let paragraphs = document.querySelectorAll(".paragraph")
    for (let index = 0; index < paragraphs.length; index += 1) {
      paragraphs[index].style.fontFamily = family
    }
    //5. Armazene o tipo da fonte (Font family) escolhida pela pessoa usuária no navegador.
    localStorage.setItem('fontFamily', family)
  }

  // Cor de fundo da tela;
  let backgroundColorButtons = document.querySelectorAll("#background-color>button")
  for (let index = 0; index < backgroundColorButtons.length; index += 1) {
    backgroundColorButtons[index].addEventListener("click", (event) => {
      setBackgroundColor(event.target.innerHTML)
    })
  }

  // Cor do texto;
  let fontColorButtons = document.querySelectorAll("#font-color>button")
  for (let index = 0; index < fontColorButtons.length; index += 1) {
    fontColorButtons[index].addEventListener("click", (event) => {
      setFontColor(event.target.innerHTML)
    })
  }

  // Tamanho da fonte
  let fontSizeButtons = document.querySelectorAll("#font-size>button")
  for (let index = 0; index < fontSizeButtons.length; index += 1) {
    fontSizeButtons[index].addEventListener("click", (event) => {
      setFontSize(event.target.innerHTML)
    })
  }

  // Espaçamento entre as linhas do texto;
  let lineHeightButtons = document.querySelectorAll("#line-height>button")
  for (let index = 0; index < lineHeightButtons.length; index += 1) {
    lineHeightButtons[index].addEventListener("click", (event) => {
      setLineHeight(event.target.innerHTML)
    })
  }

  // Tipo da fonte (_Font family_).
  let fontFamilyButtons = document.querySelectorAll("#font-family>button")
  for (let index = 0; index < fontFamilyButtons.length; index += 1) {
    fontFamilyButtons[index].addEventListener("click", (event) => {
      setFontFamily(event.target.innerHTML)
    })
  }

  //6. Ao retornar à página, as preferências que foram salvas devem ser mantidas na tela.
  const initialize = () => {
    console.log ('entrou aki')
    let backgroundColor = localStorage.getItem("backgroundColor")
    if (backgroundColor) setBackgroundColor(backgroundColor);
    let textColor = localStorage.getItem('textColor');
    if (textColor) setFontColor(textColor);
    let fontSize = localStorage.getItem('fontSize');
    if (fontSize) setFontSize(textColor);
    let lineSpacing = localStorage.getItem('lineSpacing');
    if (lineSpacing) setLineHeight(lineSpacing);
    let fontFamily = localStorage.getItem('fontFamily');   
    if (fontFamily) setFontFamily(fontFamily);
  }
  
  initialize();

} // onLoad Acaba aqui






