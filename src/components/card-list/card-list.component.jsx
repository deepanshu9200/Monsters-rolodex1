import React from "react";


import { Card } from "../card/card.component";
import "./card-list-style.css";
// eslint-disable-next-line

export const CardList = props => {

  return (
    <div class="card-list">
      {props.monsters.map(monster1 => (
       <Card key = {monster1.id} monster1={monster1}/>
      ))}
    </div>
  );
};
