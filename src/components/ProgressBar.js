import React from "react";

const ProgressBar = ({ bgcolor, progress, height, progressText }) => {
  const Parentdiv = {
    height: height,
    width: "100%",
    backgroundColor: "gray",
    borderRadius: 15,
    margin: 10,
  };

  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: "#00171F",
    borderRadius: 15,
    textAlign: "left",
  };

  const progresstext = {
    padding: 10,
    color: "white",
    fontWeight: 100,
    fontSize: 32,
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${progressText}`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
