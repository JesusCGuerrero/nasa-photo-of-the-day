import React from "react";

function Bottom(props) {
  return (
    <div className="Bottom">
      <img src={props.img} alt="Nasa"/>
      <div className="text-content">
        <p>{props.explanation}</p>
      </div>
    </div>
  );
}

export default Bottom;
