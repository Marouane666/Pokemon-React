import React, { useState } from "react";

const Pokeinfo = ({ data }) => {
  //let typePok = data.types[0].type.name;
  const typeColors = {
    normal: "#AAAAAA", // Very light gray
    fire: "#FFC68C", // Light orange
    water: "#87CEEB", // Light blue
    electric: "#FFFF99", // Very light yellow
    grass: "#98FB98", // Light green
    ice: "#B0E0E6", // Light blue
    fighting: "#FF6B6B", // Light red
    poison: "#B586E0", // Light purple
    ground: "#D2B48C", // Light brown
    flying: "#D3D3D3", // Light gray
    psychic: "#FFD1DC", // Very light pink
    bug: "#D1FFA3", // Light green
    rock: "#CD853F", // Light brown
    ghost: "#8B91C6", // Light blue-gray
    steel: "#B0B0B0", // Light gray
    dragon: "#7B9CC3", // Light blue
    dark: "#777777", // Dark gray
    fairy: "#FFB6C1", // Light pink
    // Add more types and their corresponding more desaturated colors here
  };

  const getTypeBackground = (typePok) => {
    return typeColors[typePok.toLowerCase()] || "white"; // Default to white if the type is not recognized
  };
  //console.log(getTypeBackground(data.types[0].type.name));

  return (
    <>
      {data && (
        <>
          <div
            className="right-content"
            style={{ background: getTypeBackground(data.types[0].type.name) }}
          >
            <h1>{data.name}</h1>

            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
              alt=""
            />
            <div className="abilities">
              {data.abilities.map((poke) => (
                <div className="group" key={poke.ability.name}>
                  <h2>{poke.ability.name}</h2>
                </div>
              ))}
            </div>
            <div className="base-stat">
              {data.stats.map((poke) => (
                <h3 key={poke.stat.name}>
                  {poke.stat.name}:{poke.base_stat}
                </h3>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Pokeinfo;
