import React from "react";



function Top(props) {
  
  return (
    <div className="Card">
      <img src={props.img} alt="Nasa"/>
      <p>{props.explanation}</p>
    </div>
  );
}

export default Top;
