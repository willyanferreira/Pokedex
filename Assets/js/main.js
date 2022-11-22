//  para consultar -> https://github.com/digitalinnovationone/js-developer-pokedex

const meuh1 = document.querySelector('#teste');

function MyDiv(props) {
    meuh1.innerHTML = `
        <li>Nome: ${props.name}</li>
        <li>Ordem: ${props.order}</li>
        <li>Experiência: ${props.base_experience}</li>
        <li>Peso: ${props.weight}kg</li>
    `
}

// document.write('Conseguirei em nome de Jeses!');

const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
let offset = 0;
const limit = 1;

function exibePokemon(offset) {
    meuh1.setAttribute('class', 'transicao');
    const myRequest = fetch(`${baseUrl}?offset=${offset}&limit=${limit}`)
        .then(response => response.json())
        .then(data => data.results)
        .then(results => fetch(results[0].url))
        .then(resultsResponse => resultsResponse.json())
        // .then(resultsData => console.log(resultsData))
        .then(resultsData => resultsData)
        .then(MyDiv);
}

exibePokemon(offset);


// console.log(myRequest);

document.querySelector('#next').addEventListener('click', () => {
    offset += 1;
    exibePokemon(offset)
})

document.querySelector('#previous').addEventListener('click', () => {
    if (offset <= 0) {
        alert('Não existe pokémon anteriro a esse.');
    } else {
        offset -= 1;
        exibePokemon(offset);
    }
})