//  para consultar -> https://github.com/digitalinnovationone/js-developer-pokedex

const container = document.querySelector('#container');
const showPokemon = document.querySelector('#showPokemon');

function MyDiv(props) {
    showPokemon.innerHTML = `
        <h1 id="pokemon">${props.order} - ${props.name}</h1>
        <img src="${props.sprites.other.dream_world.front_default}"/>
    `
}

// document.write('Conseguirei em nome de Jeses!');

const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
let offset = 0;
const limit = 1;

function exibePokemon(offset) {
    container.setAttribute('class', 'transicao');
    fetch(`${baseUrl}?offset=${offset}&limit=${limit}`)
        .then(response => response.json())
        .then(data => data.results)
        .then(results => fetch(results[0].url))
        .then(resultsResponse => resultsResponse.json())
        // .then(resultsData => console.log(resultsData.stats.map(e => e.stat.name + ':' + e.base_stat)))
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

document.getElementById('moreDetails').addEventListener('click', () => {
    const pokemon = document.getElementById('pokemon').innerHTML;
    exibeDetalhes(pokemon);
})

const detailsPokemon = document.querySelector('#detailsPokemon');
const stats = document.querySelector('#stats');
function exibeDetalhes() {
    stats.style.display = 'block';
    detailsPokemon.innerHTML = `
        Deus seja louvado, amém.
        `
}

document.querySelector('#closeDetails').addEventListener('click', () => {
    alert('Tô aqui!');
})