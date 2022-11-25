// Pokédex Top
let myCanvas = document.querySelector('#pokedexTop');
let myCanvasBottom = document.querySelector('#pokedexBottom');


// DESENHANDO A PARTE DE CIMA DA POKÉDEX
{
    let myCanvasContext = myCanvas.getContext('2d');
    // ARCOS DA ESQUERDA
    // ARCO INTERNO DA ESQUERDA
    myCanvasContext.beginPath();
    myCanvasContext.arc(0, 0, 40, 0, 7);
    myCanvasContext.stroke();

    // ARCO EXTERNO DA ESQUERDA
    myCanvasContext.beginPath();
    myCanvasContext.arc(0, 0, 80, 0, 7);
    myCanvasContext.stroke();

    // ARCO CENTRAL BRANCO
    myCanvasContext.beginPath();
    myCanvasContext.arc(155, 150, 80, 0, 7);
    myCanvasContext.stroke();
    myCanvasContext.fillStyle = '#fff';
    myCanvasContext.fill();

    // ARCO CENTRAL PRETO
    myCanvasContext.beginPath();
    myCanvasContext.arc(155, 150, 70, 0, 7);
    myCanvasContext.stroke();
    myCanvasContext.fillStyle = '#000';
    myCanvasContext.fill();

    // ARCO CENTRAL AZUL
    myCanvasContext.beginPath();
    myCanvasContext.arc(155, 150, 45, 0, 7);
    myCanvasContext.stroke();
    myCanvasContext.fillStyle = '#87CEFA';
    myCanvasContext.fill();

    // ARCOS DA DIREITA
    // ARCO INTERNO DA DIREITA
    myCanvasContext.beginPath();
    myCanvasContext.arc(300, 0, 40, 0, 7);
    myCanvasContext.stroke();

    // ARCO EXTERNO DA DIREITA
    myCanvasContext.beginPath();
    myCanvasContext.arc(300, 0, 80, 0, 7);
    myCanvasContext.stroke();
}

// DESENHANDO A PARTE DE BAIXO DA POKÉDEX
{
    let myCanvasContext = myCanvasBottom.getContext('2d');
    // ARCOS DA ESQUERDA
    // ARCO INTERNO DA ESQUERDA
    myCanvasContext.beginPath();
    myCanvasContext.arc(0, 0, 40, 0, 7);
    myCanvasContext.stroke();

    // ARCO EXTERNO DA ESQUERDA
    myCanvasContext.beginPath();
    myCanvasContext.arc(0, 0, 80, 0, 7);
    myCanvasContext.stroke();

    // ARCO CENTRAL BRANCO
    myCanvasContext.beginPath();
    myCanvasContext.arc(145, 150, 80, 0, 7);
    myCanvasContext.stroke();
    myCanvasContext.fillStyle = '#fff';
    myCanvasContext.fill();

    // ARCO CENTRAL PRETO
    myCanvasContext.beginPath();
    myCanvasContext.arc(145, 150, 70, 0, 7);
    myCanvasContext.stroke();
    myCanvasContext.fillStyle = '#000';
    myCanvasContext.fill();

    // ARCO CENTRAL AZUL
    myCanvasContext.beginPath();
    myCanvasContext.arc(145, 150, 45, 0, 7);
    myCanvasContext.stroke();
    myCanvasContext.fillStyle = '#87CEFA';
    myCanvasContext.fill();

    // ARCOS DA DIREITA
    // ARCO INTERNO DA DIREITA
    myCanvasContext.beginPath();
    myCanvasContext.arc(300, 0, 40, 0, 7);
    myCanvasContext.stroke();

    // ARCO EXTERNO DA DIREITA
    myCanvasContext.beginPath();
    myCanvasContext.arc(300, 0, 80, 0, 7);
    myCanvasContext.stroke();
}