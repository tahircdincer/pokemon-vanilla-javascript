" use strict ";

const pokemonQuantity = 30;
const pokemonContainer = document.querySelector(".pokemon__container");
async function handlePokemon(data) {
  const pokemonCard = document.createElement("div");
  pokemonCard.classList.add("pokemon__card");
  const name = data.name.slice(0, 1).toUpperCase() + data.name.slice(1);
  pokemonCard.innerHTML = `<div class= "pokemon__card">
        <h2> ${name} </h2>
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png" alt= ${name}/>
        </div>
     `;
  pokemonContainer.appendChild(pokemonCard);
}
async function fetchPokemonsInOrder() {
  for (let i = 1; i <= pokemonQuantity; i++) {
    await fetchPokemon(i);
  }
}
async function fetchPokemon(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();
  handlePokemon(data);
}

fetchPokemonsInOrder();

// So in the ' outer ' scope there is a ' fetchPokemonsInOrder ' function. This is why because ' it ' fetches pokemons ' one ' by ' one '
// So there is a ' handlePokemon ' function inside ' fetchPokemon ' function. This is because in each iteration a div which has a class of 'pokemon__card' is ' iniated '

// This cards will be implemented if I can ' in future ' https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3-alpha.figma.com%2Fhub%2Ffile%2F1837652003%2F1954fce0-71ec-4ec8-8594-4da04c9e89b3-cover.png&f=1&nofb=1&ipt=b0070cbd53ef5eb1fa413cf30283a999a1498d1e093ef8699e5be042f8909633&ipo=images
