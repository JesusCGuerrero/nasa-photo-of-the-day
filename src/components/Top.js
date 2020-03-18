import React from "react";



function Top(props) {
  
  return (
    <div className="Card">
      <h1>{props.title}</h1>
      <h6>{props.date}</h6>
    </div>
  );
}

export default Top;
