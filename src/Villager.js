import React from "react";
import { GiFemale, GiMale } from "react-icons/gi";

const Villager = ({
  image_uri,
  name,
  "birthday-string": bday,
  "catch-phrase": phrase,
  icon_uri,
  personality,
  hobby,
  gender,
}) => {
  let genderIcon;
  gender === "Female" ? (genderIcon = <GiFemale />) : (genderIcon = <GiMale />);
  return (
    <div className="singleCard">
      <div className="names">
        <h2>{name["name-USen"]}</h2>
        <img className="icon" src={icon_uri} alt="#" />
      </div>
      <img className="image" src={image_uri} alt="#" />
      <div className="personality">
        <p>{personality}</p>
        <p>{genderIcon}</p>
      </div>
      <p>Birthday: {bday}</p>
      <p>Catchphase: {phrase}</p>
      <p>Hobby: {hobby}</p>
    </div>
  );
};

export default Villager;
