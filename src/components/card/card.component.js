import React from "react";
import "./card.styles.css";
export const Card = props => (
         <div class="card-container">
           <img
             alt="monster"
             src={"https://robohash.org/${props.monster1.id}.png?set=set2"}
           />
           
           <h1>{props.monster1.name}</h1>
           <h3>{props.monster1.email}</h3>
         </div>
       );
