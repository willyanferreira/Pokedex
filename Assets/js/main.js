//  para consultar -> https://github.com/digitalinnovationone/js-developer-pokedex

const container = document.querySelector('#pokedex');
const showPokemon = document.querySelector('#showPokemon');

function MyDiv(props) {
    showPokemon.innerHTML = `
        <h1 id="pokemon">${props.name}</h1>
        <div id="PokeImg"><img id="pokeSRC" src="${props.sprites.other.dream_world.front_default}" style="opacity: 0.2"/></div>
        <div id="pokeTypes">${props.types.map(e => `<h1 class="types" >${e.type.name}</h1>`).join('')}</div>
        <h1 id="pokeID">#${props.id}</h1>
    `
}

{/* <ol id="pokeType">${props.types.map(e => `<li>${e.type.name}</li>`).join('')}</ol> */}

// document.write('Conseguirei em nome de Jeses!');

const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
let offset = 0;
const limit = 1;

function exibePokemon() {
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

exibePokemon();


// console.log(myRequest);

document.querySelector('#next').addEventListener('click', () => {
    offset += 1;
    exibePokemon()
})

document.querySelector('#previous').addEventListener('click', () => {
    if (offset <= 0) {
        alert('Não existe pokémon anterior a esse.');
    } else {
        offset -= 1;
        exibePokemon(offset);
    }
})