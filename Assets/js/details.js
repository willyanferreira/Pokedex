document.getElementById('moreDetails').addEventListener('click', () => {
    const pokemon = document.getElementById('pokemon').innerHTML;
    const pokeSRC = document.getElementById('pokeSRC').src;
    const pokeID = document.getElementById('pokeID').innerHTML;
    const pokeType = document.getElementsByClassName('types')[0].innerHTML;
    exibeDetalhes(pokemon, pokeSRC, pokeID, pokeType);
})

const detailsPokemon = document.querySelector('#detailsPokemon');
const resumePokemon = document.querySelector('#pokemon');
const stats = document.querySelector('#stats');
function exibeDetalhes(pokemon, pokeSRC, pokeID, pokeType) {
    stats.style.display = 'flex';
    resumePokemon.innerHTML = `
        <div class="${pokeType}">
            <h1>${pokeID} - ${pokemon}</h1>
            <div id="detailsIMG"><img src="${pokeSRC}" /></div>
        </div>
    `
    fetch(`${baseUrl}${pokemon}`)
    .then(response => response.json())
    .then(data => data.stats.map(e => `<li>${e.stat.name}:<div style="width: ${e.base_stat}px;" class="statsPercent"></div> ${e.base_stat}</li>`).join(''))
    // .then(data => console.log(data))
    .then(recuperarDetalhesPokemon)
    .catch(erro => console.log(erro))
}

document.querySelector('#closeDetails').addEventListener('click', () => {
    stats.style.display = 'none';
})

function recuperarDetalhesPokemon(props) {
    detailsPokemon.innerHTML = `
        <ol>${props}</ol>
    `
}