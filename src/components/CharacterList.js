import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      <h2>
        {data.map(character) => (
          <CharacterCard
            key={character.id}
            image={character.image}
            name={character.name}
            species={character.species}
            status={character.status}
        )};
      </h2>
    </section>
  );
}
