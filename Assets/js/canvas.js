// Pokédex Top
let myCanvas = document.querySelector('#pokedexTop');
console.log(myCanvas);
myCanvas.style.backgroundColor = 'red';
myCanvas.style.width = '100%';
myCanvas.style.height = '200px';

let myCanvasContext = myCanvas.getContext('2d');
let myCanvasContext2 = myCanvas.getContext('2d');
myCanvasContext.beginPath();
myCanvasContext2.beginPath();
myCanvasContext.arc(0,0,40,0,2);
myCanvasContext2.arc(95,0,40,2,0);
myCanvasContext.stroke();
myCanvasContext2.stroke();