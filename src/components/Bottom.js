import React from "react";

function Bottom(props) {
  return (
    <div className="Bottom">
      <img src={props.img} alt="Nasa"/>
      <p>{props.explanation}</p>
    </div>
  );
}

export default Bottom;
