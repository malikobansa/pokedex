const poke = document.getElementById('pokedex');

Promise.all(
  Array.from({ length: 100 }, (_, i) => 
    fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}`)
      .then(response => response.json())
  )
).then(pokemons => {
  pokemons.forEach(pokemon => {
    poke.innerHTML += `
      <li>${pokemon.name}</li>
      <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}"/>
    `;
  });
});

  