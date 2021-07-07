import React from "react";

const Villager = ({ icon_uri, name }) => {
  return (
    <div className="singleCard">
      <h2>{name["name-USen"]}</h2>
      <img src={icon_uri} alt="#" />
    </div>
  );
};

export default Villager;
