import React from "react";
import Header from "./header/header";
import Playlist from "./playlist/playlist";
import Player from "./video-player/player";
import {} from "react-router-dom";
function App() {
  return (
    <main>
      <Header />
      <Player />
    </main>
  );
}
export default App;
