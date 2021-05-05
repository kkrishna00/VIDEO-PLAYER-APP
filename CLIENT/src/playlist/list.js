import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Axios from "axios";
import Play from "../video-player/play";
import Controller from "./controller";
const List = () => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [list, setList] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost/postMessages").then((Response) => {
      setList(Response.data);
    });
  }, []);
  const deleteList = (id) => {
    Axios.delete(`http://localhost/postMessages/${id}`).then((response) => {
      setList(
        list.filter((val) => {
          return val._id != id;
        })
      );
    });
  };
  const [state, setstate] = useState({ data: "" });

  const changeState = (val) => {
    setstate({
      data: val.link,
    });
  };
  return (
    <>
      <Play data={state.data}></Play>
      <div className="mainlist">
        <h1>PlayList</h1>
        <div className="listname">
          {list.map((val, key) => {
            return (
              <div className="list">
                <button
                  key={key}
                  // className="list"
                  className="listbtn"
                  onClick={() => changeState(val)}
                >
                  {val.title}
                </button>
                <button
                  type="submit"
                  className="btn"
                  onClick={() => deleteList(val._id)}
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <Controller />
    </>
  );
};

export default List;
