import React from "react";
import Villager from "./Villager";

const Villagers = ({ villagers }) => {
  return (
    <div className="container">
      <h2>Villagers</h2>
      <div className="allCards">
        {villagers.map((villager) => {
          return <Villager key={villager.id} {...villager} />;
        })}
      </div>
    </div>
  );
};

export default Villagers;
