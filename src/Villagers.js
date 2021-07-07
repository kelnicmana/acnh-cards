import React from "react";
import Villager from "./Villager";

const Villagers = ({ villagers }) => {
  return (
    <div className="container">
      <div className="headTitle">
        <img src="./favicon.ico" alt="leaf icon" />
        <h1>Animal Crossing Villagers</h1>
        <img src="./favicon.ico" alt="leaf icon" />
      </div>
      <hr />
      <div className="allCards">
        {villagers.map((villager) => {
          return <Villager key={villager.id} {...villager} />;
        })}
      </div>
    </div>
  );
};

export default Villagers;
