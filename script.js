" use strict ";

const pokemonQuantity = 30;
const pokemonContainer = document.querySelector(".pokemon__container");
async function handlePokemon(data) {
  const pokemonCard = document.createElement("div");
  pokemonCard.classList.add("pokemon__card");
  pokemonCard.innerHTML = `<div class= "pokemon__card">
        <h2> ${data.name} </h2>
    
        </div>
     `;
  pokemonContainer.appendChild(pokemonCard);
}
async function fetchPokemonsInOrder() {
  for (let i = 1; i < pokemonQuantity; i++) {
    await fetchPokemon(i);
  }
}
async function fetchPokemon(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();
  handlePokemon(data);
}

fetchPokemonsInOrder();
/*
      //
const pokemonContainer = document.querySelector("pokemon__container");
const pokemonCard = document.createElement("div");
pokemonCard.classList.add("pokemon__card");
pokemonContainer.appendChild(pokemonCard);

// For loop
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

pokemonCard.innerHTML= `<div class="pokemon__card">
        <h2>Dikachu</h2>
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.stickpng.com%2Fimages%2F580b57fcd9996e24bc43c325.png&f=1&nofb=1&ipt=736def7ece618c09f874f4424fc2a783005da849c234960e9ebcf7446304a99d&ipo=images"
          alt="Pikachu"
        />
      </div>`
      */
