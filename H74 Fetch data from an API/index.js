// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     } else {
//       throw new Error("No such Pokemon Exist");
//     }
//   })
//   .then((data) => console.log(data.weight))
//   .catch((error) => console.error(error));

async function fetchData() {
  try {
    const pokie = document
      .getElementById("pokemonName")
      .value.toLocaleLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokie}`);

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      const pokemonImgUrl = data.sprites.front_default;
      const pokemonName = data.name;
      const pokemonWeight = data.weight;

      const abilities = data.abilities;
      let abilityList = [];
      for (let ability of abilities) {
        abilityList.push(ability.ability.name);
      }

      abilityList = abilityList.map(
        (ab) => ab.charAt(0).toUpperCase() + ab.slice(1)
      );

      const types = data.types;
      let typeList = [];
      for (let type of types) {
        typeList.push(type.type.name);
      }

      typeList = typeList.map((ab) => ab.charAt(0).toUpperCase() + ab.slice(1));

      const pokemonImg = document.getElementById("pokemonImg");
      const pokemonNameHTML = document.getElementById("name");
      const pokemonWeightHTML = document.getElementById("weight");
      const pokemonAbilityHTML = document.getElementById("ability");
      const pokemonTypeHTML = document.getElementById("type");

      pokemonImg.src = pokemonImgUrl;
      pokemonImg.style.display = "block";
      pokemonNameHTML.textContent = pokemonName.toUpperCase();
      pokemonWeightHTML.textContent = `Weight : ${pokemonWeight} Kg`;
      pokemonAbilityHTML.textContent = `Abilities : ${abilityList.join(",  ")}`;
      pokemonTypeHTML.textContent = `Pokemon Type : ${typeList.join(",  ")}`;
    } else {
      throw new Error("No such Pokemon exist");
    }
  } catch (error) {
    console.error(error);
  }
}

// fetchData();
