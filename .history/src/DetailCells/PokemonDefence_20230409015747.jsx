import React, { useState, useEffect } from 'react';

function PokemonDefense({ pokemonName }) {
  const [typeDefense, setTypeDefense] = useState(null);

  useEffect(() => {
    async function fetchTypeDefense() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      const pokemonData = await response.json();
      const defenseData = pokemonData.types.map(async (type) => {
        const typeResponse = await fetch(type.type.url);
        const typeData = await typeResponse.json();
        return typeData.damage_relations;
      });
      const defenseResults = await Promise.all(defenseData);
      const defenseObject = {};
      defenseResults.forEach((typeDefense) => {
        typeDefense.double_damage_from.forEach((type) => {
          if (defenseObject[type.name]) {
            defenseObject[type.name].doubleDamage++;
          } else {
            defenseObject[type.name] = { doubleDamage: 1, halfDamage: 0, noDamage: 0 };
          }
        });
        typeDefense.half_damage_from.forEach((type) => {
          if (defenseObject[type.name]) {
            defenseObject[type.name].halfDamage++;
          } else {
            defenseObject[type.name] = { doubleDamage: 0, halfDamage: 1, noDamage: 0 };
          }
        });
        typeDefense.no_damage_from.forEach((type) => {
          if (defenseObject[type.name]) {
            defenseObject[type.name].noDamage++;
          } else {
            defenseObject[type.name] = { doubleDamage: 0, halfDamage: 0, noDamage: 1 };
          }
        });
      });
      setTypeDefense(defenseObject);
    }
    fetchTypeDefense();
  }, [pokemonName]);

  return (
    <>
      {typeDefense && (
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Double Damage</th>
              <th>Half Damage</th>
              <th>No Damage</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(typeDefense).map((type) => (
              <tr key={type}>
                <td>{type}</td>
                <td>{typeDefense[type].doubleDamage}</td>
                <td>{typeDefense[type].halfDamage}</td>
                <td>{typeDefense[type].noDamage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default PokemonDefense;