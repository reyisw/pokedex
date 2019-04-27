import fetch from "node-fetch";

async function callApi(pokemonName) {
  let jsonResponse = {};

  await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`,
    {
      method: "GET",
      "Content-Type": "application/json"
    }
  )
    .then(res => res.json())
    .then(json => {
      jsonResponse = json;
    });

  return jsonResponse;
}

export default callApi;
