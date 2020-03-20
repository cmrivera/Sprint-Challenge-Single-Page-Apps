import React from "react";

export default function CharacterCard() {
  return (
    <Card>
      <img src={props.image} alt="character image" />
      <h2> Name: {props.name}</h2>
      <p> Species: {props.species}</p>
      <p>Status: {props.status}</p>
    </Card>
  );
}
