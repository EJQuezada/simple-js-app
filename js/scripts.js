/*let pokemonRepository = (function () {
    let pokemonList = [
    {
        name: 'Pikachu',
        height: 0.4,
        weight: 6,
        type: ['electric']
    }, 
    {
        name: 'Charizard',
        height: '1.7',
        weight: 90.5,
        type: ['fire', 'flying']
    }, 
    {
        name: 'Squirtle',
        height: 0.5,
        weight: 9,
        type: ['water']
    }, 
    {
        name: 'Primeape',
        height: 1,
        weight: 32,
        type: ['fighting']
    }, 
    {
        name: 'Pidgeot',
        height: 1.5,
        weight: 39.5,
        type: ['flying', 'normal']
    }, 
    {
        name: 'Meowth',
        height: 0.4,
        weight: 4.2,
        type: ['normal']
    }, 
    {
        name: 'Ivysaur',
        height: 1.0,
        weight: 13,
        type: ['grass', 'poison']
    }, 
    {
        name: 'Blastoise',
        height: 1.6,
        weight: 85.5,
        type: ['water']
    }, 
    {
        name: 'Golbat',
        height: 1.6,
        weight: 55,
        type: ['poison', 'flying']
    }, 
    {
        name: 'Dugtrio',
        height: 0.7,
        weight: 33.3,
        type: ['ground']
    }    
];

    function add(pokemon) {
        pokemonList.push(pokemon);
    }
    function getAll() {
        return pokemonList;
    }
    function addListItem(pokemon){
        let pokemonList = document.querySelector
        (".pokemonList");
        let listpokemon = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("button-class");
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
    
    }
    
    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem
    };
/*pokemonList.forEach(function(_pokemon) {
    if (_pokemon.height >= 1.7) {
        document.write(_pokemon.name  +  _pokemon.height + ' - Wow, thats big!' + "</br>"  )
    }
    else {
        document.write(_pokemon.name  +  _pokemon.height + "</br>"  )
    }
      
})();
*/
let pokemonRepository = (function () {
    let pokemonList = []

let pokemonRepository = (function () {
    let pokemonList = [

pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon)
});   
