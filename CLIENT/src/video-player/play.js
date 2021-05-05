import React from "react";

const Play = (props) => {
  console.log(props);
  const renderVideo = () => {
    return (
      <>
        <iframe
          width="1060"
          height="500"
          src={props.data}
          frameBorder="1"
          allowFullScreen
        ></iframe>
      </>
    );
  };
  return <div>{renderVideo()}</div>;
};

export default Play;
