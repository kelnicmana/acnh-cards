import React from "react";
import Villager from "./Villager";

const Villagers = ({ villagers }) => {
  return (
    <div className="container">
      <h1>Villagers</h1>
      <div className="allCards">
        {villagers.map((villager) => {
          return <Villager key={villager.id} {...villager} />;
        })}
      </div>
    </div>
  );
};

export default Villagers;
