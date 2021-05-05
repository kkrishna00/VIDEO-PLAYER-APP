import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";
import "./add.css";
import Play from "../video-player/play";

const Add = () => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");

  const addtoList = () => {
    Axios.post("http://localhost/postMessages", {
      title: title,
      link: link,
    });
  };
  return (
    <div className="Control">
      <label htmlFor="">Title</label>
      <input
        type="text"
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <label>Link</label>
      <input
        type="text"
        onChange={(event) => {
          setLink(event.target.value);
        }}
      />
      <div>
        <button onClick={addtoList} className="btn">
          AddToList
        </button>
      </div>
    </div>
  );
};

export default Add;
