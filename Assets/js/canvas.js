// Pokédex Top
let myCanvas = document.querySelector('#pokedexTop');
let myCanvasBottom = document.querySelector('#pokedexBottom');


// DESENHANDO A PARTE DE CIMA DA POKÉDEX
{
    let myCanvasContext = myCanvas.getContext('2d');
    // ARCOS DA ESQUERDA
    myCanvasContext.beginPath();
    myCanvasContext.arc(0, 0, 40, 0, 7);
    myCanvasContext.stroke();
    myCanvasContext.beginPath();
    myCanvasContext.arc(0, 0, 60, 0, 7);
    myCanvasContext.stroke();

    // ARCOS DA DIREITA
    myCanvasContext.beginPath();
    myCanvasContext.arc(300, 0, 40, 0, 7);
    myCanvasContext.stroke();
    myCanvasContext.beginPath();
    myCanvasContext.arc(300, 0, 60, 0, 7);
    myCanvasContext.stroke();
}