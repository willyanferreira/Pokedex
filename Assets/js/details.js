document.getElementById('moreDetails').addEventListener('click', () => {
    const pokemon = document.getElementById('pokemon').innerHTML;
    exibeDetalhes(pokemon);
})

const detailsPokemon = document.querySelector('#detailsPokemon');
const stats = document.querySelector('#stats');
function exibeDetalhes(pokemon) {
    stats.style.display = 'block';
    detailsPokemon.innerHTML = `<h1>${pokemon}</h1>`;
}

document.querySelector('#closeDetails').addEventListener('click', () => {
    stats.style.display = 'none';
})