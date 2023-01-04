

/*
function convertPokemonToLi(pokemon) {
    return `
            <li class="pokemon">
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>
                    <div class="detail">
                        <ol class="types">
                            <li class="type">Grass</li>
                            <li class="type">Poison</li>
                        </ol>
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
                    </div>
            </li>`
}*/
/*function convertPokemonTypeToLi(pokemonsTypes) {
    return pokemonsTypes.map((typeSlot) => `<li class="type"> ${typeSlot.type.name}</li>`)
}*/
const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 151
const limit = 10
let offset = 0;

function convertPokemonToLi(pokemon){
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.type}"
                     alt="${pokemon.name}">
            </div>
        </li>;
    `
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) =>{
        const newHtml = pokemons.map(convertPokemonToLi).join(``)
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWhitNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    }else{
        loadPokemonItens(offset, limit)
    }
})
    /*const ListItem = []
    

    //for (let i = 0; i < pokemonList.length; i++) {
    //        const pokemon = pokemons[i];
    //        ListItem.push(convertPokemonToLi(pokemon))
    //    }
    //console.log(ListItem)    
    }) 
    */