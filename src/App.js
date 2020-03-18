import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios"
import Top from "./components/Top"
import Bottom from "./components/Bottom"
import Dropdown from "./components/Dropdown"

function App() {

const [data, setData] = useState({})
const [date, setDate] = useState("2020-03-18")

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=en0MsQg3cwoNyMzt8zjrq2eVddaJzXsJJD6cn766&date=${date}`)
      .then(response => {
        setData(response.data)
      })
      .catch(error => {
        console.log("data was not returned", error);
      });
  }, []);
  
  console.log(data)
  return (
    <div className="App">
        <Dropdown />
        <Top title={data.title}date={data.date}/>
        <Bottom  img={data.url} explanation={data.explanation} />
       
    </div>
  );
}

export default App;
