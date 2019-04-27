import React from "react";
import PropTypes from "prop-types";

import "../assets/styles/pokedex.css";

const Pokedex = props => (
  <div id="pokedex">
    <div id="left">
      <div id="logo" />
      <div id="bg_curve1_left" />
      <div id="bg_curve2_left" />
      <div id="curve1_left">
        <div id="buttonGlass">
          <div id="reflect"> </div>
        </div>
        <div id="miniButtonGlass1" />
        <div id="miniButtonGlass2" />
        <div id="miniButtonGlass3" />
      </div>
      <div id="curve2_left">
        <div id="junction">
          <div id="junction1" />
          <div id="junction2" />
        </div>
      </div>
      <div id="screen">
        <div id="topPicture">
          <div id="buttontopPicture1" />
          <div id="buttontopPicture2" />
        </div>
        <div id="picture">
          <img src={props.sprite} alt="Welcome Pokedex" height="170" />
        </div>
        <div id="buttonbottomPicture" />
        <div id="speakers">
          <div className="sp" />
          <div className="sp" />
          <div className="sp" />
          <div className="sp" />
        </div>
      </div>
      <div id="bigbluebutton" />
      <div id="barbutton1" />
      <div id="barbutton2" />
      <div id="cross">
        <div id="leftcross">
          <div id="leftT" />
        </div>
        <div id="topcross">
          <div id="upT" />
        </div>
        <div id="rightcross">
          <div id="rightT" />
        </div>
        <div id="midcross">
          <div id="midCircle" />
        </div>
        <div id="botcross">
          <div id="downT" />
        </div>
      </div>
    </div>
    <div id="right">
      <div id="stats">
        <strong>Name :</strong> {props.name}
        <br />
        <strong>Type :</strong> {props.types.map(type => `${type.type.name}, `)}
        <br />
        <strong>Height :</strong> {props.height}
        <br />
        <strong>Weight :</strong> {props.weight} lbs.
        <br />
        <br />
        <strong>Abilities :</strong>{" "}
        {props.abilities.map(ability => `${ability.ability.name}, `)}
        <br />
      </div>
      <div id="blueButtons1">
        <div className="blueButton" />
        <div className="blueButton" />
        <div className="blueButton" />
        <div className="blueButton" />
        <div className="blueButton" />
      </div>
      <div id="blueButtons2">
        <div className="blueButton" />
        <div className="blueButton" />
        <div className="blueButton" />
        <div className="blueButton" />
        <div className="blueButton" />
      </div>
      <div id="miniButtonGlass4" />
      <div id="miniButtonGlass5" />
      <div id="barbutton3" />
      <div id="barbutton4" />
      <div id="yellowBox1" />
      <div id="yellowBox2" />
      <div id="bg_curve1_right" />
      <div id="bg_curve2_right" />
      <div id="curve1_right" />
      <div id="curve2_right" />
    </div>
  </div>
);

Pokedex.propTypes = {
  sprite: PropTypes.string,
  name: PropTypes.string,
  types: PropTypes.array,
  height: PropTypes.number,
  weight: PropTypes.number,
  abilities: PropTypes.array
};

export default Pokedex;
