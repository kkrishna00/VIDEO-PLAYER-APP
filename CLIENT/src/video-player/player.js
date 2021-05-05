import React from "react";
import Play from "./play";
import "./player.css";
import List from "../playlist/list";
import "../playlist/list.css";
const Player = () => {
  return (
    <div className="mainsection">
      <h1>Welcome to Video Player</h1>
      <div>
        <List></List>
      </div>
    </div>
  );
};

export default Player;
